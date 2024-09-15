import { motion } from 'framer-motion';

export default function Main() {
  return (
    <>
      <section id="main" className='MainBG autoH'>
        <div className='maxWidth flex flex-col items-center justify-center gap-10 h-full w-full text-white'>
          
          {/* Animação para o título h1 */}
          <motion.h1
            className="text-center uppercase text-7xl font-Oswald"
            initial={{ opacity: 0, y: 50 }} // Começa invisível e deslocado para baixo
            animate={{ opacity: 1, y: 0 }} // Fica visível e se move para a posição original
            transition={{ duration: 1 }} // Duração da animação
          >
            Tradição . Tecnologia . Qualidade
          </motion.h1>

          {/* Animação para o subtítulo h2 */}
          <motion.h2
            className="text-center text-xl"
            initial={{ opacity: 0, y: 50 }} // Começa invisível e deslocado para baixo
            animate={{ opacity: 1, y: 0 }} // Fica visível e se move para a posição original
            transition={{ duration: 1, delay: 0.3 }} // Duração e um pequeno atraso
          >
            Profissionais altamente capacitados e mão de obra especializada em medição e colocação das peças.
          </motion.h2>

          {/* Animação para o botão */}
          <motion.button
            className="bg-OrangeP uppercase rounded py-2 px-4 font-medium"
            initial={{ opacity: 0, y: 50 }} // Começa invisível e deslocado para baixo
            animate={{ opacity: 1, y: 0 }} // Fica visível e se move para a posição original
            transition={{ duration: 1, delay: 0.6 }} // Duração e um pequeno atraso maior
          >
            Saiba mais
          </motion.button>

        </div>
      </section>
    </>
  );
}
