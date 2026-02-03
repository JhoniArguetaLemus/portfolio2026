import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useTheme from "../hooks/useTheme"; // Asegúrate de importar el hook

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme(); // Usamos el hook aquí

  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string): boolean => location.pathname === path;

  // Clases base (Actualizadas para soportar Dark Mode)
  // Texto: Gris oscuro en Light, Blanco en Dark
  const linkBaseClasses: string =
    "text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative group";

  return (
    // NAVBAR CONTAINER:
    // Light: bg-white/80 border-slate-200
    // Dark:  dark:bg-slate-900/80 dark:border-slate-800
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold font-mono group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                &lt;/&gt;
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                ArguetaDev
              </span>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8 items-center">
            
            {["/", "/about", "/proyectos", "/cv"].map((path) => {
              const labels: Record<string, string> = { "/": "Inicio", "/about": "Sobre mí", "/proyectos": "Proyectos", "/cv": "CV" };
              return (
                <Link
                  key={path}
                  to={path}
                  className={`${linkBaseClasses} ${
                    isActive(path) 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {labels[path]}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${isActive(path) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}

            {/* --- SWITCH MODO OSCURO (Diseño Toggle) --- */}
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 flex items-center px-1 shadow-inner focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
               {/* Icono Sol (Izquierda) */}
               <span className="absolute left-1.5 text-xs text-yellow-500 pointer-events-none">
                 <i className="fa-solid fa-sun"></i>
               </span>
               {/* Icono Luna (Derecha) */}
               <span className="absolute right-1.5 text-xs text-blue-300 pointer-events-none">
                 <i className="fa-solid fa-moon"></i>
               </span>

               {/* Círculo que se mueve */}
               <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 z-10 ${
                  theme === "dark" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>

            {/* Botón CTA */}
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm
                ${isActive("/contact")
                    ? "bg-blue-600 text-white shadow-blue-500/25"
                    : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 hover:-translate-y-0.5"
                }`}
            >
              Contáctame
            </Link>
          </div>

          {/* MOBILE CONTROLS (Hamburger + Switch Mobile) */}
          <div className="flex items-center gap-4 md:hidden">
            
            {/* Switch Mobile (Más pequeño) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? (
                 <i className="fa-solid fa-sun text-yellow-400"></i>
              ) : (
                 <i className="fa-solid fa-moon text-blue-600"></i>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 p-2 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {["/", "/about", "/proyectos", "/cv"].map((path) => {
                 const labels: Record<string, string> = { "/": "Inicio", "/about": "Sobre mí", "/proyectos": "Proyectos", "/cv": "CV" };
                 return (
                    <Link
                    key={path}
                    to={path}
                    onClick={closeMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                        isActive(path)
                        ? "bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    }`}
                    >
                    {labels[path]}
                    </Link>
                 )
             })}
            
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium mt-4 ${
                isActive("/contact")
                  ? "bg-blue-600 text-white"
                  : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
              }`}
            >
              Contáctame
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}