
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'}`}>
      {/* Top Bar with Contact Info and Social Media */}
      <div className="container-custom">
        {/* Desktop Contact Information */}
        <div className={`hidden md:flex md:justify-between items-center mb-4 md:mb-2`}>
          {/* Contact Information */}
          <div className="flex md:space-x-6 text-sm text-gray-600">
            <a href="mailto:gerliandro55@gmail.com" className="flex items-center hover:text-corporate-orange transition-colors duration-300">
              <Mail size={16} className="mr-2" />
              gerliandro55@gmail.com
            </a>
            <a href="tel:+5594991784456" className="flex items-center hover:text-corporate-orange transition-colors duration-300 whitespace-nowrap">
              <Phone size={16} className="mr-2" />
              (94) 99178-4456
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/gsistemaerp" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-corporate-orange transition-colors duration-300">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        
        {/* Mobile Contact Toolbar - Compact & Horizontal */}
        <div className="md:hidden flex justify-center gap-4 py-2 bg-gray-50 -mx-4 px-4 mb-2">
          <a href="tel:+5594991784456" className="flex items-center text-xs text-gray-600 hover:text-corporate-orange">
            <Phone size={14} className="mr-1" />
            <span className="whitespace-nowrap">Ligar</span>
          </a>
          <span className="text-gray-300">|</span>
          <a href="mailto:gerliandro55@gmail.com" className="flex items-center text-xs text-gray-600 hover:text-corporate-orange">
            <Mail size={14} className="mr-1" />
            <span>Email</span>
          </a>
          <span className="text-gray-300">|</span>
          <a href="https://www.instagram.com/gsistemaerp" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-gray-600 hover:text-corporate-orange">
            <Instagram size={14} className="mr-1" />
            <span>Instagram</span>
          </a>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="transition-all duration-300 transform hover:scale-[1.02]">
            <img 
              src="/lovable-uploads/e31f9b36-1683-4d31-942f-83bb832fb4e4.png" 
              alt="G Sistema - Soluções em TI para sua Empresa" 
              className="h-12"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link to="/" className="nav-link">Início</Link>
            <a href="#about" className="nav-link">Sobre Nós</a>
            <a href="#services" className="nav-link">Serviços</a>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-corporate-orange focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-4 flex flex-col space-y-3 border-t mt-4">
          <Link to="/" className="px-4 py-2 text-gray-700 hover:text-corporate-orange hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Início</Link>
          <a href="#about" className="px-4 py-2 text-gray-700 hover:text-corporate-orange hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Sobre Nós</a>
          <a href="#services" className="px-4 py-2 text-gray-700 hover:text-corporate-orange hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Serviços</a>
          <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-corporate-orange hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Contato</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
