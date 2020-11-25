using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Venta
{
    public class CrearViewModel
    {
        public string Documento { get; set; }
        public string Nombre { get; set; }
        public int IdUsuario { get; set; }
        public string TipoComprobante { get; set; }
        public string SerieComprobante { get; set; }
        public string NumeroComprobante { get; set; }
        public DateTime Fecha { get; set; }
        public decimal Igv { get; set; }
        public decimal Total { get; set; }
        public List<DetalleViewModel> Detalles { get; set; }
    }
}
