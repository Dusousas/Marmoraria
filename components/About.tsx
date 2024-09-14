import { motion } from "framer-motion";

export default function About() {
    return (
        <>
            <section id="about" className='AboutBG py-20'>
                <div className='maxWidth flex flex-col gap-x-6 lg:flex-row lg:items-start'>

                    <article className="relative lg:w-1/2">
                        <div className="relative w-fit mx-auto">
                            <img src="about1.png" alt="Imagem" className="w-full h-auto" />
                            <motion.div
                                className="bg-white px-4 py-8 text-center bottom-[-20px] right-[0px] rounded-xl absolute max-w-[130px] lg:bottom-[-20px] lg:right-[-20px]"
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity, 
                                    ease: "easeInOut", 
                                }}
                            >
                                <h1 className="text-OrangeP font-black font-Oswald text-5xl">25+</h1>
                                <h1 className="text-GrayS font-Oswald uppercase font-black text-lg">
                                    Anos de experiência
                                </h1>
                            </motion.div>
                        </div>
                    </article>

                    <article className=" pt-20 flex flex-col justify-center items-center lg:w-1/2 lg:pt-0 lg:justify-start lg:items-start">
                        <p className="text-OrangeP text-center text-lg font-Oswald uppercase">Sobre nós</p>
                        <div className="border my-2 w-16 mx-auto border-OrangeP lg:mx-0" />
                        <h1 className="mt-4 font-Oswald text-GrayP font-bold uppercase text-3xl text-center lg:text-left">Marmoraria em SP, Zona Sul | Pedras Karina</h1>
                        <h2 className="mt-8 text-center text-GrayP font-bold text-xl lg:text-left">GRUPO MARMORARIA KARINA: TRADIÇÃO, TECNOLOGIA E QUALIDADE QUE FAZEM A DIFERENÇA NO SEU PROJETO</h2>
                        <p className="mt-4 text-center lg:text-left text-GrayPP ">A Karina Marmoraria fundada em 1994 vem se destacando no segmento de fornecimento e produção de peças em mármores e granitos nacionais e importados (mármore travertino e mármore branco materiais como: silestone (quartzo), onix, alabrastro entre outros, devido à alta qualidade do material e da elegância no design de cada uma de suas peças).</p>

                        <div className="mt-8 flex flex-col items-center gap-y-4 gap-x-8 lg:flex-row ">
                            <article className="max-w-[320px] border-[1px] rounded-lg border-OrangeP bg-white py-5 px-5 gap-4  flex justify-center items-center">
                                {/* MEGAFONE EFEITO 360 */}
                                <motion.div
                                    className=""
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                >
                                    <img src="megaphone.png" alt="Megafone" />
                                </motion.div>
                                <div className="border-r-[1px] h-[80px] border-OrangeP"></div>
                                <div>
                                    <h1 className="uppercase text-GrayP font-Oswald text-lg">Elegância, Durabilidade, Qualidade e Estilo.</h1>
                                </div>
                            </article>
                            <article>
                                <h1 className="text-GrayP font-semibold">Raihawly Williamson</h1>
                                <p className="text-GrayPP">CEO, digitex Inc.</p>
                                <div>
                                    <img src="sing.webp" alt="" />
                                </div>
                            </article>
                        </div>

                        <div className="mt-8 flex flex-col gap-y-3">
                            <article className="flex items-center gap-x-2 ">
                                <div>
                                    <img src="verifica.png" alt="" />
                                </div>
                                <h1 className="text-GrayP font-Oswald font-medium">100% de Clientes Satisfeitos</h1>
                            </article>

                            <article className="flex items-center gap-x-2 ">
                                <div>
                                    <img src="verifica.png" alt="" />
                                </div>
                                <h1 className="text-GrayP font-Oswald font-medium">100% de Clientes Satisfeitos</h1>
                            </article>

                            <article className="flex items-center gap-x-2 ">
                                <div>
                                    <img src="verifica.png" alt="" />
                                </div>
                                <h1 className="text-GrayP font-Oswald font-medium">100% de Clientes Satisfeitos</h1>
                            </article>

                            <article className="flex items-center gap-x-2 ">
                                <div>
                                    <img src="verifica.png" alt="" />
                                </div>
                                <h1 className="text-GrayP font-Oswald font-medium">100% de Clientes Satisfeitos</h1>
                            </article>
                        </div>

                        <div className="mx-auto lg:mx-0">
                            <button className="bg-OrangeP uppercase rounded text-white py-2 px-4 mt-8 font-medium">Fale conosco</button>
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}
