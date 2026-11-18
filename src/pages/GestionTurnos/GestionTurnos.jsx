import FrontendDetails from "../../components/FrontendDetails/FrontendDetails";
import img1 from "../../assets/img/gt 01.png";
import img2 from "../../assets/img/gt 02.png";
import img3 from "../../assets/img/gt 03.png";
import img4 from "../../assets/img/gt 04.png";
import img5 from "../../assets/img/gt 05.png";

const GestionTurnos = () => {
  return (
    <div className="principal-container">
      <FrontendDetails
        title="Gestión de Turnos"
        description={
          <>
            Gestión de Turnos es una plataforma web en{" "}
            <span className="highlight">Django</span> diseñada para el{" "}
            <span className="highlight">
              personal de conducción del Metro de Medellín
            </span>
            . Centraliza la programación, verificación y seguimiento de
            turnos, solicitudes y novedades operativas.
            <br />
            <br />
            Mi aporte se concentró en{" "}
            <span className="highlight">
              restaurar y modernizar la interfaz
            </span>
            , desarrollar y fortalecer el módulo de{" "}
            <span className="highlight">Verificación</span> y optimizar flujos
            críticos del proyecto. En Verificación trabajé en la identificación
            de operadores, el registro de horas reales, filtros y alertas, la
            gestión de novedades y reprogramaciones y la exportación de
            información.
          </>
        }
        images={[
          { src: img1, alt: "Dashboard operativo de Gestión de Turnos" },
          { src: img2, alt: "Identificación de operador en Verificación" },
          { src: img3, alt: "Módulo de Verificación de turnos" },
          {
            src: img4,
            alt: "Configuración de ventanas y reglas operativas",
          },
          { src: img5, alt: "Administración de claves de operadores" },
        ]}
        tasks={[
          "Restauración y modernización de la interfaz.",
          "Desarrollo y fortalecimiento del módulo de Verificación.",
          "Identificación segura de operadores.",
          "Gestión de horas reales, novedades, alertas y reprogramaciones.",
          "Exportación de información de Verificación.",
          "Optimización de flujos críticos y mantenibilidad del proyecto.",
        ]}
      />
    </div>
  );
};

export default GestionTurnos;
