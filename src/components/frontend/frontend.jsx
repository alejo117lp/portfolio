import React from "react";
import ProjectCard from "../project_card/ProjectCard";
import img1 from "../../img/Prueba1.jpg";

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
          description="Aplicación Web con conexión al ERP y desarrollada en React para reemplazar la antigua intranet de la empresa. Allí
          los empleados pueden gestionar su información personal, consultar colillas de pago, firmar documentos digitales, gestionar 
          sus turnos de trabajo, vacaciones entre otros."
        />

        <ProjectCard 
          title="Registro de Asistencias"
          src={img1}
          alt="Portal empleados"
          description={
            <p>
              Aplicación web desarrollada en Django que facilita la gestión de eventos mediante dos funcionalidades principales. 
              La primera está dirigida a los organizadores, permitiéndoles generar códigos QR y enlaces personalizados para el registro 
              y la toma de asistencia de los participantes, con almacenamiento automático de los datos en el sistema Odoo. 
              La segunda funcionalidad está orientada a los asistentes, quienes pueden registrar su asistencia de manera sencilla a través del escaneo del QR, 
              ingresando su número de cédula en el sitio donde es dirigido.
              Esta solución optimiza el proceso de control de asistencia y asegura una integración eficiente con herramientas de gestión empresarial.
            </p>
          }
        />

        <ProjectCard 
          title="Gestor de Contrataciones"
          src={img1}
          alt="Gestor de Contrataciones"
          description={
            <p>
              Aplicación Web desarrollada en React como solución a...
            </p>
          } 
        />
      </section>
    </div>
	)
}

export default Frontend;