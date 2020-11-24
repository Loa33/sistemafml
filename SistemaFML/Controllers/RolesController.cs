using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Datos;
using Entidades;
using Web.Models.Rol;
using Microsoft.AspNetCore.Authorization;

namespace Web.Controllers
{
    [Authorize(Roles = "Administrador")]
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly DbContextSistemaFML _context;

        public RolesController(DbContextSistemaFML context)
        {
            _context = context;
        }

        // GET: api/Categorias/ListarCategorias
        [HttpGet("[action]")]
        public async Task<IEnumerable<RolViewModel>> Listar()
        {
            var rol = await _context.Roles.ToListAsync();
            return rol.Select(r => new RolViewModel
            {
                IdRol = r.IdRol,
                Nombre = r.Nombre,
                Estado = r.Estado
            });
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<SelectViewModel>> Select()
        {
            var rol = await _context.Roles.Where(r => r.Estado == true).ToListAsync();

            return rol.Select(r => new SelectViewModel
            {
                IdRol = r.IdRol,
                Nombre = r.Nombre
            });

        }

        private bool RolExists(int id)
        {
            return _context.Roles.Any(e => e.IdRol == id);
        }
    }
      
}