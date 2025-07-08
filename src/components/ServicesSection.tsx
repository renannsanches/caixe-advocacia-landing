
import { Shield, Lock, FileText, Users, Search, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Defesa em Crimes Patrimoniais",
      description: "Estratégia especializada para furto, roubo, estelionato e crimes contra o patrimônio.",
    },
    {
      icon: Lock,
      title: "Prisão em Flagrante",
      description: "Atendimento emergencial 24h para casos de prisão em flagrante e medidas urgentes.",
    },
    {
      icon: FileText,
      title: "Habeas Corpus",
      description: "Elaboração e acompanhamento de habeas corpus preventivo e liberatório.",
    },
    {
      icon: Users,
      title: "Preservação da Imagem",
      description: "Preservação absoluta da imagem do cliente, evitando danos à reputação.",
    },
    {
      icon: Search,
      title: "Inquérito Policial",
      description: "Acompanhamento desde a fase investigativa até o encerramento do inquérito.",
    },
    {
      icon: MessageCircle,
      title: "Consultoria para Familiares",
      description: "Orientação jurídica para familiares sobre direitos e procedimentos legais.",
    },
  ];

  return (
    <section className="py-20 bg-light-graphite/10">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-color:#1f1f1f font-semibold text-sm tracking-wider uppercase mb-4 block">
              Áreas de Atuação
            </span>
            <h2 className="heading-secondary">
              Defesa Criminal Especializada
            </h2>
            <p className="text-xl text-color:#1f1f1f max-w-3xl mx-auto">
              Atuação estratégica em todas as fases do processo criminal, com foco em 
              crimes patrimoniais e defesa dos direitos fundamentais.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={200 + index * 100}>
              <div className="card-elegant hover-scale group cursor-pointer">
                <div className="bg-gold/10 rounded-lg p-4 w-fit mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      <ScrollReveal delay={800}>
  <div className="text-center mt-12">
    <a
      href="https://wa.me/5516996481094?text=Olá,%20gostaria%20de%20consultar%20meu%20caso."
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary inline-block"
    >
      Consulte Seu Caso
    </a>
  </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
