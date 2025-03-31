
import React from 'react';
import { Linkedin, Mail, Phone, Instagram } from 'lucide-react';

const team = [{
  id: 1,
  name: 'Gerliandro Santana',
  role: 'Analista de TI e Consultor em Soluções Empresariais',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  delay: '0s',
  contact: {
    phone: '(94) 99178-4456',
    email: 'gerliandro55@gmail.com'
  }
}];

const Team = () => {
  return (
    <section id="team" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossa Equipe
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Conheça nosso profissional
          </h2>
          <p className="text-neutral-600 text-lg">
            Nosso especialista está preparado para fornecer as melhores soluções para o seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 max-w-md mx-auto">
          {team.map(member => (
            <div 
              key={member.id} 
              className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in"
              style={{ animationDelay: member.delay }}
            >
              <div className="aspect-[3/2] relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
                <p className="text-neutral-600 mb-4">{member.role}</p>
                
                <div className="flex flex-col space-y-2 mb-5">
                  <a href={`tel:${member.contact.phone}`} className="flex items-center text-neutral-600 hover:text-corporate-blue transition-colors">
                    <Phone size={16} className="mr-2" />
                    <span>{member.contact.phone}</span>
                  </a>
                  <a href={`mailto:${member.contact.email}`} className="flex items-center text-neutral-600 hover:text-corporate-blue transition-colors">
                    <Mail size={16} className="mr-2" />
                    <span>{member.contact.email}</span>
                  </a>
                </div>
                
                <div className="flex justify-center mt-4">
                  <a 
                    href="https://api.whatsapp.com/send?phone=5594991784456&text=Ol%C3%A1%2C%20gostaria%20de%20me%20informar%20sobre%20uma%20assist%C3%AAncia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-corporate-blue hover:bg-corporate-darkBlue text-white py-2 px-5 rounded-md transition-all"
                  >
                    <div className="w-5 h-5">
                      <img 
                        src="/lovable-uploads/9af51757-dec9-4ec7-988c-f79d58e34b1f.png" 
                        alt="WhatsApp" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span>Entrar em contato</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
