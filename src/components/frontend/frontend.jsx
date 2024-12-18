import React from "react";
import ProjectCard from "../project_card/ProjectCard";
import img1 from "../../img/web_fua_intranet.jpg";
import img2 from "../../img/web_fua_asistencias.jpg";
import img3 from "../../img/web_fua_contratos.png";

const Frontend = () => {
	return(
		<div className="principal-container">
      <section className="intro-section mt-4">
        <h1 className="featured">Aplicaciones Web</h1>
      </section>
      <section className="games-cards-section">
        <ProjectCard 
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
        />
      </section>
    </div>
	)
}

export default Frontend;