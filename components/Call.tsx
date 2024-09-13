export default function Call() {
    return (
        <>
            <section id="contact" className='bg-OrangeP py-20'>
                <div className='maxWidth text-center lg:flex lg:items-center lg:justify-center lg:gap-80'>
                    <article>
                        <h1 className="text-white text-5xl uppercase font-Oswald font-medium">Tem um projeto?</h1>
                        <h1 className="text-white text-5xl uppercase font-Oswald font-medium">Vamos conversar</h1>
                    </article>

                    <article className="lg:flex lg:gap-6">
                        <div className="mx-auto lg:mx-0">
                            <button className="bg-white text-OrangeP uppercase  w-[203px] h-[72px] mt-8 font-medium lg:mt-0">Orçamento Grátis</button>
                        </div>
                        <div className="mx-auto lg:mx-0">
                            <button className="border-[1px] text-white uppercase  w-[203px] h-[72px] mt-4 font-medium lg:mt-0">(11) 1111 1111</button>
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}