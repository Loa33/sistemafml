using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Producto
{
    public class EditarViewModel
    {
        [Required]
        public int IdProducto { get; set; }
        [Required]
        public int IdCategoria { get; set; }
        public string Codigo { get; set; }
        [StringLength(50, MinimumLength = 3,
            ErrorMessage = "El codigo no debe de tener más de 50 caracteres, ni menos de 3 caracteres.")]
        public string Nombre { get; set; }
        [Required]
        public decimal PrecioVenta { get; set; }
        [Required]
        public int stock { get; set; }
        public string Descripcion { get; set; }
    }
}
