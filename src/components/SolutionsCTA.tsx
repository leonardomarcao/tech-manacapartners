

// Enhanced AI CTA Section
import {ArrowRight, Brain} from "lucide-react";
import React from "react";

const SolutionsCTA = () => {
  return (
      <section className="py-24 bg-[#3c074e] relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold shadow-xl border border-white/20">
                <Brain className="w-5 h-5 mr-2 animate-pulse" />
                Conheça nosso AI Assistant
              </div>

              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Fale com{' '}
                <span className="text-yellow-400 animate-pulse">
                João Pedro
              </span>
                <br />
                nosso assistente AI
              </h2>

              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Teste agora nossa solução de inteligência artificial. João Pedro está disponível 24/7 para responder suas dúvidas, entender suas necessidades e demonstrar como podemos transformar seu negócio.
              </p>
            </div>

            <div className="max-w-xl mx-auto space-y-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">João Pedro</h3>
                    <p className="text-white/80">Assistente AI da Manacá Partners</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-white/80 mb-1">Disponibilidade</div>
                    <div className="text-white font-semibold">24/7</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-white/80 mb-1">Resposta</div>
                    <div className="text-white font-semibold">Instantânea</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-white/80 mb-1">Especialidade</div>
                    <div className="text-white font-semibold">Tech Solutions</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-white/80 mb-1">Idiomas</div>
                    <div className="text-white font-semibold">PT/EN</div>
                  </div>
                </div>
              </div>

              <button className="group w-full bg-yellow-400 text-gray-900 py-6 px-8 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-3 transform hover:scale-105 hover:-translate-y-1">
                <Brain className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Fale agora com João Pedro (AI)</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-white/70 text-sm">
                *Demonstração gratuita • Sem compromisso • Experiência completa
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default SolutionsCTA;