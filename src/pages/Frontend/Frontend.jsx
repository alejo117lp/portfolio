import React from "react";
import '../../pages/Frontend/Frontend.css';
import { Link } from "react-router-dom";
import img1 from "../../assets/img/web_fua_intranet.jpg";
import img2 from "../../assets/img/web_fua_asistencias.jpg";
import img3 from "../../assets/img/web_fua_contratos.png";

const Frontend = () => {
	return(
		<div className="principal-container">
      <section className="intro-section mt-4">
        <h2 className="featured">Aplicaciones Web</h2>
      </section>
      <section className="grid-projects-container">

        <Link className="gpc-item zoom" to={'/portal-empleados'}>
          <img src={img1} alt="Portal de Empleados" />
          <strong>Portal de Empleados</strong>
        </Link>

        <Link className="gpc-item zoom" to={'/asistencia-eventos'}>
          <img src={img2} alt="Asistencia a Eventos" />
          <strong>Asistencia a Eventos</strong>
        </Link>

        <Link className="gpc-item zoom" to={'/app-contrataciones'}>
          <img src={img3} alt="Gestión de Contrataciones" />
          <strong>Gestión de Contrataciones</strong>
        </Link>
        
      </section>
    </div>
	)
}

export default Frontend;