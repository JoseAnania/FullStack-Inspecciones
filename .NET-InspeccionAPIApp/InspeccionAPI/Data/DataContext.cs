// Clase creada para el manejo de la conexión de Datos

using Microsoft.EntityFrameworkCore;

namespace InspeccionAPI.Data
{
    // heredamos de DbContext e instalamos los siguientes paquetes del NuGet: 
    // 1) Microsoft.EntityFrameworkCore
    // 2) Microsoft.EntityFrameworkCore.SqlServer
    // 3) Microsoft.EntityFrameworkCore.Tools
    // 4) Microsoft.EntityFrameworkCore.Design
    // 5) Microsoft.VisualStudio.Web.CodeGeneration.Design
    // 6) Microsoft.AspNet.WebApi.Cors
    public class DataContext : DbContext
    {
        // constructor
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        // propiedades (1 DbSet por cada modelo)
        public DbSet<Inspeccion> Inspecciones { get; set; }
        public DbSet<TipoInspeccion> TipoInspecciones { get; set; }
        public DbSet<Estado> Estados { get; set; }

    }
}
