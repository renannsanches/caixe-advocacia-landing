
import { MessageCircle, Shield, Scale } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, Dr. Vanderley. Preciso de orientação jurídica urgente. Pode me ajudar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          
          {/* Lawyer Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gold rounded-2xl blur-xl opacity-20 transform rotate-6"></div>
              <div className="relative w-80 h-96 bg-light-graphite rounded-2xl border-2 border-gold/30 overflow-hidden shadow-gold">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Dr. Vanderley Caixe Filho - Advogado Criminalista"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white font-semibold text-lg">Dr. Vanderley Caixe Filho</h3>
                  <p className="text-gold text-sm">OAB/SP 123.456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
