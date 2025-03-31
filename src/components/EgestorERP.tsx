
import React from 'react';
import { Button } from '@/components/ui/button';

const EgestorERP = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          {/* Header Text */}
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
              Sistema de gestão empresarial - ERP Online
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
              Dobre seus lucros otimizando sua gestão
            </p>
          </div>
          
          {/* Video Container - Optimized size */}
          <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-xl mb-10 animate-fade-in">
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
          <div className="animate-fade-in">
            <a 
              href="https://www.egestor.com.br/afl/9904" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                className="py-5 px-8 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
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
