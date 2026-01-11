import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Función para cerrar el menú al hacer click en un link (UX móvil)
  const closeMenu = () => setIsOpen(false);

  // Tipado estricto: 'path' es string y la función devuelve un boolean
  const isActive = (path: string): boolean => location.pathname === path;

  // Clases base para Desktop
  const linkBaseClasses: string = "text-sm font-medium transition-all duration-300 hover:text-blue-400 relative group";

  // Clases base para Mobile (bloque, padding mayor)
  const mobileLinkBaseClasses: string = "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300";

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold font-mono group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                &lt;/&gt;
              </div>
              <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                ArguetaDev
              </span>
            </Link>
          </div>

          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className={`${linkBaseClasses} ${isActive('/') ? 'text-blue-400' : 'text-slate-300'}`}>
              Inicio
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link to="/about" className={`${linkBaseClasses} ${isActive('/about') ? 'text-blue-400' : 'text-slate-300'}`}>
              Sobre mí
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link to="/proyectos" className={`${linkBaseClasses} ${isActive('/proyectos') ? 'text-blue-400' : 'text-slate-300'}`}>
               Proyectos
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${isActive('/proyectos') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 
                ${isActive('/contact') 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
            >
              Contactame 
            </Link>

             
          </div>

          {/* MOBILE HAMBURGER BUTTON (Visible only on Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon logic: Si está abierto muestra X, si no muestra Hamburguesa */}
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

      {/* MOBILE MENU DROPDOWN */}
      {/* Se muestra solo si isOpen es true */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`${mobileLinkBaseClasses} ${isActive('/') ? 'bg-slate-800 text-blue-400' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              onClick={closeMenu}
              className={`${mobileLinkBaseClasses} ${isActive('/about') ? 'bg-slate-800 text-blue-400' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              onClick={closeMenu}
              className={`${mobileLinkBaseClasses} mt-4 ${isActive('/contact') ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'}`}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}