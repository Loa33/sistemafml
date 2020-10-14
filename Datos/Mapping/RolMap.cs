using Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infraestructura.Mapping
{
    public class RolMap : IEntityTypeConfiguration<Rol>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Rol> builder)
        {
            builder.ToTable("Rol")
               .HasKey(r => r.IdRol);
        }
    }
}
