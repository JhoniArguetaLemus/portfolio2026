import  { useState} from "react";

import type { ChangeEvent, FormEvent } from "react";
// Definimos la interfaz para el estado del formulario
interface IFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  // Estado inicial tipado
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Manejador de cambios en inputs (Tipado genérico para Input y TextArea)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejador del envío (Simulado)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío a backend
    setTimeout(() => {
      alert(`Mensaje de ${formData.name} enviado (Simulación)`);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* --- Columna Izquierda: Información --- */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
              Contacto
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hablemos de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                tu próximo proyecto.
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Estoy disponible para oportunidades freelance o contratación a tiempo completo. 
              Si tienes una idea o necesitas escalar tu sistema, mi inbox está abierto.
            </p>
          </div>

          <div className="space-y-6">
            {/* Item de contacto: Email */}
            <div className="flex items-center space-x-4 text-slate-300">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 border border-slate-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">Email</p>
                <p className="font-medium hover:text-white transition-colors">jhoniargueta1245@gmail.com</p>
              </div>
            </div>

            {/* Item de contacto: Ubicación */}
            <div className="flex items-center space-x-4 text-slate-300">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-purple-400 border border-slate-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">Ubicación</p>
                <p className="font-medium hover:text-white transition-colors">El Salvador (Remoto / Híbrido)</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Columna Derecha: Formulario --- */}
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Nombre */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Input Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* TextArea Mensaje */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            {/* Botón Submit con estado de carga */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all transform hover:-translate-y-1 shadow-lg 
                ${isSubmitting 
                  ? 'bg-slate-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-blue-500/25'
                }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}