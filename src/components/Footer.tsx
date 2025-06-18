import {ArrowRight, ExternalLink, Instagram, Linkedin, Mail, MessageCircle} from "lucide-react";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <Image
                  src="/logo.png"
                  alt="Manacá Partners"
                  width={160}
                  height={50}
                  className="h-24 w-auto filter brightness-0 invert"
              />
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Transformamos negócios através da tecnologia. Somos especialistas em soluções digitais que geram resultados reais e mensuráveis.
              </p>
              <div className="flex space-x-4">
                <a
                    href="https://www.instagram.com/manaca_partners/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                    href="https://www.linkedin.com/company/manaca-partners?originalSubdomain=br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=5511971891894"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Links Rápidos</h3>
              <nav className="space-y-4">
                <a href="#inicio" className="block text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Início
                </a>
                <a href="https://www.manacapartners.com.br/sobre-nos/" className="block text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sobre Nós
                </a>
                <a href="#solucoes" className="block text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Soluções
                </a>
                <a href="https://www.manacapartners.com.br/blog/" className="block text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </a>
                <a href="https://www.manacapartners.com.br/contato/" className="block text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contato
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Contato</h3>
              <div className="space-y-4">
                <a
                    href="https://api.whatsapp.com/send?phone=5511971891894"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                    href="mailto:contato@manacapartners.com.br"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>contato@manacapartners.com.br</span>
                </a>
              </div>

            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                © 2025 Manacá Partners. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;