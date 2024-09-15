import Contact from "@/components/Contact";
import Decorativo from "@/components/Decorativo";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import NavBar from "@/components/NavBar";

export default function pedras() {
  return (
    <>
      <NavBar />

      <section className='AboutBG autoH py-20'>
        <div className='maxWidth'>

          <article className="flex justify-center gap-4">
            <h1 className="font-Oswald text-GrayP font-bold uppercase text-5xl lg:text-left">Pedras Decorativas</h1>
            <div className="border-r-4 border-OrangeP" />
          </article>
          <h2 className="mt-8 text-center text-GrayP font-bold text-xl">Mármores e Granitos Nacionais e Importados</h2>
          <p className="mt-2 text-center  text-GrayPP ">Catálogo de pedras decorativas. Mármore e granito nacionais e importados. Serviço de medição, colocação e restauração de peças e pisos.</p>
        </div>
      </section>
      <Decorativo />

  
        <Contact />
        <Map />
        <Footer />
     
    </>
  );
}