
import { MessageCircle, Shield, Scale } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, Dr. Vanderley. Preciso de orientação jurídica urgente. Pode me ajudar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/38616799-c58c-4a7d-bb24-9a9f835e621d.png"
          alt="Dr. Vanderley Caixe Filho - Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Scale className="w-8 h-8 text-gold mr-3" />
              <span className="text-gold font-semibold text-sm tracking-wider uppercase">
                Advocacia Criminal Especializada
              </span>
            </div>
            
            <h1 className="heading-primary mb-6">
              <span className="text-gold">Vanderley Caixe Filho</span>
              <br />
              Advogado Criminalista ao Lado de Quem Precisa de Justiça
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Atuação estratégica, sigilosa e combativa para garantir sua liberdade.
              <br />
              <span className="text-gold font-medium">Presencial e Remota em todo o Brasil</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleWhatsAppClick}
                className="whatsapp-button text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Consultoria Emergencial
              </button>
              
              <button className="btn-primary flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                Saiba Mais
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                Atendimento 24h
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                Sigilo Absoluto
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                Defesa Combativa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
