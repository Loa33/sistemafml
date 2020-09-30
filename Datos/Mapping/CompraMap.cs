using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Entidades;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AccesoDatos.Mapping
{
    public class CompraMap : IEntityTypeConfiguration<Compra>
    {
        public void Configure(EntityTypeBuilder<Compra> builder)
        {
            builder.ToTable("compra")
                .HasKey(c => c.IdCompra);
        }
    }
}
