import { useState } from "react";

// --- Interfaces ---
interface Project {
  title: string;
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  description?: string;
}

interface Technology {
  name: string;
  image: string;
}

// --- Datos (Tus proyectos actualizados) ---
const projects: Project[] = [
  {
    title: "Performance Pressure Wash",
    description: "Sitio web comercial para empresa de servicios en Florida.",
    images: ["imagenes/performance_pressure.png"],
    demoUrl: "https://www.performancepressurewash.com"
  },
  {
    title: "Aplicación para un restaurante",
    description: "Aplicación para hacer pedidos de un restaurante",
    images: ["imagenes/restaurante2.png"],
    githubUrl: "https://github.com/JhoniArguetaLemus/restaurante_android"
  },
  {
    title:"Distribuidora de Gas Vigil",
    images:["imagenes/distribuidora_vigil.png"],
    demoUrl:"https://jhoniarguetalemus.github.io/distribuidora_saravia/",
    githubUrl:"https://github.com/JhoniArguetaLemus/distribuidora_saravia.git"
  },
  {
    title:"App de gestión de inventario",
    images:["imagenes/tienda1.PNG", "imagenes/tienda2.PNG","imagenes/tienda3.PNG", "imagenes/tienda4.PNG" ],
    description:"App multiplaforma creada con React Native, para gestionar clientes y ventas de manera local"
  },
  {
    title:"App móvil Nuevo El Salvador Shop",
    images:["imagenes/nuevo_shop/imagen1.PNG", "imagenes/nuevo_shop/imagen2.PNG", "imagenes/nuevo_shop/imagen3.PNG", "imagenes/nuevo_shop/imagen4.PNG"],
    description:"Aplicación de comercio electrónico con React Native y conexión a API de WooCommerce."
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

// --- Sub-componente: Tarjeta con Carrusel (Adaptable Dark Mode) ---
const ProjectCard = ({ 
    project, 
    openModal 
}: { 
    project: Project, 
    openModal: (p: Project, idx: number) => void 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? project.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === project.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    // CAMBIO: Background blanco en light, slate-800 en dark. Borde adaptativo.
    <div className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/20 flex flex-col overflow-hidden h-full">
      
      {/* Contenedor de Imagen */}
      <div 
        className="h-48 overflow-hidden relative cursor-pointer bg-slate-100 dark:bg-slate-900"
        onClick={() => openModal(project, currentIndex)}
      >
        {/* Overlay al hover */}
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-all z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
           <i className="fa-solid fa-magnifying-glass-plus text-white text-3xl drop-shadow-lg"></i>
        </div>
        
        <img 
          src={project.images[currentIndex]} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {/* Flechas de navegación (mini slider) */}
        {project.images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
              <i className="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {project.images.map((_, slideIndex) => (
                    <div key={slideIndex} className={`w-1.5 h-1.5 rounded-full transition-all shadow-sm ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/60'}`} />
                ))}
            </div>
          </>
        )}
      </div>

      {/* Contenido Texto */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Título: Negro en Light, Blanco en Dark */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{project.title}</h3>
        {/* Descripción: Gris en Light, Gris claro en Dark */}
        {project.description && (
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed transition-colors">{project.description}</p>
        )}

        {/* Botones */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-200 dark:shadow-none"
            >
              Demo <i className="fa-solid fa-eye"></i>
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              // Botón secundario adaptativo:
              // Light: bg-slate-50 text-slate-700
              // Dark:  bg-slate-700/50 text-slate-300
              className="flex-1 text-center py-2 px-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-colors border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-2"
            >
              GitHub <i className="fa-brands fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


export default function Proyectos() {
  const [activeModal, setActiveModal] = useState<{ project: Project; index: number } | null>(null);

  const handleNextModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeModal) return;
    const isLast = activeModal.index === activeModal.project.images.length - 1;
    const newIndex = isLast ? 0 : activeModal.index + 1;
    setActiveModal({ ...activeModal, index: newIndex });
  };

  const handlePrevModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeModal) return;
    const isFirst = activeModal.index === 0;
    const newIndex = isFirst ? activeModal.project.images.length - 1 : activeModal.index - 1;
    setActiveModal({ ...activeModal, index: newIndex });
  };

  return (
    // CAMBIO PRINCIPAL: bg-slate-50 en Light, bg-slate-900 en Dark
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      
      {/* --- Fondo Tecnológico --- */}
      <div className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.1] transition-opacity duration-300" 
           style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Manchas: Ajustamos blend mode */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal transition-all duration-300"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal transition-all duration-300"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header Sección --- */}
        <section className="mb-24">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm mb-4 transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500"></span>
                <span className="text-slate-600 dark:text-slate-300 text-xs font-bold tracking-wide uppercase">
                  Portafolio
                </span>
              </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors">
              Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Destacados</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg transition-colors">
              Una selección de mis trabajos recientes en desarrollo web y móvil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                openModal={(p, idx) => setActiveModal({ project: p, index: idx })}
              />
            ))}
          </div>
        </section>

        {/* --- Sección Tecnologías --- */}
        <section id="tecnologias">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
              Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400">Tecnológico</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              // Cards Tecnologías: Adaptables
              <div key={index} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 p-6 rounded-xl flex flex-col items-center justify-center gap-4 group transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-none">
                <div className="w-16 h-16 flex items-center justify-center bg-slate-50 dark:bg-slate-900/50 rounded-full group-hover:scale-110 transition-transform">
                  <img src={tech.image} alt={tech.name} className="w-10 h-10 object-contain" />
                </div>
                <span className="text-slate-600 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* --- MODAL (Lightbox) --- */}
      {/* El modal se mantiene oscuro siempre (estándar UX para ver fotos) */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50"
            onClick={() => setActiveModal(null)}
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>

          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            
            {/* Flecha Izquierda Modal */}
            {activeModal.project.images.length > 1 && (
                <button 
                    onClick={handlePrevModalImage}
                    className="absolute left-0 md:left-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
                >
                    <i className="fa-solid fa-chevron-left text-3xl md:text-5xl"></i>
                </button>
            )}

            <img 
              key={activeModal.index} 
              src={activeModal.project.images[activeModal.index]} 
              alt="Vista previa" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()} 
            />

            {/* Flecha Derecha Modal */}
            {activeModal.project.images.length > 1 && (
                <button 
                    onClick={handleNextModalImage}
                    className="absolute right-0 md:right-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
                >
                    <i className="fa-solid fa-chevron-right text-3xl md:text-5xl"></i>
                </button>
            )}
            
            {/* Indicador de página Modal */}
             {activeModal.project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 bg-black/50 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md border border-white/10">
                    {activeModal.index + 1} / {activeModal.project.images.length}
                </div>
             )}
          </div>
        </div>
      )}

    </div>
  );
}