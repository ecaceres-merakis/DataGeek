import React, { useState, useEffect, useMemo } from "react";
import CanvasCursor from "./CanvasCursor";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const Header = (props) => {
  const [isCursorActive, setIsCursorActive] = useState(false);
  const [init, setInit] = useState(false);

  // Inicializa las partículas
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Carga la configuración ligera de tsparticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false, // Desactiva el renderizado a pantalla completa
      },
      background: {
        color: {
          value: "transparent", // Fondo transparente
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
            quantity: 5,
          },
          grab: {
            distance: 150,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 600, // Aumenta la densidad
          },
          value: 200, // Aumenta el número total de partículas
        },
        opacity: {
          value: 0.5, // Translucidez de las partículas
          random: true, // Hacer que la opacidad sea aleatoria entre las partículas
          animation: {
            enable: true,
            speed: 0.2, // Animación lenta de opacidad
            minimumValue: 0.3, // Opacidad mínima para la animación
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const handleMouseEnter = () => setIsCursorActive(true);
  const handleMouseLeave = () => setIsCursorActive(false);

  return (
    <header
      id="header"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        height: "100vh", // Ajusta el tamaño del header si es necesario
        overflow: "hidden", // Asegúrate de que las partículas no se salgan
      }}
    >
      {/* Partículas con restricción al header */}
      {init && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%", // Restricción dentro del header
            zIndex: 10,
            pointerEvents: "none", // Evita que el canvas intercepte clics
          }}
        >
          <Particles id="tsparticles" options={options} />
        </div>
      )}

      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Descubre nuestros servicios
                </a>
              </div>
            </div>
          </div>
        </div>
        {isCursorActive && <CanvasCursor />}
      </div>
    </header>
  );
};

export default Header;
