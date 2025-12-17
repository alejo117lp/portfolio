import React from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import { RevealSection, RevealCard } from "../../hooks/useScrollReveal";
import img1 from "../../assets/img/web_fua_intranet.jpg";
import robotZ from "../../assets/img/Robot-Z.png";
import mib from "../../assets/img/poster mib.jpeg";
import GameCard from "../../components/GameCard/GameCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
      <main className="home-main">
        {/* Hero con texto grande tipo "Hi, I'm..." */}
        <RevealSection id="perfil" className="profile-section" once={true}>
          <div className="profile-head">
            <h1 className="hero-title">
              <span className="hero-title-small">Hola, soy</span>
              <br />
              <span className="hero-title-highlight gradient-text">
                Alejo López,
              </span>
              <br />
              <span className="hero-title-role">
                Desarrollador Frontend y de Videojuegos Junior
              </span>
            </h1>
          </div>
          <div className="profile-description">
            <p>
              Ingeniero en Diseño de Entretenimiento Digital con énfasis en
              <span className="highlight"> videojuegos</span> y experiencia en{" "}
              <span className="highlight">desarrollo web frontend</span>.
            </p>
          </div>
        </RevealSection>

        {/* Habilidades técnicas con tus cards actuales */}
        <RevealSection id="habilidades" className="section-wrapper">
          <h3 className="featured-2">Habilidades Técnicas</h3>
          <div className="skills-section">
            <div className="skills-cards">
            <RevealCard delay={0}>
              <Card title="Frontend" items={frontendItems} />
            </RevealCard>
            <RevealCard delay={100}>
              <Card title="Backend" items={backendItems} />
            </RevealCard>
            <RevealCard delay={200}>
              <Card title="Videojuegos" items={gamesItems} />
            </RevealCard>
            <RevealCard delay={300}>
              <Card title="Otros" items={otherItems} />
            </RevealCard>
          </div>
          </div>
        </RevealSection>

        <div className="horizontal-bar"></div>

        {/* Proyectos Frontend destacados */}
        <RevealSection id="proyectos-web" className="section-wrapper">
          <h3 className="featured-2">Proyectos Front-End Destacados</h3>
          <div className="web-projects-section">
          <RevealCard delay={150}>
            <ProjectCard
              title="Portal de Empleados"
              src={img1}
              alt="Portal de empleados"
              description={
                <p>
                  Aplicación Web conectada al ERP y desarrollada en{" "}
                  <span className="highlight">React</span> para reemplazar la
                  antigua intranet de la empresa. Permite a los empleados gestionar
                  su información personal, consultar colillas de pago, firmar
                  documentos digitales y administrar turnos y vacaciones.
                </p>
              }
              navigate="/portal-empleados"
            />
          </RevealCard>
          </div>
        </RevealSection>

        <div className="horizontal-bar"></div>

        {/* Videojuegos destacados */}
        <RevealSection id="videojuegos" className="section-wrapper">
          <h3 className="featured-2">Videojuegos Destacados</h3>
          <div className="p-games-pj">
          <RevealCard delay={0}>
            <GameCard
              title="Robot-Z"
              src={robotZ}
              alt="Poster del juego Robot-Z"
              description={
                <p>
                  Juego stealth, puzzle and fast game desarrollado en mi tercer
                  semestre académico. Diseñé el nivel con sus zonas de trampas y
                  power-ups, el concept de personajes y la historia, además de
                  implementar las mecánicas principales, menús y pantallas de
                  feedback.
                </p>
              }
              link="https://drive.google.com/file/d/1kAZzVENQbICYlaLtGg_XJgrYg0E3jd_w/view"
              navigate="/robot-z"
            />
          </RevealCard>
          <RevealCard delay={200}>
            <GameCard
              title="Men In Black: Museum"
              src={mib}
              alt="Poster del juego Men In Black: Museum"
              description={
                <p>
                  Juego VR para Oculus Quest 2 centrado en visualización y diseño de
                  datos. Me encargué de la integración del kit VRTK TILIA, el
                  movimiento y snapping en VR, la UI interactuable, las infografías y
                  el diseño del nivel Cartelera con sus retos para que el jugador
                  pueda escapar de la sala.
                </p>
              }
              link="https://drive.google.com/file/d/1SjxuAWR8I0vBd9r7wPLB32b3EIlZEiJo/view"
              navigate="/mib-museum"
            />
          </RevealCard>
          </div>
        </RevealSection>
      </main>
    </div>
  );
};

export default Home;
