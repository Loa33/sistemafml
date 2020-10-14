using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entidades
{
    public class DetalleCompra
    {
        public int IdDetalleCompra { get; set; }
        [Required]
        public int IdCompra { get; set; }
        [Required]
        public int IdProducto { get; set; }
        [Required]
        public int Cantidad { get; set; }
        [Required]
        public decimal Precio { get; set; }
        public Compra Compra { get; set; }
        public Producto Producto { get; set; }

    }
}
