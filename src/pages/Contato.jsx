import Projeto from "../components/Projeto";
import Info from "../components/Info";
import Footer from "../components/Footer";

function Contato() {
  return (
    <div>
      <div>
        <Projeto />
      </div>
      <br />
      <h1 className="contato">Contato</h1>
      <br/>
      <h3 className="sob">Converse conosco!</h3>
      <br />
      <Info />
      <br />
      <Footer />
    </div>
  );
}

export default Contato;
