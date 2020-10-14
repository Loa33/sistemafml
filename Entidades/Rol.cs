using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entidades
{
    public class Rol
    {
        public int IdRol { get; set; }
        [Required]
        public string Nombre { get; set; }
        public bool Estado { get; set; }

        public ICollection<Usuario> Usuarios { get; set; }
    }
}
