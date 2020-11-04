using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entidades
{
    public class Producto
    {
        public int IdProducto { get; set; }
        [Required]
        public int IdCategoria { get; set; }
        public string Codigo { get; set; } 
        public string Nombre { get; set; }
        [Required]
        public decimal PrecioVenta { get; set; }
        [Required]
        public int Stock { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        public Categoria Categoria { get; set; }
        public ICollection<DetalleCompra> DetalleCompras { get; set; }
    }
}
