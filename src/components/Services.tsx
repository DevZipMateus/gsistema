
import React from 'react';
import { FileSpreadsheet, Computer, Building2, FileText, Zap, Key, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Sistemas de Gestão (ERP)',
    description: 'Sistemas completos para gestão de pequenas empresas, controle de estoque, vendas e finanças.',
    icon: FileSpreadsheet,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Suporte de TI',
    description: 'Suporte técnico e manutenção para empresas, garantindo o funcionamento contínuo de seus sistemas.',
    icon: Computer,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Consultoria em Tecnologia',
    description: 'Orientação especializada para escolha das melhores soluções tecnológicas para o seu negócio.',
    icon: Building2,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Automação Comercial',
    description: 'Soluções completas de automação para lojas e comércios, incluindo PDV e sistemas integrados.',
    icon: FileText,
    delay: '0.3s'
  },
  {
    id: 5,
    title: 'Transformação Digital',
    description: 'Ajudamos pequenos negócios a se modernizarem e aproveitarem as vantagens da era digital.',
    icon: Zap,
    delay: '0.4s'
  },
  {
    id: 6,
    title: 'Certificado Digital',
    description: 'Emissão de certificados digitais para empresas e profissionais autônomos.',
    icon: Key,
    delay: '0.5s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas para sua empresa
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos serviços especializados em tecnologia para atender às necessidades específicas do seu negócio, 
            desde consultoria até implementação de sistemas.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-corporate-blue/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-corporate-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-corporate-blue hover:bg-corporate-darkBlue text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex mx-auto"
          >
            <span>Fale com um especialista</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
