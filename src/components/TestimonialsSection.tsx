
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      rating: 5,
      text: "Dr. Vanderley foi fundamental na defesa do meu filho. Sua competência e dedicação fizeram toda a diferença no resultado do processo. Recomendo sem hesitar.",
      case: "Defesa em Tribunal do Júri"
    },
    {
      name: "João Silva",
      rating: 5,
      text: "Atendimento excepcional, explicações claras e resultado positivo. O doutor sempre esteve disponível para esclarecer nossas dúvidas durante todo o processo.",
      case: "Habeas Corpus"
    },
    {
      name: "Ana Costa",
      rating: 5,
      text: "Profissional competente e humano. Nos acolheu em um momento muito difícil e conseguiu a liberdade do meu marido. Gratidão eterna!",
      case: "Prisão em Flagrante"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-gold fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-light-graphite/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="heading-secondary">
            O Que Dizem Nossos Clientes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-elegant hover-scale"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gold/20 pt-4">
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-gold text-sm">{testimonial.case}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-light-graphite rounded-lg px-6 py-3 border border-gold/20">
            <div className="flex items-center mr-4">
              {renderStars(5)}
            </div>
            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-gray-400 ml-2">(127 avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
