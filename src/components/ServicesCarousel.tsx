'use client'
import React, { useState, useCallback, useEffect } from 'react';
import { ArrowRight, Brain, BarChart3, GitBranch, Settings, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 'ai-bots',
      title: 'AI BOTS',
      description: 'Solução de atendimento AI 24x7 para empresas com alto fluxo de atendimento comercial e/ou operacional, transferindo 100% da necessidade de suporte a um agente treinado a interpretar texto, voz, imagem e documentos PDF.',
      image: '/assets/3.png',
      buttonText: 'Conheça o João Pedro',
      icon: Brain,
      features: ['Atendimento 24/7', 'Multi-modal', 'Treinamento customizado'],
      whatsappLink: 'https://wa.me/5516317009351?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20mais%20sobre%20o%20Jo%C3%A3o%20Pedro',
    },
    {
      id: 'data-dash',
      title: 'DATA & DASHBOARDS',
      description: 'Dê autonomia e maior disponibilidade analítica aos times de negócio através de soluções de consolidação e gestão de dados. Use ferramentas de geração de insights criação de conteúdo e dashboards.',
      image: '/assets/4.png',
      buttonText: 'Conheça alguns cases',
      icon: BarChart3,
      features: ['Dashboards interativos', 'Insights automáticos', 'Consolidação de dados'],
      whatsappLink: 'https://wa.me/5511971891894?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20Data%20%26%20Dashboards%20da%20Manac%C3%A1%20Partners.',
    },
    {
      id: 'integration',
      title: 'INTEGRAÇÃO',
      description: 'Crie integrações, não problemas. Ofereça conectividade entre os sistemas legado aos times de negócio, reduzindo a capacidade analítica e tomada de decisão. As integrações contribuem para uma operação mais rentável e enxuta.',
      image: '/assets/5.png',
      buttonText: 'Conheça alguns cases',
      icon: GitBranch,
      features: ['Sistemas legados', 'APIs modernas', 'Sincronização automática'],
      whatsappLink: 'https://wa.me/5511971891894?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20Integra%C3%A7%C3%A3o%20da%20Manac%C3%A1%20Partners.',
    },
    {
      id: 'process-design',
      title: 'DESENHO DE PROCESSOS',
      description: 'Ferramentas de desenho e definição de processos low-code são cada vez mais usadas no cenário profissional. O conhecimento de tecnologia passa a ser, cada vez mais, observado e desejado pelos times de negócio.',
      image: '/assets/6.png',
      buttonText: 'Conheça alguns cases',
      icon: Settings,
      features: ['Low-code solutions', 'Automação de processos', 'Otimização contínua'],
      whatsappLink: 'https://wa.me/5511971891894?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20Desenho%20de%20Processos%20da%20Manac%C3%A1%20Partners.',
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  }, [services.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
      <section id="solucoes" className="py-24 bg-gray-50 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-[#3c074e]/10 text-[#3c074e] rounded-full text-sm font-semibold mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Nossas Soluções
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Cases de{' '}
              <span className="text-[#3c074e]">
              Tech & Digital
            </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra como transformamos desafios em soluções tecnológicas que geram resultados reais e mensuráveis para nossos clientes.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                    <div
                        key={service.id}
                        className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-[#3c074e]/60 transition-all duration-300"></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                          <IconComponent className="w-6 h-6 text-[#3c074e]" />
                        </div>
                      </div>

                      <div className="p-8 space-y-6">
                        <h3 className="text-xl font-bold text-gray-900 tracking-wide group-hover:text-[#3c074e] transition-colors">
                          {service.title}
                        </h3>

                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-[#3c074e] rounded-full"></div>
                                <span>{feature}</span>
                              </div>
                          ))}
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                          {service.description}
                        </p>

                        <a
                            href={service.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-[#3c074e] text-white py-4 px-6 rounded-full hover:shadow-xl transition-all duration-300 font-semibold transform hover:scale-105 group-hover:-translate-y-1 text-center"
                        >
                          {service.buttonText}
                        </a>
                      </div>
                    </div>
                );
              })}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden relative">
              <div className="overflow-hidden rounded-3xl">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={service.id} className="w-full flex-shrink-0 px-4">
                          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="relative h-64">
                              <img
                                  src={service.image}
                                  alt={service.title}
                                  className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50"></div>
                              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                                <IconComponent className="w-6 h-6 text-[#3c074e]" />
                              </div>
                            </div>

                            <div className="p-8 space-y-6">
                              <h3 className="text-xl font-bold text-gray-900 tracking-wide">
                                {service.title}
                              </h3>

                              <div className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                      <div className="w-1.5 h-1.5 bg-[#3c074e] rounded-full"></div>
                                      <span>{feature}</span>
                                    </div>
                                ))}
                              </div>

                              <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                              </p>

                              <a
                                  href={service.whatsappLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block w-full bg-[#3c074e] text-white py-4 px-6 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-center"
                              >
                                {service.buttonText}
                              </a>
                            </div>
                          </div>
                        </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-white transition-all duration-300 z-10"
                  onClick={prevSlide}
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-white transition-all duration-300 z-10"
                  onClick={nextSlide}
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center space-x-3 mt-8">
                {services.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-[#3c074e] scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ServicesCarousel;