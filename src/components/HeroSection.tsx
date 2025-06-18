'use client'
import React from 'react';
import { ArrowRight, Sparkles, Mail, Users, Target, Zap, BarChart3, Brain, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import HeroClient from '@/components/HeroClient';


const HeroSection = () => {
  return (
    <HeroClient>
      {(isVisible) => (
        <section id="inicio" className="min-h-screen pt-20 pb-16 bg-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="space-y-8">
                  <div className="inline-flex items-center px-6 py-3 mt-12 bg-[#3c074e] text-white rounded-full text-sm font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                    Tecnologia que transforma negócios
                  </div>

                  <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    Potencialize seu{' '}
                    <span className="text-[#3c074e] animate-pulse">
                    negócio
                  </span>
                    <br />
                    com tecnologia
                  </h1>
                </div>

                <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                  <p className="text-2xl font-medium text-gray-800">
                    O mundo dos negócios mudou — e quem não se transforma, fica para trás.
                  </p>
                  <p className="text-lg">
                    Na era digital, eficiência, automação e inteligência são mais do que diferenciais: são essenciais. Somos uma consultoria que aplica soluções de tecnologia para ajudar empresas médias e grandes a crescer, se transformar, inovar e ganhar competitividade.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                      href="https://api.whatsapp.com/send?phone=5511971891894"
                      className="group bg-[#3c074e] text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Fale Conosco</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                      href="#solucoes"
                      className="group bg-white/80 backdrop-blur-sm text-[#3c074e] px-10 py-5 rounded-full text-lg font-semibold border-2 border-[#3c074e]/20 hover:bg-[#3c074e] hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Zap className="w-6 h-6" />
                    <span>Ver Soluções</span>
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#3c074e]">+100</div>
                    <div className="text-sm text-gray-600">Projeto nos últimos 3 anos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#3c074e]">95</div>
                    <div className="text-sm text-gray-600">NPS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#3c074e]">90</div>
                    <div className="text-sm text-gray-600">E-NPS</div>
                  </div>
                </div>
              </div>

              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative w-full h-[300px] lg:h-[500px]">
                  <div className="absolute inset-0 bg-[#3c074e]/20 rounded-3xl transform rotate-3 animate-pulse"></div>
                  <Image
                      src="/assets/1.png"
                      alt="Team collaboration"
                      fill
                      className="object-cover rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#3c074e]/30 rounded-3xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"></div>

                </div>
              </div>
            </div>

            {/* Second section */}
            <div className="mt-32">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="relative w-full h-96 lg:h-[500px]">
                    <Image
                        src="/assets/2.png"
                        alt="Professional woman working"
                        fill
                        className="object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#3c074e]/10 rounded-3xl"></div>
                  </div>
                </div>

                <div className="space-y-8 order-1 lg:order-2">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Resultados que{' '}
                    <span className="text-[#3c074e]">
                    impactam
                  </span>
                  </h2>

                  <p className="text-xl text-gray-700 leading-relaxed">
                    Atuamos com desenvolvimento de sistemas sob medida, automação de processos, integrações, recomendações de melhorias em ERP/CRM, além de iniciativas em inteligência artificial, RPA, dados e dashboards.
                  </p>

                  <div className="bg-[#3c074e] text-white p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300">
                    <p className="text-2xl font-bold mb-4">
                      Mais produtividade.&nbsp;&nbsp;Mais controle.&nbsp;&nbsp;Mais resultados.
                    </p>
                    <p className="text-lg opacity-90">
                      Entregamos tecnologia funcional que gera impacto real e resultados mensuráveis.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <Target className="w-8 h-8 text-[#3c074e] mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Foco em Resultados</h4>
                      <p className="text-sm text-gray-600">Cada projeto é pensado para gerar valor real ao seu negócio</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <Users className="w-8 h-8 text-[#3c074e] mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Time Especializado</h4>
                      <p className="text-sm text-gray-600">Profissionais experientes e atualizados com as melhores práticas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote section */}
            <div className="mt-32 text-center bg-gray-50 rounded-3xl p-16 shadow-xl border border-gray-100">
              <blockquote className="text-4xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight">
                "Seu desafio é nosso projeto.<br />
                <span className="text-[#3c074e]">
                Sua transformação, nossa entrega.
              </span>"
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                    href="https://api.whatsapp.com/send?phone=5511971891894"
                    className="group bg-[#3c074e] text-white px-12 py-6 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:-translate-y-1"
                    target={'_blank'}
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Comece Agora</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                    href="mailto:contato@manacapartners.com.br"
                    className="group bg-white/80 backdrop-blur-sm text-[#3c074e] px-12 py-6 rounded-full text-xl font-semibold border-2 border-[#3c074e]/20 hover:bg-[#3c074e] hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Mail className="w-6 h-6" />
                  <span>Fale Conosco</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </HeroClient>
  );
};

export default HeroSection;