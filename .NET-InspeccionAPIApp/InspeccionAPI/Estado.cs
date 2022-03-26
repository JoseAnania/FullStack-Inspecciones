// Clase creada para las definiciones de Estado

using System.ComponentModel.DataAnnotations;

namespace InspeccionAPI
{
    public class Estado
    {
        // definimos las propiedades (una con un tamaño de caracteres)
        public int Id { get; set; }

        [StringLength(20)]
        public string OpcionEstado { get; set; } = string.Empty;
    }
}
