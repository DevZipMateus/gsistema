
import React from 'react';
import { Button } from '@/components/ui/button';

const EgestorERP = () => {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          {/* Header Text */}
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
              Sistema de gestão empresarial - ERP Online
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Dobre seus lucros otimizando sua gestão
            </p>
          </div>
          
          {/* Video Container */}
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-xl mb-8 animate-fade-in">
            <video 
              className="w-full aspect-video object-cover" 
              autoPlay
              muted
              loop
              playsInline
              poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png"
            >
              <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in mt-4">
            <a 
              href="https://www.egestor.com.br/afl/9904" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="py-6 px-10 bg-green-400 hover:bg-green-500 text-lg font-medium text-neutral-800 rounded-full transition-all duration-300"
              >
                Teste grátis
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
