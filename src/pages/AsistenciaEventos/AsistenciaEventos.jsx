import React from "react";
import FrontendDetails from "../../components/FrontendDetails/FrontendDetails";
import img1 from "../../assets/img/Asistencias_01.png";
import img2 from "../../assets/img/Asistencias_02.png";
import img3 from "../../assets/img/Asistencias_03.png";
import img4 from "../../assets/img/Asistencias_04.png";
import img5 from "../../assets/img/Asistencias_05.png";

const AsistenciaEventos = () => {
  return (
    <div className="principal-container">
      <FrontendDetails
        title="Asistencia a Eventos"
        description={
          <>
            Plataforma web integral para <strong>automatizar y centralizar la gestión de
            eventos corporativos</strong>  de tipo capacitaciones, reuniones, y actividades de bienestar humano.
						Esta app permite <strong>capturar datos del dispositivo</strong> a través del cual se registra la asistencia,
            <br />
            Por otro lado, el panel de administrador permite crear eventos,
            generar y sincronizar automáticamente <strong>códigos QR</strong> con Odoo, cargar archivos de evidenica y emitir
            reportes en tiempo real.
            <br />
            Asimismo, los participantes se <strong>autentican con credenciales de intranet</strong> y
            confirman su asistencia escaneando el código QR, garantizando
            seguridad, precisión y eliminación del papel.
            <br />
            Gracias a esta solución, la empresa optimiza recursos, reduce
            errores y acelera la generación de informes alineados con
            sus objetivos estratégicos.
          </>
        }
        images={[
					{src: img1, alt: "Vista 1 de Asistencia a Eventos" },
					{src: img2, alt: "Vista 2 de Asistencia a Eventos" },
					{src: img3, alt: "Vista 3 de Asistencia a Eventos" },
					{src: img4, alt: "Vista 4 de Asistencia a Eventos" },
					{src: img5, alt: "Vista 5 de Asistencia a Eventos" }
				]}
        tasks={[
          "Diseño de lógica e interfaz de usuario para la gestión de eventos.",
          "Desarrollo del frontend y backend utilizando Django.",
          "Optimización de la experiencia del usuario en dispositivos móviles.",
          "Integración del backend con ERP Odoo para la gestión de eventos.",
          "Validación de identidad de los usuarios mediante código QR con usuario y contraseña de la intranet.",
        ]}
      />
    </div>
  );
};
export default AsistenciaEventos;
