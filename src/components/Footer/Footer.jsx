import React from "react";
import '../footer/Footer.css';

const Footer = () => {
  return(
    <footer>
      <h3>Contáctame:</h3>
      <div className="contact-box">
        <div className="footer-item">
          <i class="fa-brands fa-whatsapp"></i>
          <a href="https://wa.me/573222135827" target="_blank" rel="noreferrer">Whatsapp: (+57) 3222135827</a>
        </div>
        <div className="footer-item">
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:alejo197lp@gmail.com" target="_blank" rel="noreferrer">Email: alejo197lp@gmail.com</a>
        </div>
        <div className="footer-item">
          <i class="fa-brands fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/alejolopezp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">Linkedin: alejolopezp</a>
        </div>
      </div>
      <p>&copy;Creado por Alejandro López Pérez. Todos los derechos reservados.</p>
    </footer>
  )
};

export default Footer;