using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Entidades;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AccesoDatos.Mapping
{
    public class VentaMap : IEntityTypeConfiguration<Venta>
    {
        public void Configure(EntityTypeBuilder<Venta> builder)
        {
            builder.ToTable("venta")
                .HasKey(v => v.IdVenta);
        }
    }
}
