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
            Se desarrolló una nueva <strong className="highlight">intranet</strong> para optimizar la comunicación y la gestión de información interna de la <strong>Fundación Universidad de Antioquia</strong>.<br />
            Esta solución incluyó funcionalidades como un formulario para la actualización de datos generales, consulta de colillas de pago, generación de certificados laborales y firma de documentos, entre otros.<br />
            <br />
            Mi rol fue <strong className="highlight">diseñador</strong> y <strong className="highlight">desarrollador frontend</strong>, utilizando <strong className="highlight">Figma</strong> para el diseño visual y <strong className="highlight">React</strong> y <strong>Node.js</strong> para el desarrollo.<br />
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
