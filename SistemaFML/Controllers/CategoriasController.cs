﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Datos;
using Entidades;
using Web.Models;
using Web.Models.Categoria;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace SistemaFML.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("Todos")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly DbContextSistemaFML _context;

        public CategoriasController(DbContextSistemaFML context)
        {
            _context = context;
        }

        // GET: api/Categorias/ListarCategorias
        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        [HttpGet("[action]")]
        public async Task <IEnumerable<CategoriaViewModel>> ListarCategorias()
        {
            var Categoria = await _context.Categorias.ToListAsync();
            return Categoria.Select(c => new CategoriaViewModel
            {
                IdCategoria = c.IdCategoria,
                Nombre = c.Nombre,
                Descripcion = c.Descripcion,
                Estado = c.Estado
            });
        }

        // GET: api/Categorias/Mostrart/1
        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> Mostrar([FromRoute] int id)
        {
            var Categoria = await _context.Categorias.FindAsync(id);

            if(Categoria == null)
            {
                return NotFound();
            }
            return Ok(new CategoriaViewModel
            {
                IdCategoria = Categoria.IdCategoria,
                Nombre = Categoria.Nombre,
                Descripcion = Categoria.Descripcion,
                Estado = Categoria.Estado
            });
        }

        // PUT: api/Categorias/ActualizarCategoria
        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        [HttpPut("[action]")]
        public async Task<IActionResult> ActualizarCategoria([FromBody] CategoriaViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (model.IdCategoria <=0 )
            {
                return BadRequest();
            }

            var categoria = await _context.Categorias.FirstOrDefaultAsync( c => c.IdCategoria == model.IdCategoria);

            if(categoria == null)
            {
                return NotFound();
            }

            categoria.Nombre = model.Nombre;
            categoria.Descripcion = model.Descripcion;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }

            return Ok();
        }

        // POST: api/Categorias/CrearCategoria
        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        [EnableCors("Todos")]
        [HttpPost("[action]")]
        public async Task<IActionResult> CrearCategoria([FromBody] CategoriaViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Categoria categoria = new Categoria
            {
                Nombre = model.Nombre,
                Descripcion = model.Descripcion,
                Estado = true
            };

            _context.Categorias.Add(categoria);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                return BadRequest();
            }

            return Ok();
        }

        // DELETE: api/Categorias/Eliminar/1
        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        [HttpDelete("[action]/{id}")]
        public async Task<IActionResult> EliminarCategoria([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var categoria = await _context.Categorias.FindAsync(id);
            if (categoria == null)
            {
                return NotFound();
            }

            _context.Categorias.Remove(categoria);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                return BadRequest();
            }
            
            return Ok(categoria);
        }

        private bool CategoriaExists(int id)
        {
            return _context.Categorias.Any(e => e.IdCategoria == id);
        }

        // PUT: api/Categorias/DesactivarCategoria/1
        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> DesactivarCategoria([FromRoute] int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            var Categoria = await _context.Categorias.FirstOrDefaultAsync(c => c.IdCategoria == id);

            if (Categoria == null)
            {
                return NotFound();
            }
            Categoria.Estado = false;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }

            return Ok();
        }

        // GET: api/Categorias/Listar
        [HttpGet("[action]")]
        public async Task<IEnumerable<SelectViewModel>> Select()
        {
            var categoria = await _context.Categorias.Where(c => c.Estado == true).ToListAsync();

            return categoria.Select(c => new SelectViewModel
            {
                IdCategoria = c.IdCategoria,
                Nombre = c.Nombre
            });

        }

        [Authorize(Roles = "Jefe de Almacén, Administrador")]
        // PUT: api/Categorias/ActivarCategoria/1
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> ActivarCategoria([FromRoute] int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            var Categoria = await _context.Categorias.FirstOrDefaultAsync(c => c.IdCategoria == id);

            if (Categoria == null)
            {
                return NotFound();
            }
            Categoria.Estado = true;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}