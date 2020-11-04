using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Datos;
using Entidades;
using Web.Models.Proveedor;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProveedoresController : ControllerBase
    {
        private readonly DbContextSistemaFML _context;

        public ProveedoresController(DbContextSistemaFML context)
        {
            _context = context;
        }

        // GET: api/Proveedores
        [HttpGet("[action]")]
        public async Task<IEnumerable<ProveedorViewModel>> Listar()
        {
            var proveedor = await _context.Proveedores.ToListAsync();

            return proveedor.Select(p => new ProveedorViewModel
            {
                IdProveedor = p.IdProveedor,
                Nombre = p.Nombre,
                Ruc = p.Ruc,
                Direccion = p.Direccion,
                Telefono = p.Telefono,
                Email = p.Email,
                Estado = p.Estado
            });

        }

        

        // POST: api/Proveedors/Crear
        [HttpPost("[action]")]
        public async Task<IActionResult> Crear([FromBody] CrearViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var email = model.Email.ToLower();

            if (await _context.Proveedores.AnyAsync(p => p.Email == email))
            {
                return BadRequest("El email ya existe");
            }

            Proveedor proveedor = new Proveedor
            {
                Nombre = model.Nombre,
                Ruc = model.Ruc,
                Direccion = model.Direccion,
                Telefono = model.Telefono,
                Email = model.Email.ToLower(),
                Estado = true
            };

            _context.Proveedores.Add(proveedor);
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

        // PUT: api/Proveedors/Actualizar
        [HttpPut("[action]")]
        public async Task<IActionResult> Actualizar([FromBody] EditarViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (model.IdProveedor <= 0)
            {
                return BadRequest();
            }

            var proveedor = await _context.Proveedores.FirstOrDefaultAsync(p => p.IdProveedor == model.IdProveedor);

            if (proveedor == null)
            {
                return NotFound();
            }

            proveedor.Nombre = model.Nombre;
            proveedor.Ruc = model.Ruc;
            proveedor.Telefono = model.Telefono;
            proveedor.Direccion = model.Direccion;
            proveedor.Email = model.Email.ToLower();
            proveedor.Estado = true;


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

        // PUT: api/Proveedores/Desactivar/1
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> Desactivar([FromRoute] int id)
        {

            if (id <= 0)
            {
                return BadRequest();
            }

            var proveedor = await _context.Proveedores.FirstOrDefaultAsync(p => p.IdProveedor == id);

            if (proveedor == null)
            {
                return NotFound();
            }

            proveedor.Estado = false;

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

        // PUT: api/Proveedores/Activar/1
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> Activar([FromRoute] int id)
        {

            if (id <= 0)
            {
                return BadRequest();
            }

            var proveedor = await _context.Proveedores.FirstOrDefaultAsync(p => p.IdProveedor == id);

            if (proveedor == null)
            {
                return NotFound();
            }

            proveedor.Estado = true;

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


        private bool ProveedorExists(int id)
        {
            return _context.Proveedores.Any(e => e.IdProveedor == id);
        }
    }
}