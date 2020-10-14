using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Venta
{
    public class VentaViewModel
    {
        public int IdVenta { get; set; }
        public int IdUsuario { get; set; }
        public string TipoComprobante { get; set; }
        public string SerieComprobante { get; set; }
        public string NumeroComprobante { get; set; }
        public DateTime Fecha { get; set; }
        public decimal Igv { get; set; }
        public decimal Total { get; set; }
        public string Estado { get; set; }
    }
}
