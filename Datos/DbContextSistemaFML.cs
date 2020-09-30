using AccesoDatos.Mapping;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Entidades;
using Infraestructura.Mapping;

namespace Datos
{
    public class DbContextSistemaFML : DbContext
    {
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Compra> Compras { get; set; }
        public DbSet<DetalleCompra> DetalleCompras { get; set; }
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Proveedor> Proveedores { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Venta> Ventas { get; set; }
        public DbSet<DetalleVenta> DetalleVentas { get; set; }

        public DbContextSistemaFML(DbContextOptions<DbContextSistemaFML> options) :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new CategoriaMap());
            modelBuilder.ApplyConfiguration(new ClienteMap());
            modelBuilder.ApplyConfiguration(new CompraMap());
            modelBuilder.ApplyConfiguration(new DetalleCompraMap());
            modelBuilder.ApplyConfiguration(new ProductoMap());
            modelBuilder.ApplyConfiguration(new ProveedorMap());
            modelBuilder.ApplyConfiguration(new UsuarioMap());
            modelBuilder.ApplyConfiguration(new VentaMap());
            modelBuilder.ApplyConfiguration(new DetalleVentaMap());
        }
    }
}
