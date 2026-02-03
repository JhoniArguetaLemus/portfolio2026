export default function Curriculum() {
  const cvPath = "/archivos/Curriculum.pdf";
  const cvImagePreview = "/imagenes/cv.png"; 

  return (
    <section 
      id="curriculum" 
      className="relative min-h-screen flex items-center justify-center py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden px-4 transition-colors duration-300"
    >
      {/* --- ELEMENTOS DE FONDO (Grid + Manchas Suaves) --- */}
      <div className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.1] transition-opacity duration-300" 
           style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Manchas: Ajustamos blend mode para dark */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-normal transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-normal transition-colors duration-300" />

      {/* --- TARJETA PRINCIPAL --- */}
      <div className="relative z-10 max-w-6xl w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 overflow-hidden transition-colors duration-300">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12 items-center">
          
          {/* COLUMNA 1: TEXTO Y BOTONES */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
             {/* Badge */}
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm transition-colors duration-300">
                <span className="text-slate-600 dark:text-slate-300 text-xs font-bold tracking-wide uppercase">
                  Trayectoria
                </span>
              </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
              Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Currículum</span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium transition-colors duration-300">
              He consolidado mi experiencia y habilidades en un documento detallado. 
              Aquí encontrarás mi stack tecnológico, proyectos destacados y mi formación académica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              {/* Botón Ver Online */}
              <a 
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-1"
              >
                <EyeIcon />
                <span>Ver Online</span>
              </a>

              {/* Botón Descargar (Estilo Outline Adaptable) */}
              <a 
                href={cvPath}
                download="CV-Jhonis-Argueta.pdf"
                className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <DownloadIcon />
                <span>Descargar PDF</span>
              </a>
            </div>
          </div>

          {/* COLUMNA 2: PREVISUALIZACIÓN VISUAL DEL CV */}
          <div className="relative order-1 lg:order-2 flex justify-center perspective-1000">
            {/* Contenedor de la imagen con efecto Tilt */}
            <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-105">
              
              {/* Sombra de color decorativa detrás del papel */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              {/* La imagen del CV (Simulación de papel) */}
              <div className="relative bg-white dark:bg-slate-800 p-2 rounded-lg shadow-2xl shadow-slate-900/10 dark:shadow-black/30 transform rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 ease-out border border-slate-100 dark:border-slate-700">
                 {/* Contenedor interno */}
                 <div className="w-[300px] h-[420px] md:w-[350px] md:h-[480px] bg-slate-100 dark:bg-slate-700 rounded overflow-hidden relative transition-colors duration-300">
                    <img 
                      src={cvImagePreview} 
                      alt="Vista previa del CV" 
                      className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'text-slate-400', 'dark:text-slate-500', 'bg-slate-50', 'dark:bg-slate-900', 'border-2', 'border-dashed', 'border-slate-300', 'dark:border-slate-600', 'flex-col', 'gap-2', 'p-4', 'text-center');
                        if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerHTML = "<span class='text-4xl'>📄</span><span class='text-sm font-medium'>Vista previa no disponible</span>";
                      }}
                    />
                    
                    {/* Overlay brillo al pasar el mouse */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 dark:group-hover:bg-white/5 transition-colors pointer-events-none"></div>
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