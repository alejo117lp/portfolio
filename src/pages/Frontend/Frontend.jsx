import React from "react";
import '../../pages/Frontend/Frontend.css';
import { Link } from "react-router-dom";
import img1 from "../../img/web_fua_intranet.jpg";
import img2 from "../../img/web_fua_asistencias.jpg";
import img3 from "../../img/web_fua_contratos.png";

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

        <Link className="gpc-item zoom" to={'/robot-z'}>
          <img src={img2} alt="Asistencia a Eventos" />
          <strong>Asistencia a Eventos</strong>
        </Link>

        <Link className="gpc-item zoom" to={'/robot-z'}>
          <img src={img3} alt="Gestión de Contrataciones" />
          <strong>Gestión de Contrataciones</strong>
        </Link>


        {/* <ProjectCard 
          title="Portal de Empleados"
          src={img1}
          alt="Portal empleados"
          description={
            <p>
              Aplicación Web con conexión al ERP y desarrollada en <span className="highlight">React</span> para reemplazar la antigua intranet de la empresa. Allí
              los empleados pueden gestionar su información personal, consultar colillas de pago, firmar documentos digitales, gestionar 
              sus turnos de trabajo, vacaciones entre otros.
            </p>
          }
        />

        <ProjectCard 
          title="Registro de Asistencias"
          src={img2}
          alt="Portal empleados"
          description={
            <p>
              Aplicación web desarrollada en <span className="highlight">Django</span> que facilita la gestión de eventos mediante dos funcionalidades principales. 
              La primera está dirigida a los organizadores, permitiéndoles <span className="highlight">generar códigos QR</span> y enlaces personalizados para el registro 
              y la toma de asistencia de los participantes, con almacenamiento automático de los datos en el sistema <span className="highlight">Odoo.</span> 
              La segunda funcionalidad está orientada a los asistentes, quienes pueden registrar su asistencia de manera sencilla a través del escaneo del QR, 
              ingresando su número de cédula en el sitio donde es dirigido.
              Esta solución optimiza el proceso de control de asistencia y asegura una <span className="highlight">integración eficiente con herramientas de gestión empresarial.</span>
            </p>
          }
        />

        <ProjectCard 
          title="Gestor de Contrataciones"
          src={img3}
          alt="Gestor de Contrataciones"
          description={
            <p>
              Aplicación Web desarrollada en <span className="highlight">React</span> para optimizar la 
              <span className="highlight"> gestión de contrataciones masivas</span>, integrando procesos de 
              <span className="highlight"> gestión de proyectos</span>, <span className="highlight">gestión humana</span> y 
              <span className="highlight"> SST</span>.  
              Permite a los <span className="highlight">candidatos</span> cargar información, dar <span className="highlight">seguimiento</span> y recibir 
              <span className="highlight"> feedback en tiempo real</span>, mientras que los <span className="highlight">contratantes</span> gestionan proyectos, 
              revisan documentos y sincronizan empleados con el ERP <span className="highlight">Odoo</span>.
            </p>
          } 
        /> */}
      </section>
    </div>
	)
}

export default Frontend;