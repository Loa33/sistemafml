using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Entidades;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AccesoDatos.Mapping
{
    public class ProductoMap : IEntityTypeConfiguration<Producto>
    {
        public void Configure(EntityTypeBuilder<Producto> builder)
        {
            builder.ToTable("producto")
                .HasKey(p => p.IdProducto);
        }
    }
}
