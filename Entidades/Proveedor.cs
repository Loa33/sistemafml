using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entidades
{
    public class Proveedor
    {
        public int IdProveedor { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Ruc { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set;}
        public bool Estado { get; set; }
        public ICollection<Compra> Compras { get; set; }

    }
}
