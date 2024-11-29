import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

export default function Project() {
    const sliderRef = useRef<Slider | null>(null);

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

    const projects = [
        {
            title: "Banheiros",
            link: "/ProjetoBanheiro",
            image: "/Projeto1.jpg",
        },
        {
            title: "Cozinhas",
            link: "/ProjetoCozinhas",
            image: "/Projeto1.jpg",
        },
        {
            title: "Churrasqueiras",
            link: "/ProjetoChurrasqueiras",
            image: "/Projeto1.jpg",
        },
        {
            title: "Escadas",
            link: "/ProjetoEscadas",
            image: "/Projeto1.jpg",
        },
        {
            title: "Escritórios",
            link: "/ProjetoEscritorios",
            image: "/Projeto1.jpg",
        },
        {
            title: "Hall",
            link: "/ProjetoEscritorios",
            image: "/Projeto1.jpg",
        },
        {
            title: "Lareiras",
            link: "/ProjetoEscritorios",
            image: "/Projeto1.jpg",
        },
        {
            title: "Lavatórios",
            link: "/ProjetoEscritorios",
            image: "/Projeto1.jpg",
        },
        {
            title: "Luminárias",
            link: "/ProjetoEscritorios",
            image: "/Projeto1.jpg",
        },
        {
            title: "Pisos",
            link: "/ProjetoEscritorios",
            image: "/Projeto1.jpg",
        },
        {
            title: "Piscinas",
            link: "/ProjetoEscritorios",
            image: "/Projeto1.jpg",
        },
        {
            title: "Salas",
            link: "/ProjetoEscritorios",
            image: "/Projeto1.jpg",
        },

    ];

    return (
        <section id="projects" className="ProjectBG py-20 autoH">
            <div className="maxWidth">
                <article className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-end">
                    <article className="flex flex-col justify-center gap-4 lg:justify-start">
                        <div className="flex justify-center gap-4 lg:justify-start">
                            <div className="border-r-4 border-OrangeP" />
                            <h1 className="font-Oswald text-GrayP font-bold uppercase text-5xl lg:text-left">
                                Projetos Realizados
                            </h1>
                        </div>
                        <div>
                            <p className="mt-4 text-center lg:text-left text-GrayPP">
                                Projetos em Mármore com Exportação Própria: Unindo o Melhor de Produtos Nacionais e Internacionais.
                            </p>
                        </div>
                    </article>

                    {/* SETAS */}
                    <article className="flex gap-4 mt-8 items-center">
                        <img
                            className="cursor-pointer w-[42px] h-[42px]"
                            src="/setaL.png"
                            alt="Seta Esquerda"
                            onClick={() => sliderRef.current?.slickPrev()}
                        />
                        <img
                            className="cursor-pointer w-[42px] h-[42px]"
                            src="/setaR.png"
                            alt="Seta Direita"
                            onClick={() => sliderRef.current?.slickNext()}
                        />
                    </article>
                </article>

                {/* CAROUSEL DINÂMICO */}
                <article className="mt-12 mx-auto">
                    <Slider ref={sliderRef} {...settings}>
                        {projects.map((project, index) => (
                            <div key={index} className="px-2">
                                <a href={project.link}>
                                    <span className="bg-OrangeP block  text-center py-2 font-Oswald uppercase text-white">
                                        {project.title}
                                    </span>
                                    <img src={project.image} alt={project.title} className="" />
                                </a>
                            </div>
                        ))}
                    </Slider>
                </article>

                <div className="flex justify-center">
                    <button className="bg-OrangeP uppercase rounded text-white py-4 px-4 mt-8 font-medium">
                        Faça um orçamento
                    </button>
                </div>
            </div>
        </section>
    );
}
