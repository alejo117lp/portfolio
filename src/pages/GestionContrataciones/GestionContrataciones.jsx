import React from "react";
import FrontendDetails from "../../components/FrontendDetails/FrontendDetails";
import img1 from "../../assets/img/Contrataciones_01.png";
import img2 from "../../assets/img/Contrataciones_02.png";
import img3 from "../../assets/img/Contrataciones_03.png";
import img4 from "../../assets/img/Contrataciones_04.png";

const GestionContrataciones = () => {
  return (
    <div className="principal-container">
      <FrontendDetails
        title="Gestión de Contrataciones"
        description={
          <>
            Esta plataforma web, diseñada para la{" "}
            <strong>Fundación Universidad de Antioquia</strong>, optimiza cada
            fase del proceso de contrataciones. A través de una interfaz
            intuitiva, los usuarios pueden:
            <br />
            <ul>
              <li>Iniciar y dar seguimiento a solicitudes de contratación.</li>
              <li>
                Revisar de forma centralizada documentos y datos personales.
              </li>
              <li>
                Coordinar la participación de Gestión Humana, SST y Jurídica en
                el flujo completo.
              </li>
            </ul>
            <p>
              Mi responsabilidad incluyó el diseño y desarrollo del frontend con
              <span className="highlight"> React</span> y{" "}
              <span className="highlight">Node.js</span>, asegurando una{" "}
              <span className="highlight">
                experiencia de usuario fluida, accesible y totalmente responsiva
              </span>
              .
            </p>
          </>
        }
        images={[
          { src: img1, alt: "Screenshot 1" },
          { src: img2, alt: "Screenshot 2" },
          { src: img3, alt: "Screenshot 3" },
          { src: img4, alt: "Screenshot 4" },
        ]}
        tasks={[
          "Diseño de Interfaz de Usuario",
          "Implementación de Funcionalidades",
          "Integración con Backend",
          "Pruebas y Depuración",
        ]}
      />
    </div>
  );
};

export default GestionContrataciones;
