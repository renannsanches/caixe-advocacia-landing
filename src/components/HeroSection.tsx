
import { MessageCircle, Shield, Scale } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, Dr. Vanderley. Preciso de orientação jurídica urgente. Pode me ajudar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/bg-hero.webp"
          alt="Dr. Vanderley Caixe Filho - Background"
          className="w-auto h-auto object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10 w-full">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="text-left">
            <ScrollReveal delay={200}>
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-[#004080] mr-3" />
                <span className="text-[#004080] font-semibold text-sm tracking-wider uppercase">
                  Advocacia Criminal Especializada
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <h1 className="heading-primary mb-6">
                <span className="text-[#004080]">Vanderley Caixe Filho</span>
                <br />
                Advogado Criminalista<br />
                ao Lado de Quem Precisa<br /> de Justiça
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Atuação estratégica, sigilosa e combativa para garantir sua liberdade.
                <br />
                <span className="text-[#004080] font-medium">Presencial e Remota em todo o Brasil</span>
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-4">
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
            </ScrollReveal>
            
            <ScrollReveal delay={1000}>
              <div className="mt-8 flex items-center space-x-8 text-sm text-[#1f1f1f]">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#56be5e] rounded-full mr-2"></div>
                  Atendimento 24h
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#56be5e] rounded-full mr-2"></div>
                  Sigilo Absoluto
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#56be5e] rounded-full mr-2"></div>
                  Defesa Combativa
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
