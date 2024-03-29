﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entidades
{
    public class Compra
    {
        public int IdCompra { get; set; }
        [Required]
        public int IdProveedor { get; set; }
        [Required]
        public int IdUsuario { get; set; }
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
        public ICollection<DetalleCompra> DetalleCompras { get; set; }
        public Usuario Usuario { get; set; }
        public Proveedor Proveedor { get; set; }
    }
}
