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

        // GET: api/Compras/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompra([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var compra = await _context.Compras.FindAsync(id);

            if (compra == null)
            {
                return NotFound();
            }

            return Ok(compra);
        }

        // PUT: api/Compras/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompra([FromRoute] int id, [FromBody] Compra compra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != compra.IdCompra)
            {
                return BadRequest();
            }

            _context.Entry(compra).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompraExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Compras
        [HttpPost]
        public async Task<IActionResult> PostCompra([FromBody] Compra compra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Compras.Add(compra);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompra", new { id = compra.IdCompra }, compra);
        }

        // DELETE: api/Compras/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompra([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var compra = await _context.Compras.FindAsync(id);
            if (compra == null)
            {
                return NotFound();
            }

            _context.Compras.Remove(compra);
            await _context.SaveChangesAsync();

            return Ok(compra);
        }

        private bool CompraExists(int id)
        {
            return _context.Compras.Any(e => e.IdCompra == id);
        }
    }
}