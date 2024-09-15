import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Project from "@/components/Projetc";
import Slider from "react-slick";

export default function ProjetoBanheiro() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

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
      <NavBar />
      <section id="projects" className='ContactBG py-20 autoH'>
        <div className='maxWidth'>
          <article className="flex  justify-center gap-4 lg:justify-start">
            <div className="border-r-4 border-OrangeP" />
            <h1 className="font-Oswald text-white font-bold uppercase text-5xl lg:text-left">Detalhes do Projeto</h1>
          </article>
          <p className="text-center mt-8 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusamus. Minus impedit quo maiores, perspiciatis reprehenderit est delectus ut sequi.</p>
        </div>
      </section>

      <section id="projects" className="py-20 autoH">
        <div className="max-w-[700px] mx-auto text-center maxWidth">
          <h1 className="mt-4 font-Oswald text-GrayP font-bold uppercase text-3xl text-center ">Marmoraria em SP, Zona Sul | Pedras Karina</h1>
          <p className="mt-4 text-center  text-GrayPP">Muitas pessoas elaboram uma decoração de ponta em suas residências, porém se esquecem do banheiro, local onde nos banhamos e retiramos todas as tensões do dia-a-dia. Como é um local que precisa ser lavado com frequência, fornecemos um ambiente com materiais resistentes à água e todo o apoio técnico necessário em recursos e revestimentos com tecnologia de mármore e granito, tornando a limpeza e a manutenção mais fácil possível e também assegura um local mais bonito e muito confortável, na construção de banheiros em mármore e banheiros em granito na Zona Sul SP.</p>
        </div>
        <div className="flex justify-center mt-8">
          <img src="/BanheiroProjeto.jpg" alt="" />
        </div>
      </section>

      {/* Section da Galeria */}
      <section id="projects" className="maxWidth">
        <article className="mx-auto text-center mt-10">
          <Slider {...settings}>
              <img src="/banheiro1.jpg" alt="Projeto 1" className="px-4" />
              <img src="/banheiro1.jpg" alt="Projeto 1" className="px-4" />
              <img src="/banheiro1.jpg" alt="Projeto 1" className="px-4" />
          </Slider>
        </article>
      </section>

      <Project />
      <Footer />



    </>
  );
}