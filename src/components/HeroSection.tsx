import { MessageCircle, Shield, Scale } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { FaWhatsapp } from "react-icons/fa";


const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, Dr. Vanderley. Preciso de orientação jurídica urgente. Pode me ajudar?");
    window.open(`https://wa.me/5516996481094?text=${message}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
<div className="absolute inset-0 hidden sm:block">
  {/* Desktop Background */}
  <img
    src="/lovable-uploads/bg-hero.webp"
    alt="Dr. Vanderley Caixe Filho - Background"
    className="w-full h-full object-cover object-center"
  />
  {/* Desktop overlays */}
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
</div>

<div className="absolute inset-0 block sm:hidden">
  {/* Mobile Background */}
  <img
    src="/lovable-uploads/bg-mobile-hero.webp"
    alt="Dr. Vanderley Caixe Filho - Background Mobile"
    className="w-full h-full object-cover object-center"
  />
  {/* Mobile overlays */}
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
</div>

      
      <div className="section-container relative z-10 w-full">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="text-left">
            <ScrollReveal delay={200}>
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-[#004080] sm:text-[#004080] text-[#0979e8] mr-3" />
                <span className="text-[#004080] sm:text-[#004080] text-[#0979e8] font-semibold text-sm tracking-wider uppercase">
                  Advocacia Criminal Especializada
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <h1 className="heading-primary mb-6 sm:text-4xl lg:text-6xl text-[30px] leading-tight">
                <span className="text-[#004080] sm:text-[#004080] text-[#0979e8]">Vanderley Caixe Filho</span>
                <br />
                <span className="text-foreground sm:text-foreground text-white">Advogado Criminalista<br />
                ao Lado de Quem Precisa<br /> de Justiça</span>
              </h1>
            </ScrollReveal>
            
<ScrollReveal delay={600}>
  <p className="mb-8 leading-relaxed text-[12px] sm:text-xl">
    {/* Desktop */}
    <span className="hidden sm:inline text-black">
      Atuação estratégica, sigilosa e combativa para garantir sua liberdade.
    </span>
    {/* Mobile */}
    <span className="inline sm:hidden text-white">
      Atuação estratégica, sigilosa e combativa<br />para garantir sua liberdade.
    </span>
  </p>
</ScrollReveal>

            
            <ScrollReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="whatsapp-button text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
                ><FaWhatsapp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Consultoria Emergencial
                </button>
                
                
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={1000}>
              <div className="mt-8 flex items-center space-x-8 text-sm text-[#1f1f1f] sm:text-[#1f1f1f] text-white">
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