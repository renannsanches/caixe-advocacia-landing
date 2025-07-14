import { Award, Users, Clock, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/jbg.webp')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
                  OAB/SP 230.888
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Content */}
          <div>
            <ScrollReveal delay={200}>
              <div className="mb-8">
                <span className="text-[#1f1f1f] font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Sobre o Advogado
                </span>
                <h2 className="heading-secondary">
                  Experiência em Defesa Técnica e Humanizada
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="space-y-6 text-elegant">
              <ScrollReveal delay={400}>
                <p className="text-[13px] sm:text-[14px] font-medium text-[#1f1f1f]">
                  Vanderley Caixe Filho é Formado pela Pontifícia Universidade Católica de São Paulo (PUC-SP).
                  Especialista em Direitos Humanos pela Universidade Federal de Goiás (UFG). Presidente da Comissão de Direitos Humanos da OAB- RP por duas vezes.
                  Membro da Comissão de Direitos Humanos da OAB – SP por 2 (dois) anos. Advogado da Pastoral Carcerária de Ribeirão Preto por 10 (dez) anos.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <div className="bg-light-graphite border-l-4 border-gold p-6 rounded-r-lg">
                  <p className="text-white text-[13px] sm:text-[14px] italic">
                    "O direito penal não é para qualquer um. Advogado criminal não pode ser qualquer um. Pois, hoje, nessa estrutura, o Advogado criminal é o defensor do um contra todos.
                    Quando há a notícia de um crime na sociedade, contra essa pessoa, existe toda uma estrutura policial. Há uma estrutura que necessita buscar culpados. 
                    Contra esse cara se tem toda a estrutura do Ministério Público; toda estrutura do Poder Judiciário, porque a maioria dos juízes se considera parte integrante do aparato de segurança do estado. Não são garantidores do direito.
                    Contra esse cara eu tenho toda a mídia. 
                    Contra esse cara há toda a sociedade. Para defender eu tenho um. Só um, o Advogado. Sofrendo preconceito porque ousa defender o um contra todos. E, mais terrível ainda, começa sofrer preconceito entre os próprios advogados. Ou seja, não é para qualquer um. 
                    A grande maioria de nós não suportaria essa carga da advocacia criminal."<br /><br />
                    <strong>Amilton Bueno de Carvalho</strong>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Achievements Grid foi removido completamente */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
