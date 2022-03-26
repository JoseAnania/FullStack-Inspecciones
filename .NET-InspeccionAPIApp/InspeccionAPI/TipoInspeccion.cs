// Clase creada para las definiciones de Tipo de Inspección

using System.ComponentModel.DataAnnotations;

namespace InspeccionAPI
{
    public class TipoInspeccion
    {
        // definimos las propiedades (una con un tamaño de caracteres)
        public int Id { get; set; }

        [StringLength(20)]
        public string NombreInspeccion { get; set; } = string.Empty;
    }
}
