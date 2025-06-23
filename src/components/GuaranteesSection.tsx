
import { Lock, Sword, MessageSquare, Clock } from "lucide-react";

const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: Lock,
      title: "Atendimento 100% Sigiloso",
      description: "Sigilo profissional absoluto em todas as comunicações e estratégias jurídicas.",
    },
    {
      icon: Sword,
      title: "Defesa Combativa",
      description: "Postura firme e estratégica na defesa dos seus direitos em todas as instâncias.",
    },
    {
      icon: MessageSquare,
      title: "Explicações Claras",
      description: "Linguagem acessível para que você entenda cada etapa do processo jurídico.",
    },
    {
      icon: Clock,
      title: "Atendimento Emergencial 24h",
      description: "Disponibilidade total para situações urgentes que exigem ação imediata.",
    },
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
            Garantias Emocionais
          </span>
          <h2 className="heading-secondary">
            Seu Tranquilidade é Nossa Prioridade
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-light-graphite rounded-full p-8 mx-auto w-fit mb-6 border-2 border-gold/20 group-hover:border-gold/40 transition-colors shadow-gold">
                <guarantee.icon className="w-12 h-12 text-gold mx-auto" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {guarantee.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
