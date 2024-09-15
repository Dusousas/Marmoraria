import About from "@/components/About";
import Call from "@/components/Call";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Map from "@/components/Map";
import NavBar from "@/components/NavBar";
import Projetc from "@/components/Projetc";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <Services />
      <About />
      <Projetc />
      <Contact />
      <Map />
      <Call />
      <Footer />
    </>
  );
}
