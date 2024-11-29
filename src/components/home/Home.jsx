import React from "react";
import "../home/home.css";
import Card from "../card/Card";
import prueba1 from "../../img/Prueba1.jpg";
import prueba2 from "../../img/Prueba2.jpg";
import prueba3 from "../../img/Prueba3.jpg";
import robotZ from "../../img/Robot-Z.png";
import mib from "../../img/poster mib.jpeg";
import GameCard from "../game_card/GameCard";

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
  ];

  return (
    <div className="principal-container">
      <section className="profile-section">
        <div className="profile-head">
          <h1>Alejandro López Pérez</h1>
          <h4>
            Ingeniero en Diseño de Entretenimiento Digital | Desarrollador
            Frontend y de Videojuegos
          </h4>
        </div>
        <div className="profile-description">
          <h3>¿Quién soy?</h3>
          <p>
            Ingeniero en Diseño de Entretenimiento Digital con énfasis en
            videojuegos y experiencia en desarrollo web frontend. He trabajado
            en proyectos utilizando React, JavaScript, Python, Django, Unity y
            tecnologías como Google AppScript y la API de WhatsApp Business. En
            mi actual rol como Analista de Tecnología e Innovación, he sido
            responsable del diseño y desarrollo de interfaces intuitivas y
            responsivas, además de la conexión eficiente entre frontend y
            backend. Cuento con un fuerte enfoque en mejorar procesos a través
            de herramientas colaborativas como Microsoft 365 y soluciones
            innovadoras en software. Asimismo, me gusta combinar mis habilidades
            técnicas con la docencia en áreas como Introducción al Desarrollo
            Web o Desarrollo Frontend y afines en mis ratos libres.
          </p>
        </div>
      </section>

      {/* Technical skills */}
      <section className="skills-section">
        <h3>Habilidades Técnicas</h3>
        <div className="skills-cards">
          <Card title="Frontend" items={frontendItems} />
          <Card title="Backend" items={backendItems} />
          <Card title="Videojuegos" items={gamesItems} />
          <Card title="Otros" items={otherItems} />
        </div>
      </section>

      {/* Frontend Projects Carousel */}
      <section className="carousel-frontend-pj">
        <h3>Proyectos Front-End</h3>
        <div className="carousel-container">
          <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={prueba1} class="d-block w-100" alt="prueba 1" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={prueba2} class="d-block w-100" alt="prueba 2" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={prueba3} class="d-block w-100" alt="prueba 3" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Proyectos Videojuegos */}
      <section className="p-games-pj">
        <h3>Videojuegos Destacados</h3>
        <GameCard 
          title="Robot-z"
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
