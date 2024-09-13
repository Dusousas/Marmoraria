import About from "@/components/About";
import Call from "@/components/Call";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Map from "@/components/Map";
import NavBar from "@/components/NavBar";
import Projetc from "@/components/Projetc";
import Services from "@/components/Services";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
