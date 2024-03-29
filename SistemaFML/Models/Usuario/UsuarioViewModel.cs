﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Usuario
{
    public class UsuarioViewModel
    {
        public int IdUsuario { get; set; }
        public int IdRol { get; set; }
        public string Rol { get; set; } 
        public string Nombre { get; set; }
        public string Dni { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public bool Estado { get; set; }
    }
}
