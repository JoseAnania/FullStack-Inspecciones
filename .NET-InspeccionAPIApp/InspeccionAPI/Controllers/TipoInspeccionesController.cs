// Controlador agregado y autogenerado para la tabla Tipo de Inspección

#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InspeccionAPI.Data;

namespace InspeccionAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoInspeccionesController : ControllerBase
    {
        private readonly DataContext _context;

        public TipoInspeccionesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/TipoInspecciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoInspeccion>>> GetTipoInspecciones()
        {
            return await _context.TipoInspecciones.ToListAsync();
        }

        // GET: api/TipoInspecciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoInspeccion>> GetTipoInspeccion(int id)
        {
            var tipoInspeccion = await _context.TipoInspecciones.FindAsync(id);

            if (tipoInspeccion == null)
            {
                return NotFound();
            }

            return tipoInspeccion;
        }

        // PUT: api/TipoInspecciones/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoInspeccion(int id, TipoInspeccion tipoInspeccion)
        {
            if (id != tipoInspeccion.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoInspeccion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoInspeccionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TipoInspecciones
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoInspeccion>> PostTipoInspeccion(TipoInspeccion tipoInspeccion)
        {
            _context.TipoInspecciones.Add(tipoInspeccion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoInspeccion", new { id = tipoInspeccion.Id }, tipoInspeccion);
        }

        // DELETE: api/TipoInspecciones/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoInspeccion(int id)
        {
            var tipoInspeccion = await _context.TipoInspecciones.FindAsync(id);
            if (tipoInspeccion == null)
            {
                return NotFound();
            }

            _context.TipoInspecciones.Remove(tipoInspeccion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoInspeccionExists(int id)
        {
            return _context.TipoInspecciones.Any(e => e.Id == id);
        }
    }
}
