
import { MessageCircle, Search, Shield, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: MessageCircle,
      title: "Contato Inicial",
      description: "Entre em contato via WhatsApp para uma primeira análise do seu caso. Atendimento imediato e sigiloso.",
    },
    {
      step: "02",
      icon: Search,
      title: "Análise do Caso",
      description: "Avaliação detalhada da situação jurídica, documentos e identificação da melhor estratégia de defesa.",
    },
    {
      step: "03",
      icon: Shield,
      title: "Estratégia de Defesa",
      description: "Desenvolvimento de uma estratégia personalizada e combativa, adequada às especificidades do caso.",
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Acompanhamento Completo",
      description: "Acompanhamento em todas as fases do processo, com comunicação constante sobre os progressos.",
    },
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
              Como Funciona
            </span>
            <h2 className="heading-secondary">
              Linha do Tempo: Como Funciona a Defesa
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Processo transparente e eficiente, desde o primeiro contato até a resolução do caso.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gold/30"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <ScrollReveal 
                key={index} 
                delay={300 + index * 200}
                direction={index % 2 === 0 ? 'right' : 'left'}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="card-elegant">
                      <div className="flex items-center mb-4">
                        <div className="bg-gold text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                          {step.step}
                        </div>
                        <step.icon className="w-8 h-8 text-gold" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-gold rounded-full border-4 border-light-graphite shadow-lg"></div>
                  </div>
                  
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
