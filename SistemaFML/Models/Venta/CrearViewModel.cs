using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Venta
{
    public class CrearViewModel
    {
        [Required]
        public int IdUsuario { get; set; }
        [Required]
        public string TipoComprobante { get; set; }
        public string SerieComprobante { get; set; }
        [Required]
        public string NumeroComprobante { get; set; }
        [Required]
        public DateTime Fecha { get; set; }
        [Required]
        public decimal Igv { get; set; }
        [Required]
        public decimal Total { get; set; }
        [Required]
        public string Estado { get; set; }
        [Required]
        public List<DetalleViewModel> Detalles { get; set; }
    }
}
