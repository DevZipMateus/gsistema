
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-corporate-blue/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Equipamentos de TI e sistemas de gestão" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-corporate-blue rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Desde 2022</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-corporate-orange rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Formado em ADS</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Anos de experiência em TI</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Tecnologia eficiente para o crescimento do seu negócio
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Sou Gerliandro Santana, formado em Análise e Desenvolvimento de Sistemas pela Universidade Norte do Paraná (UNOPAR). 
              Atuo na área de TI desde 2018, oferecendo suporte técnico e soluções para empresas.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              No final de 2022, fundei a G Sistema, com o propósito de levar inovação e eficiência para negócios de diversos segmentos. 
              Oferecemos sistemas de gestão (ERP) de alta qualidade, além de suporte de TI e consultoria especializada para ajudar 
              empresas a escolherem as melhores soluções tecnológicas, desde softwares até equipamentos e meios de pagamento.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-corporate-orange/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-orange" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Formação Técnica</h4>
                  <p className="text-gray-600">Analista de TI com formação acadêmica e experiência prática</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-corporate-orange/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-orange" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Soluções Personalizadas</h4>
                  <p className="text-gray-600">Cada cliente recebe atenção individualizada para suas necessidades</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-corporate-orange/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-orange" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Tecnologia Acessível</h4>
                  <p className="text-gray-600">Tornamos a tecnologia acessível para empresas de todos os portes</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="bg-corporate-blue hover:bg-corporate-darkBlue text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" 
              style={{ animationDelay: '0.7s' }}
            >
              <span>Conheça Nossos Diferenciais</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
