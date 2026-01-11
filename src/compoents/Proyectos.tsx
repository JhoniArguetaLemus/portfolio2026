

interface Project {
  title: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  description?: string;
}

interface Technology {
  name: string;
  image: string;
}

// --- Datos Actualizados (Tus 5 proyectos) ---
const projects: Project[] = [
  {
    title: "Tienda de Café (Web)",
    description: "Landing page moderna para una tienda de café especializada.",
    image: "imagenes/coffee_web.png",
    demoUrl: "https://jhoniarguetalemus.github.io/coffe_web/",
    githubUrl: "https://github.com/JhoniArguetaLemus/coffe_web.git"
  },
  {
    title: "Todo List (Laravel)",
    description: "Aplicación de gestión de tareas construida con Laravel.",
    image: "imagenes/laravel.jpg",
    githubUrl: "https://github.com/JhoniArguetaLemus/todo-list"
  },
  {
    title: "Performance Pressure Wash",
    description: "Sitio web comercial para empresa de servicios en Florida.",
    image: "imagenes/performance_pressure.png",
    demoUrl: "https://www.performancepressurewash.com"
  },
  {
    title: "Aplicación para un restaurante",
    description: "Aplicación para hacer pedidos de un restaurante",
    image: "imagenes/restaurante2.png",
    githubUrl: "https://github.com/JhoniArguetaLemus/restaurante_android"
  },
  {
    title: "Aplicación que consume datos de una API pública",
    description: "Aplicación que muestra información de una API pública",
    image: "imagenes/users1.png",
    githubUrl: "https://github.com/JhoniArguetaLemus/retrofit_example.git"
  },
  {
    title:"Página web para la empresa Distribuidora de Gas Vigil.",
    image:"imagenes/distribuidora_vigil.png",
    demoUrl:"https://jhoniarguetalemus.github.io/distribuidora_saravia/",
    githubUrl:"https://github.com/JhoniArguetaLemus/distribuidora_saravia.git"
  }
];

const technologies: Technology[] = [
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind", image: "https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" },
  { name: "Kotlin", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Jetpack", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5w8k4gFUT0PmmM1kBOqDQeKlN1LpjiVAwEg&s" },
  { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Laravel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhfAMgG_6ps9Hs_2NjmJ5pgskwlhFAQyv7g&s" },
  { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

export default function Proyectos() {
  // 1. Estado para saber qué imagen abrir
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* --- Fondo --- */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Sección Proyectos --- */}
        <section className="mb-24">
          <div className="text-center mb-16">
             <div className="inline-block px-3 py-1 mb-4 bg-blue-900/30 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">
                  Portafolio
                </span>
              </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Destacados</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Una selección de mis trabajos recientes en desarrollo web y móvil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col overflow-hidden"
              >
                {/* 2. Imagen con Click Event */}
                <div 
                  className="h-48 overflow-hidden relative cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  {/* Icono Lupa al Hover */}
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                     <i className="fa-solid fa-magnifying-glass-plus text-white text-3xl drop-shadow-lg"></i>
                  </div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Contenido Texto */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  {project.description && (
                    <p className="text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
                  )}

                  {/* Botones */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-slate-800">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                      >
                        Demo <i className="fa-solid fa-eye"></i>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors border border-slate-700 flex items-center justify-center gap-2"
                      >
                        GitHub <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* --- Sección Tecnologías --- */}
        <section id="tecnologias">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Tecnológico</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 p-6 rounded-xl flex flex-col items-center justify-center gap-4 group transition-all duration-300 hover:bg-slate-800/50"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-slate-900 rounded-full shadow-inner group-hover:scale-110 transition-transform">
                  <img 
                    src={tech.image} 
                    alt={tech.name} 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 3. MODAL (Imagen en Grande) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50"
            onClick={() => setSelectedImage(null)}
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>

          {/* Imagen */}
          <img 
            src={selectedImage} 
            alt="Vista previa" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-blue-500/20 scale-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al tocar la imagen
          />
        </div>
      )}

    </div>
  );
}