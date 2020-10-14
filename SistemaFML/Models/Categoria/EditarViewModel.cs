﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Categoria
{
    public class EditarViewModel
    {
        [Required]
        public int IdCategoria { get; set; }
        [Required]
        public string Nombre { get; set; }
        [StringLength(256)]
        public string Descripcion { get; set; }
    }
}
