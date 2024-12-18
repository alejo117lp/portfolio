import React from "react";
import "../home/home.css";
import Card from "../card/Card";
import img1 from "../../img/web_fua_intranet.jpg";
import robotZ from "../../img/Robot-Z.png";
import mib from "../../img/poster mib.jpeg";
import logo from "../../img/logo_1.png";
import GameCard from "../game_card/GameCard";
import ProjectCard from "../project_card/ProjectCard";

const Home = () => {
  const frontendItems = [
    { iconName: "fa-brands fa-html5", description: "HTML" },
    { iconName: "fa-brands fa-css3-alt", description: "CSS" },
    { iconName: "fa-brands fa-square-js", description: "JavaScript" },
    { iconName: "fa-brands fa-react", description: "React JS" },
    { iconName: "fa-brands fa-bootstrap", description: "Bootstrap" },
  ];

  const backendItems = [
    { iconName: "fa-brands fa-python", description: "python" },
    { iconName: "fa-solid fa-code", description: "Django" },
    { iconName: "fa-brands fa-node-js", description: "Node.js" },
  ];

  const gamesItems = [
    { iconName: "fa-solid fa-code", description: "C#" },
    { iconName: "fa-brands fa-unity", description: "Unity" },
  ];

  const otherItems = [
    { iconName: "fa-brands fa-github", description: "Git/GitHub" },
    { iconName: "fa-brands fa-google", description: "Google Apps Script" },
    { iconName: "fa-brands fa-microsoft", description: "Microsoft 365" },
    { iconName: "fa-brands fa-figma", description: "Figma" },
    { iconName: "fa-solid fa-globe", description: "Odoo" },
  ];

  return (
    <div className="principal-container">
      <section className="profile-section">
        <div className="name-icon">
          <img src={logo} className="logo-presentation" alt="Logo Personal"></img>
          <div className="profile-head">
            <h1 className="featured">Alejandro López Pérez</h1>
            <h4 className="istok-italic">
              Desarrollador Frontend y de Videojuegos
            </h4>
          </div>
        </div>
        
        <div className="profile-description">
          <h3 className="featured-2">¿Quién soy?</h3>
          <p>
            Ingeniero en Diseño de Entretenimiento Digital con énfasis en
            <span className="highlight"> videojuegos</span>, experiencia en <span className="highlight">desarrollo web frontend</span> y nivel<span className="highlight"> B1 en inglés</span>. He trabajado
            en proyectos utilizando React, JavaScript, Python, Django, Unity y
            tecnologías como Google AppScript y la API de WhatsApp Business. En
            mi actual rol como <span className="highlight">Analista de Tecnología e Innovación</span>, he sido
            responsable del <span className="highlight">diseño y desarrollo de interfaces intuitivas y
            responsivas</span>, además de la conexión eficiente entre frontend y
            backend. Cuento con un fuerte enfoque en mejorar procesos a través
            de herramientas colaborativas como Microsoft 365 y soluciones
            innovadoras en software.
          </p>
        </div>
      </section>

      {/* Technical skills */}
      <section className="skills-section">
        <h3 className="featured-2">Habilidades Técnicas</h3>
        <div className="skills-cards">
          <Card title="Frontend" items={frontendItems} />
          <Card title="Backend" items={backendItems} />
          <Card title="Videojuegos" items={gamesItems} />
          <Card title="Otros" items={otherItems} />
        </div>
      </section>

      {/* Frontend Projects Carousel */}
      <section className="carousel-frontend-pj">
        <h3 className="featured-2">Proyectos Front-End Destacados</h3>
        <ProjectCard 
          title="Portal de Empleados"
          src={img1}
          alt="Portal empleados"
          description={
            <p>
              Aplicación Web con conexión al ERP y desarrollada en <span className="highlight">React</span> para reemplazar la antigua intranet de la empresa. Allí
              los empleados pueden gestionar su información personal, consultar colillas de pago, firmar documentos digitales, gestionar 
              sus turnos de trabajo, vacaciones entre otros.
            </p>
          }
        />
      </section>

      {/* Proyectos Videojuegos */}
      <section className="p-games-pj">
        <h3 className="featured-2">Videojuegos Destacados</h3>
        <GameCard 
          title="Robot-Z"
          src={robotZ}
          alt="robot-Z poster"
          description="Es un stealth, puzzle and fast game desarrollado durante mi tercer semestre de académico para el curso de Fundamentos de Programación. Allí diseñé el nivel con todas sus zonas de trampas y power-ups, el concept de los personajes y la historia. También, implementé las mecánicas (Caminar, Saltar, Agacharse, activar palancas, desactivar trampas, recolectar items), el nivel y cada uno de sus assets, el menú de inicio y pausa; las animaciones y las pantallas de Ganar y Perder."
          link="https://drive.google.com/file/d/1kAZzVENQbICYlaLtGg_XJgrYg0E3jd_w/view"
          navigate="/2d-games"
        />
        <div className="horizontal-bar"></div>
        <GameCard 
          title="Men In Black: Museum"
          src={mib}
          alt="Men In Black: Museum - poster"
          description="Es un juego VR desarrollado para las Oculus Quest 2 y enfocado en la visualizacón y diseño de datos. Mis funciones en este proyecto fueron: Integración del KIT VRTK TILIA al proyecto, implementación de movimiento en VR, implementación de Snapping en VR, desarrollo e implementación de UI VR interactuable, desarrollo de infografías, diseño e implementación del nivel Cartelera del juego (Desarrollo de trampas y condiciones para que el jugador pueda escapar de la Sala)."
          link="https://drive.google.com/file/d/1SjxuAWR8I0vBd9r7wPLB32b3EIlZEiJo/view"
          navigate="/vr-mob-games"
        />
      </section>
    </div>
  );
};

export default Home;
