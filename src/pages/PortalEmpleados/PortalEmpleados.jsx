import React from "react";
import '../../pages/PortalEmpleados/PortalEmpleados.css';
import FrontendDetails from "../../components/FrontendDetails/FrontendDetails";
import img1 from "../../assets/img/Intranet_01.png";
import img2 from "../../assets/img/Intranet_02.png";
import img3 from "../../assets/img/Intranet_03.png";
import img4 from "../../assets/img/Intranet_04.png";

const PortalEmpleados = () => {
  return (
    <div className="principal-container">
      <FrontendDetails
        title="Portal de Empleados"
        description={
          <>
            Se desarrolló una nueva <span className="highlight">intranet</span> para optimizar la comunicación y la gestión de información interna de la <strong>Fundación Universidad de Antioquia</strong>.
            Esta solución incluyó funcionalidades como un formulario para la actualización de datos generales, consulta de colillas de pago, generación de certificados laborales y firma de documentos, entre otros.
            <br />
            <br />
            Mi rol fue <span className="highlight">diseñador</span> y <span className="highlight">desarrollador frontend</span>, utilizando <span className="highlight">Figma</span> para el diseño visual y <span className="highlight">React</span> y <span>Node.js</span> para el desarrollo.
            Se aplicaron principios de diseño responsivo para garantizar una experiencia de usuario óptima en diversos dispositivos.
          </>
        }
        images={[
          { src: img1, alt: "Vista 1 del Portal de Empleados" },
          { src: img2, alt: "Vista 2 del Portal de Empleados" },
          { src: img3, alt: "Vista 3 del Portal de Empleados" },
          { src: img4, alt: "Vista 4 del Portal de Empleados" }
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
