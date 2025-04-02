import React from "react";
import '../../pages/PortalEmpleados/PortalEmpleados.css';
import FrontendDetails from "../../components/FrontendDetails/FrontendDetails";
import img1 from "../../img/web_fua_intranet.jpg";
import img2 from "../../img/Hamony_1.png";

const PortalEmpleados = () => {
  return (
    <div className="principal-container">
      <FrontendDetails
        title="Portal de Empleados"
        images={[
          { src: img1, alt: "Vista 1 del Portal de Empleados" },
          { src: img2, alt: "Vista 2 del Portal de Empleados" },
        ]}
      />
    </div>
  );
};

export default PortalEmpleados;
