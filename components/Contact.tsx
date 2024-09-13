import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Desativa o observador depois que a animação é disparada
                    }
                });
            },
            { threshold: 0.3 } // Ajuste o threshold conforme necessário
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
            <section ref={sectionRef} id="contact" className='ContactBG pt-20 py-10'>
                <div className='maxWidth flex flex-col lg:flex-row lg:gap-20 lg:justify-between'>

                    <motion.article 
                        className="lg:w-1/2 text-white mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center gap-4 lg:justify-start">
                            <div className="border-r-4 border-OrangeP" />
                            <h1 className="font-Oswald text-white text-center font-bold uppercase text-5xl lg:text-left">Preencha o formulário e dê o primeiro passo para um grande negócio!</h1>
                        </div>
                        <p className="text-center mt-8 lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusamus. Minus impedit quo maiores, perspiciatis reprehenderit est delectus ut sequi.</p>
                        <div className="mt-12 flex flex-col gap-y-4 gap-x-8 justify-center items-center lg:flex-row lg:flex-wrap lg:justify-start ">
                            {["Localização", "E-mail", "Telefone", "Instagram"].map((label, index) => (
                                <motion.article
                                    key={index}
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    <div className="bg-white w-[60px] flex items-center justify-center py-4  border-r-2 border-b-2 border-OrangeP inset-0">
                                        <img src="pin.png" alt={label} />
                                    </div>
                                    <div>
                                        <p>{label}</p>
                                        <h1 className="font-Oswald text-lg">Estrada do M'Boi Mirim, 1860</h1>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.article>

                    <motion.article 
                        className="bg-white py-8 px-8 w-[340px] lg:w-[450px]  mx-auto mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <form className="font-Releway flex flex-col gap-4" action="">
                            <h1 className="font-Oswald text-GrayS text-center font-bold uppercase text-xl lg:text-left">Entre em contato!</h1>

                            {["Nome Completo", "Telefone", "E-mail"].map((placeholder, index) => (
                                <div key={index} className="input-container">
                                    <div className="icon">
                                        <img className="w-[20px]" src="user.png" alt={placeholder} />
                                    </div>
                                    <input className="border-[1px] w-full outline-none py-3 px-4 border-OrangeP" type="text" placeholder={placeholder} />
                                </div>
                            ))}

                            <textarea className="border-[1px] w-full outline-none resize-none h-[120px] py-3 px-4 border-OrangeP" placeholder="Diga um pouco mais"></textarea>

                            <div className="flex justify-start">
                                <button className=" bg-OrangeP uppercase rounded py-2 px-4 text-white font-normal">Enviar</button>
                            </div>
                        </form>
                    </motion.article>

                </div>

                <motion.p 
                    className="text-white text-center mt-10 font-Oswald uppercase text-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Onde Estamos?
                </motion.p>
                <motion.div 
                    className="border my-2 w-16 mx-auto border-OrangeP"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                />
            </section>
        </>
    );
}
