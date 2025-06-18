'use client'
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const EmailCTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);

      const message = encodeURIComponent(`Olá! Me interessei pelas soluções da Manacá Partners. Meu email é: ${email}`);
      window.open(`https://api.whatsapp.com/send?phone=5511971891894&text=${message}`, '_blank');
    }
  };

  return (
      <section className="relative overflow-hidden bg-[#8B5CF6] py-20">
        {/* Curved wave elements */}
        <div className="absolute inset-0">
          {/* Bottom curved waves */}
          <svg
              className="absolute bottom-0 left-0 w-full h-32"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
          >
            <path
                d="M0,60 C300,120 500,0 800,60 C1000,120 1200,0 1200,60 L1200,120 L0,120 Z"
                fill="rgba(255,255,255,0.1)"
            />
          </svg>

          <svg
              className="absolute bottom-0 left-0 w-full h-24"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
          >
            <path
                d="M0,80 C400,20 600,120 1000,40 C1100,20 1200,80 1200,80 L1200,120 L0,120 Z"
                fill="rgba(255,255,255,0.05)"
            />
          </svg>

          {/* Top curved waves */}
          <svg
              className="absolute top-0 left-0 w-full h-32 transform rotate-180"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
          >
            <path
                d="M0,60 C300,120 500,0 800,60 C1000,120 1200,0 1200,60 L1200,120 L0,120 Z"
                fill="rgba(255,255,255,0.05)"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            {/* Main heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Soluções para o seu negócio
            </h2>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Descubra como podemos ajudar a impulsionar o seu sucesso empresarial.
            </p>

            {/* Email input */}
            <div className="max-w-md mx-auto mt-12 space-y-4">
              <div className="space-y-4">
                <div className="relative">
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Digite seu email"
                      className="w-full px-4 py-4 text-gray-700 placeholder-gray-400 bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-300 text-base"
                  />
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-white/20 backdrop-blur-sm text-white py-4 px-6 rounded-xl font-semibold text-base hover:bg-white/30 transition-all duration-300 border border-white/30 hover:shadow-lg"
                >
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default EmailCTA;