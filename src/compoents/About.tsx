export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      
      {/* --- Fondo Tecnológico (Grid + Manchas) --- */}
      {/* Ajustamos la opacidad: 0.4 en claro, 0.1 en oscuro para que no moleste */}
      <div className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.1] transition-opacity duration-300" 
           style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Manchas de color: 'mix-blend-multiply' se ve bien en claro, pero en oscuro usamos 'normal' o 'screen' */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal transition-colors duration-300"></div>

      {/* Contenedor Principal */}
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 animate-fade-in-down">
          {/* Badge pequeño */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm mb-6 transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-slate-600 dark:text-slate-300 text-xs font-bold tracking-wide uppercase">
              Sobre Mí
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors duration-300">
            Ingeniero de Software <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
              en formación.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium transition-colors duration-300">
            Estudiante de 4º año apasionado por crear soluciones escalables. 
            Me especializo en el desarrollo Full Stack y tengo un interés creciente 
            en la arquitectura de sistemas y la experiencia de usuario.
          </p>
        </div>

        {/* --- Grid de "Lo que hago" --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Desarrollo Web */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/20 group">
            <div className="w-12 h-12 bg-blue-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
              {/* Icono: Azul oscuro en light, Azul claro en dark */}
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Desarrollo Web</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">
              Creación de interfaces modernas y responsivas utilizando React, Tailwind y arquitecturas basadas en componentes.
            </p>
          </div>

          {/* Card 2: Backend */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/5 dark:hover:shadow-purple-900/20 group">
            <div className="w-12 h-12 bg-purple-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
               <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Backend & APIs</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">
              Diseño de APIs RESTful, manejo de bases de datos SQL/NoSQL y lógica de servidor robusta.
            </p>
          </div>

          {/* Card 3: Calidad */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/5 dark:hover:shadow-emerald-900/20 group">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
              <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Calidad de Software</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">
              Enfoque en código limpio, testing, principios SOLID y buenas prácticas de ingeniería.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}