import React, { useState, useEffect } from "react";
import { Scale, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const MissionSection = () => {
  const quotes = [
    {
      text: "Enquanto a prática penitenciária abandona o ideal de ressocialização e assume as prisões como depósito, os tribunais, ignorando tal realidade, continuam usando o termo ressocialização para encarcerar.",
      author: "Luis Carlos Valois"
    },
    {
      text: "A lei penal é igual para todos, mas sua aplicação é seletiva.",
      author: "Juarez Cirino dos Santos"
    },
    {
      text: "As drogas que hoje são arbitrariamente consideradas substâncias proibidas ganharam esse status paulatinamente… ‘Trata‑se de constatar que não há bem jurídico a ser protegido. Há efetivamente uma ordem estatal política criminal de drogas.’",
      author: "Luis Carlos Valois - O Direito Penal da Guerra às Drogas"
    },
    {
      text: "O termo ressocialização serve não como expressão humanizadora, mas como justificativa para negar benefícios e punir.",
      author: "Luis Carlos Valois"
    },
    {
      text: "A prisão é uma instituição totalitária que destrói a personalidade humana e serve apenas para marcar e excluir.",
      author: "Luis Carlos Valois"
    },
    {
      text: "A função real da prisão não é ressocializar, mas estigmatizar e neutralizar os indesejáveis sociais.",
      author: "Luis Carlos Valois"
    },
    {
      text: "O Direito Penal é, antes de tudo, um sistema autorizado de violência.",
      author: "Amilton Bueno de Carvalho"
    },
    {
      text: "A proteção de bens jurídicos é a grande ilusão do Direito Penal moderno. Na verdade, ele protege interesses do Estado e da ordem estabelecida.",
      author: "Amilton Bueno de Carvalho"
    },
    {
      text: "O Estado neoliberal assume a forma de um centauro: cabeça liberal (para os mercados e os ricos) e corpo autoritário (para os pobres e os indesejáveis).",
      author: "Prisons of Poverty, 1999"
    },
    {
      text: "A penalização da pobreza é a continuação das políticas de precarização do trabalho por outros meios.",
      author: "Prisons of Poverty, 1999"
    },
    {
      text: "As prisões tornaram-se depósitos de pobres racializados — guetos murados onde se isola a miséria para que ela não incomode a cidade global.",
      author: "Loïc Wacquant"
    }
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsVisible(true);
      }, 500); // tempo do fade-out
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <section
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/jbg2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
                <div
                  className={`
                    transition-opacity duration-500 ease-in-out
                    ${isVisible ? "opacity-100" : "opacity-0"}
                    min-h-[12rem]
                  `}
                >
                  <p className="text-2xl text-gray-200 leading-relaxed font-light mb-4">
                    "{currentQuote.text}"
                  </p>
                  <div className="mt-4 flex items-center text-gold font-semibold">
                    <div className="w-16 h-px bg-gold mr-4"></div>
                    <span className="text-sm tracking-wider uppercase">
                      {currentQuote.author}
                    </span>
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

export default MissionSection;
