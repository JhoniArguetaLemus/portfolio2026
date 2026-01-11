
export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Contenedor Principal Limitado */}
      <div className="max-w-4xl mx-auto">
        
        {/* --- Header con Animación de Entrada --- */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
            Sobre Mí
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Ingeniero de Software <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              en formación.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Estudiante de 4º año apasionado por crear soluciones escalables. 
            Me especializo en el desarrollo Full Stack y tengo un interés creciente 
            en la arquitectura de sistemas y la experiencia de usuario.
          </p>
        </div>

        {/* --- Grid de "Lo que hago" (Cards con Hover) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 text-blue-400 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Desarrollo Web</h3>
            <p className="text-slate-400 text-sm">
              Creación de interfaces modernas y responsivas utilizando React, Tailwind y arquitecturas basadas en componentes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500 text-purple-400 group-hover:text-white transition-colors">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Backend & APIs</h3>
            <p className="text-slate-400 text-sm">
              Diseño de APIs RESTful, manejo de bases de datos SQL/NoSQL y lógica de servidor robusta.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500 text-emerald-400 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Calidad de Software</h3>
            <p className="text-slate-400 text-sm">
              Enfoque en código limpio, testing, principios SOLID y buenas prácticas de ingeniería.
            </p>
          </div>

        </div>

       

      </div>
    </div>
  );
}