import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Define como visível quando a seção é exibida
            observer.unobserve(entry.target); // Desativa o observador depois que a animação é disparada
          }
        });
      },
      { threshold: 0.3 } // A porcentagem da seção que precisa estar visível para ativar a animação
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} id="services" className='bg-GrayP ServiceBG py-20'>
        <div className='maxWidth flex flex-col justify-center lg:flex-row lg:items-center'>
          
          {/* Animação para o artigo de texto */}
          <motion.article
            className="flex flex-col lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Só anima se a seção estiver visível
            transition={{ duration: 0.8 }}
          >
            <p className="text-OrangeP text-center text-lg font-Oswald uppercase lg:text-left">Nossos serviços</p>
            <div className="border my-2 w-16 mx-auto border-OrangeP lg:mx-0" />
            <h1 className="text-white mt-4 font-Oswald text-3xl text-center lg:text-left ">
              Soluções em Mármores: Design e Durabilidade para Seu Projeto
            </h1>
            <h2 className="text-white mt-8 text-center lg:text-left">
              Oferecemos soluções completas em mármores e pedras naturais, unindo design sofisticado e durabilidade para transformar ambientes com elegância e funcionalidade. Nossos serviços são personalizados para atender às necessidades do seu projeto, garantindo qualidade em cada detalhe.
            </h2>
            <div className="mx-auto lg:mx-0">
              <motion.button
                className="bg-OrangeP text-white uppercase rounded py-2 px-4 mt-8 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Outros Serviços
              </motion.button>
            </div>
          </motion.article>

          {/* Animação para os cards */}
          <motion.article
            className="flex mt-20 flex-wrap gap-10 justify-center lg:w-1/2 lg:mt-0"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }}
          >
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className="bg-white max-w-[320px] py-12 rounded-lg"
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8 }}
              >
                <div className="px-4 mb-6">
                  <img src="marmore.png" alt="" />
                </div>
                <div className="border my-2 w-[90%] mx-auto border-OrangeP" />
                <h1 className="text-black font-Oswald font-bold text-xl uppercase px-4">Designer</h1>
                <h1 className="text-black font-Oswald font-bold text-xl uppercase px-4">Moderno</h1>
                <p className="text-GrayPP text-center mt-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, consequatur.
                </p>
              </motion.div>
            ))}
          </motion.article>
        </div>
      </section>
    </>
  );
}
