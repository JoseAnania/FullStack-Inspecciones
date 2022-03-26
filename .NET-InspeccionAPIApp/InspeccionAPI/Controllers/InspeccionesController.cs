// Controlador agregado y autogenerado para la tabla Inspeccion

#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InspeccionAPI.Data;

namespace InspeccionAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InspeccionesController : ControllerBase
    {
        private readonly DataContext _context;

        public InspeccionesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Inspecciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Inspeccion>>> GetInspecciones()
        {
            return await _context.Inspecciones.ToListAsync();
        }

        // GET: api/Inspecciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Inspeccion>> GetInspeccion(int id)
        {
            var inspeccion = await _context.Inspecciones.FindAsync(id);

            if (inspeccion == null)
            {
                return NotFound();
            }

            return inspeccion;
        }

        // PUT: api/Inspecciones/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInspeccion(int id, Inspeccion inspeccion)
        {
            if (id != inspeccion.Id)
            {
                return BadRequest();
            }

            _context.Entry(inspeccion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InspeccionExists(id))
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

        // POST: api/Inspecciones
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Inspeccion>> PostInspeccion(Inspeccion inspeccion)
        {
            _context.Inspecciones.Add(inspeccion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInspeccion", new { id = inspeccion.Id }, inspeccion);
        }

        // DELETE: api/Inspecciones/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInspeccion(int id)
        {
            var inspeccion = await _context.Inspecciones.FindAsync(id);
            if (inspeccion == null)
            {
                return NotFound();
            }

            _context.Inspecciones.Remove(inspeccion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InspeccionExists(int id)
        {
            return _context.Inspecciones.Any(e => e.Id == id);
        }
    }
}
