import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  // Tipado estricto: 'path' es string y la función devuelve un boolean
  const isActive = (path: string): boolean => location.pathname === path;

  const linkBaseClasses: string = "text-sm font-medium transition-all duration-300 hover:text-blue-400 relative group";

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold font-mono group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                &lt;/&gt;
              </div>
              <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                ArguetaDev
              </span>
            </Link>
          </div>

          {/* LINKS */}
          <div className="flex gap-8 items-center">
            
            <Link to="/" className={`${linkBaseClasses} ${isActive('/') ? 'text-blue-400' : 'text-slate-300'}`}>
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link to="/about" className={`${linkBaseClasses} ${isActive('/about') ? 'text-blue-400' : 'text-slate-300'}`}>
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 
                ${isActive('/contact') 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
            >
              Contact Me
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}