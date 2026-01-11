
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      
      {/* --- Efecto de Fondo (Glow azul difuminado) --- */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- Lado Izquierdo: Texto y CTAs --- */}
        <div className="text-center lg:text-left space-y-6">
          <div className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full">
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">
              Disponible para proyectos
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Construyendo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              el futuro digital.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0">
            Hola, soy Jhonis Argueta. Estudiante de Ingeniería de Sistemas transformando ideas complejas en código limpio, eficiente y escalable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link 
              to="/about" 
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1"
            >
              Ver Proyectos
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3.5 bg-transparent border border-slate-600 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 hover:border-slate-500 transition-all hover:-translate-y-1"
            >
              Contáctame
            </Link>
          </div>
        </div>

        {/* --- Lado Derecho: Terminal Simulada (Visual Tech) --- */}
        <div className="relative group perspective-1000">
          {/* Tarjeta con efecto de inclinación sutil y borde brillante */}
          <div className="relative bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
            
            {/* Barra de título de la terminal */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-slate-500 font-mono">portfolio.js — bash</div>
            </div>

            {/* Contenido de código */}
            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-pink-500 mr-2">const</span>
                  <span className="text-blue-400 mr-2">engineer</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-300 ml-2">{`{`}</span>
                </div>
                
                <div className="pl-6">
                  <span className="text-purple-400">name:</span>
                  <span className="text-green-400 ml-2">'Jhoni'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-purple-400">role:</span>
                  <span className="text-green-400 ml-2">'Systems Engineer Student'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-purple-400">status:</span>
                  <span className="text-green-400 ml-2">'Open to Work'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-purple-400">skills:</span>
                  <span className="text-yellow-300 ml-2">[</span>
                  <span className="text-green-400">'React'</span>,
                  <span className="text-green-400 ml-1">'Tailwind'</span>,
                  <span className="text-green-400 ml-1">'.NET'</span>
                  <span className="text-green-400 ml-1">'Kotlin'</span>
                  <span className="text-green-400 ml-1">'Java'</span>
      
                  <span className="text-green-400 ml-1">'UX/UI'</span>

                  <span className="text-yellow-300">]</span>
                </div>

                <div className="flex">
                  <span className="text-yellow-300">{'}'}</span><span className="text-white">;</span>
                </div>

                <div className="pt-4 flex items-center gap-2">
                  <span className="text-green-500">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-white animate-pulse">|</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Elemento decorativo detrás de la terminal */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-20 -z-10 transition duration-1000 group-hover:opacity-40"></div>
        </div>

      </div>
    </div>
  )
}