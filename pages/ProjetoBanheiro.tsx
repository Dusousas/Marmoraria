import { useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Project from "@/components/Projetc";
import Whatsapp from "@/components/subcomponents/Whatsapp";

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: "/banheiro1.jpg", alt: "Banheiro em mármore 1" },
  { src: "/banheiro2.jpg", alt: "Banheiro em mármore 2" },
  { src: "/banheiro1.jpg", alt: "Banheiro em mármore 3" },
  { src: "/banheiro2.jpg", alt: "Banheiro em mármore 4" },
  { src: "/banheiro1.jpg", alt: "Banheiro em mármore 5" },
  { src: "/banheiro2.jpg", alt: "Banheiro em mármore 6" },
];

export default function ProjetoBanheiro() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <NavBar />

      <section className="autoH">
        <article id="projects" className="ContactBG py-20">
          <div className="maxWidth">
            <article className="flex justify-center gap-4 lg:justify-start">
              <div className="border-r-4 border-OrangeP" />
              <h1 className="font-Oswald text-white font-bold uppercase text-5xl lg:text-left">
                Detalhes do Projeto
              </h1>
            </article>
            <p className="text-center mt-8 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, accusamus. Minus impedit quo maiores, perspiciatis
              reprehenderit est delectus ut sequi.
            </p>
          </div>
        </article>

        <article id="projects" className="py-20">
          <div className="max-w-[700px] mx-auto text-center maxWidth">
            <h1 className="mt-4 font-Oswald text-GrayP font-bold uppercase text-3xl text-center">
              Marmoraria em SP, Zona Sul | Pedras Karina
            </h1>
            <p className="mt-4 text-center text-GrayPP">
              Muitas pessoas elaboram uma decoração de ponta em suas residências,
              porém se esquecem do banheiro, local onde nos banhamos e retiramos
              todas as tensões do dia-a-dia. Como é um local que precisa ser
              lavado com frequência, fornecemos um ambiente com materiais
              resistentes à água e todo o apoio técnico necessário em recursos e
              revestimentos com tecnologia de mármore e granito, tornando a
              limpeza e a manutenção mais fácil possível e também assegura um
              local mais bonito e muito confortável, na construção de banheiros em
              mármore e banheiros em granito na Zona Sul SP.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <img src="/BanheiroProjeto.jpg" alt="Projeto do banheiro" />
          </div>
        </article>

        {/* GALERIA */}
        <article className="AboutBG py-10 ">
          <div className="maxWidth flex flex-col items-center justify-center gap-4 lg:flex-row lg:flex-wrap">
            {images.map((image, index) => (
              <div key={index} onClick={() => openImage(image.src)}>
                <img
                  className="h-[400px] w-[400px] object-cover cursor-pointer"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </article>

        {/* MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeImage}
          >
            <img
              className="max-w-full max-h-full"
              src={selectedImage}
              alt="Imagem ampliada"
            />
          </div>
        )}


      </section>
      <Project />
      <Footer />
      <Whatsapp />

    </>
  );
}
