
import { MapPin, Clock, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CoverageSection = () => {
  return (
    <section className="py-20 bg-light-graphite/10">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map/Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="bg-light-graphite rounded-2xl p-8 border border-gold/20 shadow-gold">
                <img 
                  src="/lovable-uploads/2e26cf04-db50-4f5d-a8e2-9af570dbdff8.png"
                  alt="Mapa de Ribeirão Preto e Região - Atendimento Regional"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-8 bg-black/40 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Ribeirão Preto e Região</h3>
                    <p className="text-gold">Presencial e Remoto</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Content */}
          <div>
            <ScrollReveal delay={200}>
              <span className="text-color:#1f1f1f font-semibold text-sm tracking-wider uppercase mb-4 block">
                Área de Atuação
              </span>
              <h2 className="heading-secondary">
                Atendimento em Ribeirão Preto e Região
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <p className="text-xl text-color:#1f1f1f mb-8 leading-relaxed">
                Oferecemos consultoria jurídica especializada para Ribeirão Preto e toda a região, 
                combinando a agilidade do atendimento remoto com a discrição necessária para 
                casos criminais.
              </p>
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal delay={600}>
                <div className="flex items-start">
                  <div className="bg-bluecustom/10 rounded-lg p-3 mr-4">
                    <MapPin className="w-6 h-6 text-[#000080]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#000080] mb-2">Cobertura Regional</h4>
                    <p className="text-color:#1f1f1f">Atendimento presencial em Ribeirão Preto e região, além de consultoria remota via videoconferência.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <div className="flex items-start">
                  <div className="bg-bluecustom/10 rounded-lg p-3 mr-4">
                    <Clock className="w-6 h-6 text-[#000080]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#000080] mb-2">Agilidade Garantida</h4>
                    <p className="text-color:#1f1f1f">Resposta rápida e eficiente, adaptada à urgência de cada situação jurídica.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={1000}>
                <div className="flex items-start">
                  <div className="bg-bluecustom/10 rounded-lg p-3 mr-4">
                    <Shield className="w-6 h-6 text-[#000080]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#000080] mb-2">Discrição Total</h4>
                    <p className="text-color:#1f1f1f">Sigilo absoluto em todas as comunicações e procedimentos legais.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
