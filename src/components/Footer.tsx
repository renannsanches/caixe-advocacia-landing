
import { MessageCircle, Instagram, Mail, MapPin, Phone, Scale } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, Dr. Vanderley. Preciso de orientação jurídica urgente. Pode me ajudar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-light-graphite border-t border-gold/20">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-6">
              <Scale className="w-8 h-8 text-gold mr-3" />
              <div>
                <h3 className="text-xl font-bold text-white">Dr. Vanderley Caixe Filho</h3>
                <p className="text-gold text-sm">OAB/SP 123.456</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advogado criminalista especializado em defesa estratégica e humanizada. 
              Comprometido com a justiça e a liberdade de seus clientes.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3" />
                <span className="text-gray-300">contato@vanderleycaixe.adv.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gold mr-3" />
                <span className="text-gray-300">São Paulo, SP - Atendimento Nacional</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Crimes Patrimoniais</li>
              <li>Prisão em Flagrante</li>
              <li>Habeas Corpus</li>
              <li>Tribunal do Júri</li>
              <li>Inquérito Policial</li>
              <li>Consultoria Jurídica</li>
            </ul>
          </div>
          
          {/* Contact Actions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Entre em Contato</h4>
            
            <div className="space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full whatsapp-button text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Direto
              </button>
              
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/vanderleycaixe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                
                <a 
                  href="mailto:contato@vanderleycaixe.adv.br"
                  className="bg-gold text-black p-3 rounded-lg hover:bg-gold/90 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-graphite rounded-lg border border-gold/20">
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong>Atendimento 24h:</strong> Disponível para emergências e casos urgentes. 
                Entre em contato a qualquer hora.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Dr. Vanderley Caixe Filho. Todos os direitos reservados.
            </p>
            
            <div className="text-xs text-gray-500 max-w-md text-center md:text-right">
              <p>
                Conforme Provimento 205/2021 da OAB: Este site tem caráter exclusivamente informativo. 
                Não oferecemos garantias sobre resultados específicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
