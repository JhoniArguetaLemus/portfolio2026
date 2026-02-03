import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative transition-colors duration-300">
      
      {/* --- Fondo Tecnológico (Grid Pattern) --- */}
      {/* Opacidad ajustada: 0.4 en claro, 0.1 en oscuro para que sea sutil */}
      <div className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.1] transition-opacity duration-300" 
           style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* --- Manchas de color suaves --- */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal transition-colors duration-300"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal transition-colors duration-300"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- Lado Izquierdo: Texto y CTAs --- */}
        <div className="text-center lg:text-left space-y-6">
          
          {/* Badge estilo 'Pill' */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-full shadow-sm mb-4 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-slate-600 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase">
              Disponible para proyectos
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight transition-colors duration-300">
            Construyendo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
              el futuro digital.
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 font-medium transition-colors duration-300">
            Hola, soy Jhonis Argueta Lemus. Estudiante de Ingeniería de Sistemas transformando ideas complejas en código limpio, eficiente y escalable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            {/* Botón Principal: Negro en Light, Azul en Dark */}
            <Link 
              to="/proyectos" 
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-slate-900/20 dark:shadow-blue-600/20 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Ver Proyectos <span aria-hidden="true">→</span>
            </Link>
            
            {/* Botón Secundario: Blanco en Light, Gris en Dark */}
            <Link 
              to="/contact" 
              className="px-8 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Contáctame
            </Link>
          </div>
        </div>

        {/* --- Lado Derecho: Terminal Flotante --- */}
        <div className="relative group perspective-1000">
          {/* Terminal Container:
              Light: Borde gris claro
              Dark: Borde gris oscuro (para fusionarse)
          */}
          <div className="relative bg-[#1e293b] rounded-2xl border border-slate-200/50 dark:border-slate-700 shadow-2xl shadow-blue-900/20 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
            
            {/* Barra de título */}
            <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
              </div>
              <div className="text-xs text-slate-400 font-mono opacity-60">bash — zsh</div>
            </div>

            {/* Contenido de código (Siempre oscuro para contraste) */}
            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto bg-[#1e293b]">
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-purple-400 font-bold mr-2">const</span>
                  <span className="text-blue-300 mr-2">engineer</span>
                  <span className="text-slate-300">=</span>
                  <span className="text-yellow-300 ml-2">{`{`}</span>
                </div>
                
                <div className="pl-6 group-code">
                  <span className="text-sky-300">name:</span>
                  <span className="text-emerald-400 ml-2">'Jhoni'</span>,
                </div>
                <div className="pl-6 group-code">
                  <span className="text-sky-300">role:</span>
                  <span className="text-emerald-400 ml-2">'Systems Engineer'</span>,
                </div>
                <div className="pl-6 group-code">
                  <span className="text-sky-300">status:</span>
                  <span className="text-emerald-400 ml-2 animate-pulse">'Open to Work'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-sky-300">skills:</span>
                  <span className="text-yellow-300 ml-2">[</span>
                  <div className="pl-4 text-slate-400 italic text-xs py-1 opacity-70">// Core Stack</div>
                  <span className="text-emerald-400 ml-1">'React'</span>,
                  <span className="text-emerald-400 ml-1">'Tailwind'</span>,
                  <span className="text-emerald-400 ml-1">'.NET'</span>,
                  <span className="text-emerald-400 ml-1">'Kotlin'</span>
                  <span className="text-yellow-300">]</span>
                </div>

                <div className="flex">
                  <span className="text-yellow-300">{'}'}</span><span className="text-slate-300">;</span>
                </div>

                <div className="pt-4 flex items-center gap-2 border-t border-slate-700/50 mt-4">
                  <span className="text-green-500 font-bold">➜</span>
                  <span className="text-cyan-400">~/portfolio</span>
                  <span className="text-slate-400">$</span>
                  <span className="text-slate-200 animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sombra decorativa detrás */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-10 dark:opacity-20 -z-10 transition-opacity duration-300"></div>
        </div>

      </div>
    </div>
  )
}