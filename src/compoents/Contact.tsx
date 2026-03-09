import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface IFormData {
  subject: string;
  message: string;
}

export default function Contact() {

  const [formData, setFormData] = useState<IFormData>({
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(formData.message);

    window.location.href = `mailto:arguetadev33@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 4000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      
      <div className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.1] transition-opacity duration-300" 
           style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal pointer-events-none transition-all duration-300"></div>
      <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal pointer-events-none transition-all duration-300"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* --- Columna Izquierda: Información --- */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm mb-4 transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></span>
              <span className="text-slate-600 dark:text-slate-300 text-xs font-bold tracking-wide uppercase">
                Contacto
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors duration-300">
              Hablemos de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                tu próximo proyecto.
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium transition-colors duration-300">
              Estoy disponible para oportunidades freelance o contratación a tiempo completo. 
              Si tienes una idea o necesitas escalar tu sistema, mi inbox está abierto.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 group p-4 rounded-xl transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
              <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">Email</p>
                <a href="mailto:arguetadev33@gmail.com" className="font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  arguetadev33@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group p-4 rounded-xl transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
              <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">Ubicación</p>
                <p className="font-bold text-slate-900 dark:text-white">El Salvador (Remoto / Híbrido)</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Columna Derecha: Formulario --- */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 transition-colors duration-300">
          
          {submitted && (
            <div className="mb-6 flex items-center gap-3 px-4 py-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl text-green-700 dark:text-green-300 text-sm font-medium">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              ¡Tu cliente de correo se abrió con el mensaje listo para enviar!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Asunto */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all"
                placeholder="¿De qué trata tu proyecto?"
              />
            </div>

            {/* TextArea Mensaje */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            {/* Botón Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all transform hover:-translate-y-1 shadow-lg 
                ${isSubmitting 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 shadow-slate-900/20 hover:shadow-blue-600/30'
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Abriendo correo...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Enviar Mensaje
                </span>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}