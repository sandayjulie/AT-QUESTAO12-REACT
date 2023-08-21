import Carrosel from "../components/Carrosel";
import Projeto from "../components/Projeto";
import Footer from "../components/Footer";
import Solucao from "../components/Solucao";
import Cards from "../components/Cards";

function Home() {
  return (
    <div>
      <div className="menu">
        <Projeto />
        <Carrosel />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Solucao
        text="O HealTech é um dispositivo tecnológico móvel projetado para fornecer assistência médica e humanitária em áreas remotas e carentes, onde o acesso a serviços de saúde é limitado. Ele combina tecnologia de diagnóstico médico, comunicação e energia renovável para criar uma solução abrangente que pode salvar vidas e melhorar a qualidade de vida das comunidades em necessidade."
        imageUrl="https://www.atacadogames.com/imagem/smartwatch/relogio-smartwatch-redmi-watch-2-lite-m2109w1-bluetooth-gps-azul/2/118064.jpg?pfdrid_c=true"
      />
      <br />
      <br />
      <Cards/>
      <Footer />
    </div>
  );
}

export default Home;
