
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

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
    <section id="team" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossa Equipe
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conheça quem está por trás da G Sistema
          </h2>
          <p className="text-gray-600 text-lg">
            Profissional qualificado pronto para atender às necessidades tecnológicas da sua empresa.
          </p>
        </div>
        
        {/* Team Members Grid */}
        <div className="flex justify-center">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-xl shadow-sm overflow-hidden max-w-xs w-full animate-fade-in transform hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: member.delay }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-corporate-orange mb-4">{member.role}</p>
                
                <div className="flex items-center space-x-4 mt-4">
                  <a 
                    href={`tel:${member.contact.phone.replace(/\D/g, '')}`} 
                    className="bg-gray-100 hover:bg-corporate-blue hover:text-white transition-colors duration-300 p-2 rounded-full"
                  >
                    <Phone size={18} />
                  </a>
                  <a 
                    href={`mailto:${member.contact.email}`} 
                    className="bg-gray-100 hover:bg-corporate-blue hover:text-white transition-colors duration-300 p-2 rounded-full"
                  >
                    <Mail size={18} />
                  </a>
                  <a 
                    href="https://www.instagram.com/gerliandroestrela" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-100 hover:bg-corporate-blue hover:text-white transition-colors duration-300 p-2 rounded-full"
                  >
                    <Instagram size={18} />
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
