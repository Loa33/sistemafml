using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entidades
{
    public class Categoria
    {
        public int IdCategoria { get; set; }
        [Required]
        public string Nombre { get; set; }
        [StringLength(256)]
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        public ICollection<Producto> Productos { get; set; }
    }
}
