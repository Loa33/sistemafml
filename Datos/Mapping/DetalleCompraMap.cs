using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Entidades;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace Infraestructura.Mapping
{
    public class DetalleCompraMap : IEntityTypeConfiguration<DetalleCompra>
    {
        public void Configure(EntityTypeBuilder<DetalleCompra> builder)
        {
            builder.ToTable("Detallecompra")
                .HasKey(d => d.IdDetalleCompra);
        }
    }
}
