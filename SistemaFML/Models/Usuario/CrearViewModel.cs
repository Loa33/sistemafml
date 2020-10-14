using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Usuario
{
    public class CrearViewModel
    {
        [Required]
        public int IdRol { get; set; }
        [Required]
        public string Nombre { get; set; }
        public string Dni { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
