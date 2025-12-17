import React from "react";
import '../../pages/Frontend/Frontend.css';
import { Link } from "react-router-dom";
import { RevealSection, RevealCard } from "../../hooks/useScrollReveal";
import img1 from "../../assets/img/web_fua_intranet.jpg";
import img2 from "../../assets/img/web_fua_asistencias.jpg";
import img3 from "../../assets/img/web_fua_contratos.png";

const Frontend = () => {
	return(
		<div className="principal-container">
      <RevealSection className="intro-section mt-4" once={true}>
        <h2 className="featured">Aplicaciones Web</h2>
      </RevealSection>
      <section className="grid-projects-container">
        <RevealCard delay={0}>
          <Link className="gpc-item zoom" to={'/portal-empleados'}>
            <img src={img1} alt="Portal de Empleados" />
            <strong>Portal de Empleados</strong>
          </Link>
        </RevealCard>

        <RevealCard delay={150}>
          <Link className="gpc-item zoom" to={'/asistencia-eventos'}>
            <img src={img2} alt="Asistencia a Eventos" />
            <strong>Asistencia a Eventos</strong>
          </Link>
        </RevealCard>

        <RevealCard delay={300}>
          <Link className="gpc-item zoom" to={'/app-contrataciones'}>
            <img src={img3} alt="Gestión de Contrataciones" />
            <strong>Gestión de Contrataciones</strong>
          </Link>
        </RevealCard>
      </section>
    </div>
	)
}

export default Frontend;