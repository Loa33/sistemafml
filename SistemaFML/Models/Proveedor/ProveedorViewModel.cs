using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Proveedor
{
    public class ProveedorViewModel
    {
        public int IdProveedor { get; set; }
        public string Nombre { get; set; }
        public string Ruc { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
    }
}
