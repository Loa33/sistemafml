using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Datos;
using Entidades;
using Web.Models.Compra;
using Microsoft.AspNetCore.Authorization;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComprasController : ControllerBase
    {
        private readonly DbContextSistemaFML _context;

        public ComprasController(DbContextSistemaFML context)
        {
            _context = context;
        }

        // GET: api/Compras/Listar
        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        [HttpGet("[action]")]
        public async Task<IEnumerable<CompraViewModel>> Listar()
        {
            var compra = await _context.Compras
                .Include(c => c.Usuario)
                .Include(c => c.Proveedor)
                .OrderByDescending(c => c.IdCompra)
                .Take(100)
                .ToListAsync();

            return compra.Select(c => new CompraViewModel
            {
                IdCompra = c.IdCompra,
                IdProveedor = c.IdProveedor,
                Proveedor = c.Proveedor.Nombre,
                IdUsuario = c.IdUsuario,
                Usuario = c.Usuario.Nombre,
                SerieComprobante = c.SerieComprobante,
                NumeroComprobante = c.NumeroComprobante,
                Fecha = c.Fecha,
                Igv = c.Igv,
                Total = c.Total,
                Estado = c.Estado
            });
        }

        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        [HttpGet("[action]/{idCompra}")]
        public async Task<IEnumerable<DetalleViewModel>> ListarDetalles([FromRoute] int idCompra)
        {
            var detalle = await _context.DetalleCompras
                .Include(p => p.Producto)
                .Where(d => d.IdCompra==idCompra)
                .ToListAsync();

            return detalle.Select(d => new DetalleViewModel
            {
                IdProducto = d.IdProducto,
                Producto = d.Producto.Nombre,
                Cantidad = d.Cantidad,
                Precio = d.Precio
            });
        }

        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        [HttpPost("[action]")]
        public async Task<IActionResult> Crear([FromBody] CrearViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var fecha = DateTime.Now;
            Compra compra = new Compra
            {
                IdProveedor = model.IdProveedor,
                IdUsuario = model.IdUsuario,
                SerieComprobante = model.SerieComprobante,
                NumeroComprobante = model.NumeroComprobante,
                Fecha = fecha,
                Igv = model.Igv,
                Total = model.Total,
                Estado = "Aceptado"
            };

            try
            {
                _context.Compras.Add(compra);
                await _context.SaveChangesAsync();
                var idCompra = compra.IdCompra;
                foreach (var det in model.Detalles)
                {
                    DetalleCompra detalle = new DetalleCompra
                    {
                        IdCompra = idCompra,
                        IdProducto = det.IdProducto,
                        Cantidad = det.Cantidad,
                        Precio = det.Precio
                    };
                    _context.DetalleCompras.Add(detalle);
                }
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
            return Ok();
        }

        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> Anular([FromRoute] int id)
        {
            if(id<=0)
            {
                return BadRequest();
            }

            var compra = await _context.Compras.FirstOrDefaultAsync(c => c.IdCompra == id);
            if(compra == null)
            {
                return NotFound();
            }

            compra.Estado = "Anulado";

            try
            {
                await _context.SaveChangesAsync();

                var detalle = await _context.DetalleCompras.Include(p => p.Producto)
                    .Where(d => d.IdCompra == id)
                    .ToListAsync();
                foreach(var det in detalle)
                {
                    var producto = await _context.Productos.FirstOrDefaultAsync(p => p.IdProducto == det.Producto.IdProducto);
                    producto.Stock = det.Producto.Stock = det.Cantidad;
                    await _context.SaveChangesAsync();
                }
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }

            return Ok();
        }




        private bool CompraExists(int id)
        {
            return _context.Compras.Any(e => e.IdCompra == id);
        }
    }
}