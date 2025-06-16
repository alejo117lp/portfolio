import React from "react";
import '../../pages/PortalEmpleados/PortalEmpleados.css';
import FrontendDetails from "../../components/FrontendDetails/FrontendDetails";
import img1 from "../../assets/img/web_fua_intranet.jpg";
import img2 from "../../assets/img/Hamony_1.png";

const PortalEmpleados = () => {
  return (
    <div className="principal-container">
      <FrontendDetails
        title="Portal de Empleados"
        description={
          <>
            Se desarrolló un portal web integral diseñado para optimizar la comunicación y la gestión de información interna de la <strong>Fundación Universidad de Antioquia</strong>.<br />
            Esta solución incluyó funcionalidades como un formulario para la actualización de datos generales, consulta de colillas de pago, generación de certificados laborales y firma de documentos, entre otros.<br />
            <br />
            Mi rol fue <strong>diseñador</strong> y <strong>desarrollador frontend</strong>, utilizando <span style={{ fontWeight: 'bold' }}>Figma</span> para el diseño visual y <strong>React</strong> y <strong>Node.js</strong> para el desarrollo.<br />
            Se aplicaron principios de diseño responsivo para garantizar una experiencia de usuario óptima en diversos dispositivos.
          </>
        }
        images={[
          { src: img1, alt: "Vista 1 del Portal de Empleados" },
          { src: img2, alt: "Vista 2 del Portal de Empleados" },
        ]}

        tasks={[
          "Diseño de la interfaz de usuario en Figma.",
          "Desarrollo del frontend utilizando React.",
          "Implementación de un formulario para la actualización de datos personales.",
          "Integración de funcionalidades para la consulta de colillas de pago y generación de certificados laborales.",
          "Desarrollo de un sistema de firma electrónica para documentos internos.",
          "Optimización del portal para dispositivos móviles y tablets."
        ]}
      />

    </div>
  );
};

export default PortalEmpleados;
