// Clase creada para las definiciones de Inspección

using System.ComponentModel.DataAnnotations;

namespace InspeccionAPI
{
    public class Inspeccion
    {
        // definimos las propiedades (algunas con un tamaño de caracteres)
        public int Id { get; set; }
        
        [StringLength(20)]
        public string Estado { get; set; } = string.Empty;

        [StringLength(200)]
        public string Comentarios { get; set; } = string.Empty;

        // definimos la FK clave externa 
        public int TipoInspeccionId { get; set; }

        // definimos una propiedad de navegación (entre Inspección y Tipo de Inspección)
        public TipoInspeccion? TipoInspeccion { get; set; }
    }
}
