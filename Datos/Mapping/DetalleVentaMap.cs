using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Entidades;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace Infraestructura.Mapping
{
    public class DetalleVentaMap : IEntityTypeConfiguration<DetalleVenta>
    {
        public void Configure(EntityTypeBuilder<DetalleVenta> builder)
        {
            builder.ToTable("DetalleVenta")
                .HasKey(d => d.IdDetalleVenta);
        }
    }
}
