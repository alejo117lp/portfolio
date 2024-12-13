import React from "react";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h4>Contáctame:</h4>
        <div className="contact-box">
          
          <div className="footer-item">
            <a
              href="https://wa.me/573222135827"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="footer-item">
            <a
              href="mailto:alejo197lp@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <div className="footer-item">
            <a
              href="https://www.linkedin.com/in/alejolopezp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <p className="credits">
          &copy;Creado por Alejandro López Pérez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
