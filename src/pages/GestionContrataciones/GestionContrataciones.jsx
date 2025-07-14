import React from "react";
import FrontendDetails from "../../components/FrontendDetails/FrontendDetails";

const GestionContrataciones = () => {
  return (
    <div className="principal-container">
      <FrontendDetails 
        title="Gestión de Contrataciones"
        description={
          <>
            Esta aplicación web fue desarrollada para optimizar el proceso de gestión de contrataciones en la <strong>Fundación Universidad de Antioquia</strong>.<br />
            Permite a los usuarios gestionar solicitudes, realizar seguimientos y generar reportes de manera eficiente.<br />
            <br />
            Mi rol incluyó el diseño y desarrollo frontend utilizando <strong className="highlight">React</strong> y <strong className="highlight">Node.js</strong>, asegurando una experiencia de usuario fluida y responsiva.
          </>
        }
        images={[]}
        tasks={[]}
      />
    </div>
  );
};

export default GestionContrataciones;
