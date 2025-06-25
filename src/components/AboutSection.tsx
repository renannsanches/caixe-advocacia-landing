
import { Award, Users, Clock, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const AboutSection = () => {
  const achievements = [
    { icon: Award, label: "Anos de Experiência", value: 15, suffix: "+" },
    { icon: Users, label: "Casos Defendidos", value: 500, suffix: "+" },
    { icon: Clock, label: "Atendimento", value: 24, suffix: "h" },
    { icon: CheckCircle, label: "Taxa de Sucesso", value: 92, suffix: "%" }
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute inset-0 bg-gold rounded-2xl blur-2xl opacity-20 transform -rotate-3"></div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/a1b87e4a-7f0c-409a-9cb6-ed5e035dc47f.png"
                  alt="Dr. Vanderley Caixe Filho - Sobre o Advogado"
                  className="w-full h-96 object-cover rounded-2xl shadow-gold"
                />
                <div className="absolute top-6 left-6 bg-gold text-black px-4 py-2 rounded-lg font-semibold text-sm">
                  OAB/SP 123.456
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Content */}
          <div>
            <ScrollReveal delay={200}>
              <div className="mb-8">
                <span className="text-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Sobre o Advogado
                </span>
                <h2 className="heading-secondary">
                  Experiência em Defesa Técnica e Humanizada
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="space-y-6 text-elegant">
              <ScrollReveal delay={400}>
                <p className="text-lg">
                  Dr. Vanderley Caixe Filho é especialista em Direito Criminal com mais de 15 anos de experiência 
                  na defesa de casos complexos. Formado pela Universidade de São Paulo (USP) e pós-graduado em 
                  Ciências Criminais, atua com foco em resultados e atendimento humanizado.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <p>
                  Sua prática profissional é pautada pela ética, sigilo absoluto e defesa combativa dos direitos 
                  de seus clientes. Com atuação tanto presencial quanto remota, oferece consultoria especializada 
                  para familiares de réus em todo território nacional.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <div className="bg-light-graphite border-l-4 border-gold p-6 rounded-r-lg">
                  <p className="text-gold font-medium italic">
                    "Meu compromisso é transformar conhecimento jurídico em liberdade e justiça para quem precisa. 
                    Cada caso é único e merece uma estratégia personalizada."
                  </p>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {achievements.map((item, index) => (
                <ScrollReveal key={index} delay={1000 + index * 100}>
                  <div className="text-center">
                    <div className="bg-light-graphite rounded-lg p-4 mb-3 mx-auto w-fit border border-gold/20">
                      <item.icon className="w-6 h-6 text-gold mx-auto" />
                    </div>
                    <div className="text-2xl font-bold text-gold">
                      <AnimatedCounter 
                        end={item.value} 
                        suffix={item.suffix} 
                        duration={2000}
                      />
                    </div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
