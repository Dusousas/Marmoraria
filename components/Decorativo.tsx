export default function Decorativo() {
  // Array contendo as informações das pedras
  const pedras = [
    { nome: "Granito Gold Kan", imagem: "pedras/Pedra1.jpg" },
    { nome: "A Nebrasca", imagem: "pedras/Pedra2.jpg" },
    { nome: "Canyon Sunset", imagem: "pedras/Pedra3.jpg" },
    { nome: "Cooper Gold", imagem: "pedras/Pedra4.jpg" },
    { nome: "A Taboo", imagem: "pedras/Pedra5.jpg" },
    { nome: "Branco Portinari", imagem: "pedras/Pedra6.jpg" },
    { nome: "Verde Candeais A", imagem: "pedras/Pedras7.jpg" },
    { nome: "Branco Pracema A", imagem: "pedras/Pedras8.jpg" },

    { nome: "Sta Cecilia Gold", imagem: "pedras/9.jpg" },
    { nome: "Verde Pavão", imagem: "pedras/10.jpg" },
    { nome: "Verde Amazonas", imagem: "pedras/11.jpg" },
    { nome: "Verde Pérola", imagem: "pedras/12.jpg" },

    { nome: "Branco Itaunas", imagem: "pedras/13.jpg" },
    { nome: "Amarelo Palmeiras", imagem: "pedras/14.jpg" },
    { nome: "Kinawa", imagem: "pedras/15.jpg" },
    { nome: "Scupira Brow", imagem: "pedras/16.jpg" },

    { nome: "Branco Romano", imagem: "pedras/17.jpg" },
    { nome: "Amarelo Humaita", imagem: "pedras/18.jpg" },
    { nome: "Verde Marinance", imagem: "pedras/19.jpg" },
    { nome: "Marron Marinance", imagem: "pedras/20.jpg" },

    { nome: "Travertino Navona Extra", imagem: "pedras/21.jpg" },
    { nome: "Choco Rosa", imagem: "pedras/22.jpg" },
    { nome: "Azul imperial", imagem: "pedras/23.jpg" },
    { nome: "Onix Orange", imagem: "pedras/24.jpg" },

    { nome: "Azul Alabastro", imagem: "pedras/25.jpg" },
    { nome: "Brow Portoto", imagem: "pedras/26.jpg" },
    { nome: "Onix Esmeralda", imagem: "pedras/27.jpg" },
    { nome: "Onix Onix Green", imagem: "pedras/28.jpg" },

    { nome: "Onix Sunny", imagem: "pedras/29.jpg" },
    { nome: "Port Laurent", imagem: "pedras/30.jpg" },
    { nome: "Rosso Alicante", imagem: "pedras/31.jpg" },
    { nome: "Crema Marfil Stampa", imagem: "pedras/32.jpg" },

    { nome: "Verde ramaggiato", imagem: "pedras/33.jpg" },
    { nome: "Rosso Daniel", imagem: "pedras/34.jpg" },
    { nome: "Rouge Duroi", imagem: "pedras/35.jpg" },
    { nome: "Calcata Oro", imagem: "pedras/36.jpg" },

    { nome: "Arabescato", imagem: "pedras/37.jpg" },
    { nome: "Carrara Gioa", imagem: "pedras/38.jpg" },
    { nome: "Carrara Venatino", imagem: "pedras/39.jpg" },
    { nome: "Carrara C", imagem: "pedras/40.jpg" },

    { nome: "Travertino Romano Polido", imagem: "pedras/41.jpg" },
    { nome: "Travertino Bruno Romano", imagem: "pedras/42.jpg" },
    { nome: "Boticcino", imagem: "pedras/43.jpg" },
    { nome: "Rosso Verona", imagem: "pedras/44.jpg" },

    { nome: "Preto São Gabriel", imagem: "pedras/45.jpg" },
    { nome: "Giallo truquese (Alabastro)", imagem: "pedras/46.jpg" },
    { nome: "Ônix Branco", imagem: "pedras/47.jpg" },
  ];

  return (
    <section id="" className="autoH py-20">
      <div className="maxWidth flex justify-center gap-4 flex-wrap">
        {pedras.map((pedra, index) => (
          <div key={index} className="max-w-[300px]">
            <img
              className="block object-cover"
              src={pedra.imagem}
              alt={`Imagem de ${pedra.nome}`}
            />
            <h1 className="text-center bg-GrayPP text-white font-Oswald uppercase">
              {pedra.nome}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
