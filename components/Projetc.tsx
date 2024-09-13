import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Project() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <>
            <section id="projects" className='ProjectBG py-20'>
                <div className='maxWidth'>

                    <article className="flex justify-center gap-4 lg:justify-start">
                        <div className="border-r-4 border-OrangeP" />
                        <h1 className="font-Oswald text-GrayP font-bold uppercase text-5xl lg:text-left">Projetos Realizados</h1>
                    </article>
                    <p className="mt-4 text-center lg:text-left text-GrayPP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia nemo delectus deleniti illum laborum corporis, minima corrupti accusamus aspernatur.</p>

                    {/* CAROUSEL */}
                    <article className="mt-12 outline-none">
                        <Slider {...settings}>
                            <div className="px-2">
                                <a href="">
                                    <span className="bg-OrangeP block w-full text-center py-2 font-Oswald uppercase text-white">Banheiros</span>
                                    <img src="Projeto1.jpg" alt="Projeto 1" className="" />
                                </a>
                            </div>

                            <div className="px-2">
                                <a href="">
                                    <span className="bg-OrangeP block w-full text-center py-2 font-Oswald uppercase text-white">Cozinhas</span>
                                    <img src="Projeto1.jpg" alt="Projeto 1" className="" />
                                </a>
                            </div>

                            <div className="px-2">
                                <a href="">
                                    <span className="bg-OrangeP block text-center w-full py-2 font-Oswald uppercase text-white">Externos</span>
                                    <img src="Projeto1.jpg" alt="Projeto 1" className="" />
                                </a>
                            </div>

                        </Slider>
                    </article>

                    <div className="flex justify-center">
                        <button className=" bg-OrangeP uppercase rounded text-white py-4 px-4 mt-8 font-medium">Faça um orçamento</button>
                    </div>
                </div>
            </section>
        </>
    );
}
