using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Datos;
using Entidades;
using Microsoft.AspNetCore.Authorization;
using Web.Models.Venta;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VentasController : ControllerBase
    {
        private readonly DbContextSistemaFML _context;

        public VentasController(DbContextSistemaFML context)
        {
            _context = context;
        }
        // GET: api/Ventas
        [Authorize(Roles = "Farmaceútica,Administrador")]
        [HttpGet("[action]")]
        public async Task<IEnumerable<VentaViewModel>> Listar()
        {
            var venta = await _context.Ventas
                .Include(v => v.Usuario)
                .OrderByDescending(v => v.IdVenta)
                .Take(100)
                .ToListAsync();

            return venta.Select(v => new VentaViewModel
            {
                IdVenta = v.IdVenta,
                IdUsuario = v.IdUsuario,
                Usuario = v.Usuario.Nombre,
                Documento = v.Documento,
                Nombre = v.Nombre,
                TipoComprobante = v.TipoComprobante,
                SerieComprobante = v.SerieComprobante,
                NumeroComprobante = v.NumeroComprobante,
                Fecha = v.Fecha,
                Igv = v.Igv,
                Total = v.Total,
                Estado = v.Estado,
            });

        }

        // GET: api/Ventas/ListarDetalles
        [Authorize(Roles = "Farmaceútica,Administrador")]
        [HttpGet("[action]/{idVenta}")]
        public async Task<IEnumerable<DetalleViewModel>> ListarDetalles([FromRoute] int idVenta)
        {
            var detalle = await _context.DetalleVentas
                .Include(p => p.Producto)
                .Where(d => d.IdVenta== idVenta)
                .ToListAsync();

            return detalle.Select(d => new DetalleViewModel
            {
                IdProducto = d.IdProducto,
                Producto = d.Producto.Nombre,
                Cantidad = d.Cantidad,
                Precio = d.Precio,
                Descuento = d.Descuento
            });

        }

        [Authorize(Roles = "Farmaceútica,Administrador")]
        [HttpPost("[action]")]
        public async Task<IActionResult> Crear([FromBody] CrearViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var fechaHora = DateTime.Now;

            Venta venta = new Venta
            {
                Documento = model.Documento,
                Nombre = model.Nombre,
                IdUsuario = model.IdUsuario,
                TipoComprobante = model.TipoComprobante,
                SerieComprobante = model.SerieComprobante,
                NumeroComprobante = model.NumeroComprobante,
                Fecha = fechaHora,
                Igv = model.Igv,
                Total = model.Total,
                Estado = "Aceptado"
            };
            try
            {
                _context.Ventas.Add(venta);
                await _context.SaveChangesAsync();

                var idVenta = venta.IdVenta;
                foreach (var det in model.Detalles)
                {
                    DetalleVenta detalle = new DetalleVenta
                    {
                        IdVenta = idVenta,
                        IdProducto = det.IdProducto,
                        Cantidad = det.Cantidad,
                        Precio = det.Precio,
                        Descuento = det.Descuento
                    };
                    _context.DetalleVentas.Add(detalle);
                }
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }

            return Ok();
        }

        [Authorize(Roles = "Farmaceútica,Vendedor,Administrador")]
        [HttpGet("[action]")]
        public async Task<IEnumerable<VentaViewModel>> VentasMes12()
        {
            var consulta = await _context.Ventas
                .GroupBy(v => v.Fecha.Month)
                .Select(x => new { etiqueta = x.Key, valor = x.Sum(v => v.Total) })
                .OrderByDescending(x => x.etiqueta)
                .Take(12)
                .ToListAsync();

            return consulta.Select(v => new VentaViewModel
            {
                etiqueta = v.etiqueta.ToString(),
                valor = v.valor
            });

        }


        // PUT: api/Ventas/Anular/1
        [Authorize(Roles = "Farmaceútica,Administrador")]
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> Anular([FromRoute] int id)
        {

            if (id <= 0)
            {
                return BadRequest();
            }

            var venta = await _context.Ventas.FirstOrDefaultAsync(v => v.IdVenta == id);

            if (venta == null)
            {
                return NotFound();
            }

            venta.Estado = "Anulado";

            try
            {
                await _context.SaveChangesAsync();
                // Inicio de código para devolver stock
                // 1. Obtenemos los detalles
                var detalle = await _context.DetalleVentas.Include(p => p.Producto).Where(d => d.IdVenta == id).ToListAsync();
                //2. Recorremos los detalles
                foreach (var det in detalle)
                {
                    //Obtenemos el artículo del detalle actual
                    var producto = await _context.Productos.FirstOrDefaultAsync(p => p.IdProducto == det.Producto.IdProducto);
                    //actualizamos el stock
                    producto.Stock = det.Producto.Stock + det.Cantidad;
                    //Guardamos los cambios
                    await _context.SaveChangesAsync();
                }
                // Fin del código para devolver stock
            }
            catch (DbUpdateConcurrencyException)
            {
                // Guardar Excepción
                return BadRequest();
            }

            return Ok();
        }



        private bool VentaExists(int id)
        {
            return _context.Ventas.Any(e => e.IdVenta == id);
        }
    }
}