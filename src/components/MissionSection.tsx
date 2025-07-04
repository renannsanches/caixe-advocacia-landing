import { Scale, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const MissionSection = () => {
  return (
    <section
  className="py-20 relative bg-cover bg-center"
style={{
  backgroundImage: "url('/images/jbg2.webp')",
  backgroundSize: "cover",         // cobre toda a seção
  backgroundPosition: "center",    // centraliza a imagem
  backgroundRepeat: "no-repeat",   // evita repetição
}}
>
      <div className="section-container">
        <div className="relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <img 
              src="/justice.webp"

              alt="Justiça e Liberdade"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 py-32 px-12">
            <div className="max-w-3xl">
              <ScrollReveal delay={200}>
                <div className="flex items-center mb-8">
                  <Scale className="w-12 h-12 text-gold mr-4" />
                  <Shield className="w-12 h-12 text-gold" />
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <h2 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  Justiça & <span className="text-gold">Liberdade</span>
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <div className="w-24 h-1 bg-gold mb-8"></div>
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <p className="text-2xl text-gray-200 leading-relaxed font-light">
                  "Enquanto a prática penitenciária abandona o ideal de ressocialização e assume as prisões como depósito, os tribunais, ignorando tal realidade, continuam usando o termo ressocialização para encarcerar."
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={1000}>
                <div className="mt-12 flex items-center text-gold font-semibold">
                  <div className="w-16 h-px bg-gold mr-4"></div>
                  <span className="text-sm tracking-wider uppercase">Luis Carlos Valois</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;