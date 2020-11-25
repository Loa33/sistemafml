using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entidades
{
    public class Venta
    {
        public int IdVenta { get; set; }
        [Required]
        public int IdUsuario { get; set; }
        [Required]
        public string Documento { get; set; }
        public string Nombre { get; set; }
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

        public ICollection<DetalleVenta> DetalleVentas { get; set; }
        public Usuario Usuario { get; set; }
    }
}
