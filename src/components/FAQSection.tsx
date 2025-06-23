
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a defesa em caso de flagrante?",
      answer: "Em casos de prisão em flagrante, atuamos imediatamente para garantir os direitos do preso, verificamos a legalidade da prisão, buscamos medidas alternativas como liberdade provisória e acompanhamos todo o processo desde o início."
    },
    {
      question: "Preciso pagar antes da primeira análise?",
      answer: "A primeira consulta é gratuita e sem compromisso. Analisamos seu caso, explicamos as possibilidades jurídicas e só então apresentamos nossa proposta de honorários de forma transparente."
    },
    {
      question: "Você atende presencialmente?",
      answer: "Sim, atendemos tanto presencialmente em São Paulo quanto remotamente para todo o Brasil. O atendimento remoto é igualmente eficaz e permite maior agilidade em situações urgentes."
    },
    {
      question: "Qual é o prazo para resolução de um processo?",
      answer: "O prazo varia conforme a complexidade do caso e a fase processual. Medidas urgentes como habeas corpus podem ser resolvidas em dias, enquanto processos completos podem levar meses ou anos."
    },
    {
      question: "Como é garantido o sigilo do atendimento?",
      answer: "Seguimos rigorosamente o sigilo profissional previsto no Código de Ética da OAB. Todas as comunicações são protegidas e utilizamos canais seguros para troca de informações."
    },
    {
      question: "É possível acompanhar o andamento do processo?",
      answer: "Sim, mantemos nossos clientes sempre informados sobre cada etapa do processo através de relatórios periódicos, calls explicativas e acesso direto para esclarecimento de dúvidas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
            Perguntas Frequentes
          </span>
          <h2 className="heading-secondary">
            Esclarecemos Suas Dúvidas
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="card-elegant cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-gold" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gold" />
                    )}
                  </div>
                </div>
                
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gold/20">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
