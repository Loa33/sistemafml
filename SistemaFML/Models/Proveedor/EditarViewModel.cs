using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Proveedor
{
    public class EditarViewModel
    {
        public int IdProveedor { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Ruc { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
    }
}
