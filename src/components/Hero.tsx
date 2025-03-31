
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
const Hero = () => {
  const isMobile = useIsMobile();
  return <section className="pt-44 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-corporate-blue to-corporate-darkBlue relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="absolute top-40 right-10 w-72 h-72 bg-corporate-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-corporate-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
          animationDelay: '0.1s'
        }}>
            Simplificando a gestão, impulsionando seu negócio
          </h1>
          
          <p className="text-lg text-corporate-orange/90 mb-10 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Tecnologia acessível, eficiente e estratégica para o crescimento do seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <a href="https://api.whatsapp.com/send?phone=5594991784456&text=Ol%C3%A1%2C%20gostaria%20de%20me%20informar%20sobre%20uma%20assist%C3%AAncia" target="_blank" rel="noopener noreferrer" className="bg-corporate-orange hover:bg-corporate-lightOrange text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2">
              <img alt="WhatsApp" className="w-5 h-5" src="/lovable-uploads/a8f6d986-abd8-40fc-8731-788e1a19170c.png" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#services" className="btn-secondary">
              Nossos serviços
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>;
};
export default Hero;
