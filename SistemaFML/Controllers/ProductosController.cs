using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Datos;
using Entidades;
using Web.Models.Producto;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly DbContextSistemaFML _context;

        public ProductosController(DbContextSistemaFML context)
        {
            _context = context;
        }

        // GET: api/Productos/Listar
        [HttpGet("[action]")]
        public async Task<IEnumerable<ProductoViewModel>> Listar()
        {
            var producto = await _context.Productos.Include(a => a.Categoria).ToListAsync();

            return producto.Select(a => new ProductoViewModel
            {
                IdProducto = a.IdProducto,
                IdCategoria = a.IdCategoria,
                Categoria = a.Categoria.Nombre,
                Codigo = a.Codigo,
                Nombre = a.Nombre,
                Stock = a.Stock,
                PrecioVenta = a.PrecioVenta,
                Descripcion = a.Descripcion,
                Estado = a.Estado
            });

        }

        // GET: api/Productos/Mostrar/1
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> Mostrar([FromRoute] int id)
        {

            var producto = await _context.Productos.Include(a => a.Categoria).
                SingleOrDefaultAsync(a => a.IdProducto == id);

            if (producto == null)
            {
                return NotFound();
            }

            return Ok(new ProductoViewModel
            {
                IdProducto = producto.IdProducto,
                IdCategoria = producto.IdCategoria,
                Categoria = producto.Categoria.Nombre,
                Codigo = producto.Codigo,
                Nombre = producto.Nombre,
                Descripcion = producto.Descripcion,
                Stock = producto.Stock,
                PrecioVenta = producto.PrecioVenta,
                Estado = producto.Estado
            });
        }

        // PUT: api/Productos/Actualizar
        [HttpPut("[action]")]
        public async Task<IActionResult> ActualizarProducto([FromBody] EditarViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (model.IdProducto <= 0)
            {
                return BadRequest();
            }

            var producto = await _context.Productos.FirstOrDefaultAsync(a => a.IdProducto == model.IdProducto);

            if (producto == null)
            {
                return NotFound();
            }

            producto.IdCategoria = model.IdCategoria;
            producto.Codigo = model.Codigo;
            producto.Nombre = model.Nombre;
            producto.PrecioVenta = model.PrecioVenta;
            producto.Stock = model.Stock;
            producto.Descripcion = model.Descripcion;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Guardar Excepción
                return BadRequest();
            }

            return Ok();
        }

        // POST: api/Productos/Crear
        [HttpPost("[action]")]
        public async Task<IActionResult> Crear([FromBody] CrearViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Producto producto = new Producto
            {
                IdCategoria = model.IdCategoria,
                Codigo = model.Codigo,
                Nombre = model.Nombre,
                PrecioVenta = model.PrecioVenta,
                Stock = model.Stock,
                Descripcion = model.Descripcion,
                Estado = true
            };

            _context.Productos.Add(producto);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }

            return Ok();
        }

        // PUT: api/Productos/Desactivar/1
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> Desactivar([FromRoute] int id)
        {

            if (id <= 0)
            {
                return BadRequest();
            }

            var producto = await _context.Productos.FirstOrDefaultAsync(a => a.IdProducto == id);

            if (producto == null)
            {
                return NotFound();
            }

            producto.Estado = false;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Guardar Excepción
                return BadRequest();
            }

            return Ok();
        }

        // PUT: api/Productos/Activar/1
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> Activar([FromRoute] int id)
        {

            if (id <= 0)
            {
                return BadRequest();
            }

            var producto = await _context.Productos.FirstOrDefaultAsync(a => a.IdProducto == id);

            if (producto == null)
            {
                return NotFound();
            }

            producto.Estado = true;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Guardar Excepción
                return BadRequest();
            }

            return Ok();
        }


        private bool ProductoExists(int id)
        {
            return _context.Productos.Any(e => e.IdProducto == id);
        }
    }
}