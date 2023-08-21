import React from "react";
import "./Footer.css";
import img from '../IMG/logofot.png'

function Footer() {
  return (
    <div>
      <br />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section container">
            <div className="justify-center">
              <h5 className="logo">
                <img src={img} width={250}
                height={250}/> 
                </h5>
            </div>

          </div>
          <div className="footer-section">
            <h3 className="titfot">Nossas páginas:</h3>
            <ul>
              <li>
                <a href="/" className="link2">Página Inicial</a>
              </li>
              <li>
                <a href="/sobre" className="link2">Sobre Nós</a>
              </li>
              <li>
                <a href="/contato" className="link2">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="titfot">Informações:</h3>
            <ul>
            <li>
                <a href="https://twitter.com" className="link2">Twitter</a>
              </li>

              <li>
                <a href="https://facebook.com" className="link2">Facebook</a>
              </li>
    
              <li>
                <a href="https://instagram.com" className="link2">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} HealTech - Mãos que Ajudam. Todos os direitos
            reservados.
          </p>
        </div>
    </div>
  );
}

export default Footer;
