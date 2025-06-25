
import { MapPin, Clock, Shield } from "lucide-react";

const CoverageSection = () => {
  return (
    <section className="py-20 bg-light-graphite/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map/Visual */}
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
          
          {/* Content */}
          <div>
            <span className="text-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
              Área de Atuação
            </span>
            <h2 className="heading-secondary">
              Atendimento em Ribeirão Preto e Região
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Oferecemos consultoria jurídica especializada para Ribeirão Preto e toda a região, 
              combinando a agilidade do atendimento remoto com a discrição necessária para 
              casos criminais.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gold/10 rounded-lg p-3 mr-4">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Cobertura Regional</h4>
                  <p className="text-gray-300">Atendimento presencial em Ribeirão Preto e região, além de consultoria remota via videoconferência.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold/10 rounded-lg p-3 mr-4">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Agilidade Garantida</h4>
                  <p className="text-gray-300">Resposta rápida e eficiente, adaptada à urgência de cada situação jurídica.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold/10 rounded-lg p-3 mr-4">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Discrição Total</h4>
                  <p className="text-gray-300">Sigilo absoluto em todas as comunicações e procedimentos legais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
