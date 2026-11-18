import FrontendDetails from "../../components/FrontendDetails/FrontendDetails";
import img1 from "../../assets/img/contrataciones 01.png";
import img2 from "../../assets/img/contrataciones 02.png";
import img3 from "../../assets/img/contrataciones 03.png";
import img4 from "../../assets/img/contrataciones 04.png";

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
            <ul>
              <li>Iniciar y dar seguimiento a solicitudes de contratación.</li>
              <li>
                Revisar de forma centralizada documentos y datos personales.
              </li>
              <li>
                Coordinar la participación de Gestión Humana, SST y Jurídica
                en el flujo completo.
              </li>
            </ul>
            <br />
            Mi responsabilidad en la primera fase incluyó el diseño y desarrollo del frontend con
            <span className="highlight"> React</span> y{" "} asegurando una{" "}
            <span className="highlight">
              experiencia de usuario fluida, accesible y totalmente responsiva
            </span>
            <br />
            <br />
            Para la segunda fase, desarrollé el backend con <span className="highlight">Django</span>, integrando la aplicación con el sistema de gestión de la Fundación y garantizando la seguridad y eficiencia en el manejo de datos.
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
          "Implementación de Frontend con React",
          "Integración y desarrollo de Backend con Django",
          "Pruebas y Depuración",
        ]}
      />
    </div>
  );
};

export default GestionContrataciones;
