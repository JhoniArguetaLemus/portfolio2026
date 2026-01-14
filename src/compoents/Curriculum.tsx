
export default function Curriculum() {
  const cvPath = "/archivos/Curriculum.pdf";
  // IMPORTANTE: Toma una captura de pantalla de la 1ra página de tu PDF 
  // y guárdala como 'cv-preview.png' en tu carpeta public/archivos
  const cvImagePreview = "/imagenes/cv.png"; 

  return (
    <section 
      id="curriculum" 
      className="relative min-h-screen flex items-center justify-center py-20 bg-slate-900 overflow-hidden px-4"
    >
      {/* --- ELEMENTOS DE FONDO --- */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* --- TARJETA GLASSMORPHISM --- */}
      <div className="relative z-10 max-w-6xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12 items-center">
          
          {/* COLUMNA 1: TEXTO Y BOTONES */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Mi <span className="text-blue-400">Currículum</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              He consolidado mi experiencia y habilidades en un documento detallado. 
              Aquí encontrarás mi stack tecnológico, proyectos destacados y mi formación académica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {/* Botón Ver Online */}
              <a 
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1"
              >
                <EyeIcon />
                <span>Ver Online</span>
              </a>

              {/* Botón Descargar */}
              <a 
                href={cvPath}
                download="CV-Jhonis-Argueta.pdf"
                className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-md hover:-translate-y-1"
              >
                <DownloadIcon />
                <span>Descargar PDF</span>
              </a>
            </div>
          </div>

          {/* COLUMNA 2: PREVISUALIZACIÓN VISUAL DEL CV */}
          <div className="relative order-1 lg:order-2 flex justify-center perspective-1000">
            {/* Contenedor de la imagen con efecto Tilt (inclinación) */}
            <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-105">
              
              {/* Efecto de 'resplandor' detrás del papel */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              {/* La imagen del CV (Simulación de papel) */}
              <div className="relative bg-white p-2 rounded-lg shadow-2xl transform rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 ease-out">
                 {/* Si no tienes la imagen aún, este div gris simula el documento */}
                 <div className="w-[300px] h-[420px] md:w-[350px] md:h-[480px] bg-slate-200 rounded overflow-hidden relative">
                    {/* Reemplaza este img con tu archivo real */}
                    <img 
                      src={cvImagePreview} 
                      alt="Vista previa del CV" 
                      className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                      // Este onError es temporal por si no tienes la imagen todavía
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'text-gray-400');
                        if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = "Vista previa (Captura de pantalla)";
                      }}
                    />
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Iconos SVG ---
function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
  );
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
  );
}