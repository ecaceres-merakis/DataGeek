import React from 'react';
import { loadFull } from 'tsparticles';
import { Particles } from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // Cargar los motores necesarios para la configuración completa
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent', // Fondo transparente
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse', // Efecto de repulsión al pasar el mouse
            },
            onClick: {
              enable: true,
              mode: 'push', // Añade más partículas al hacer clic
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100, // Distancia de repulsión
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 100, // Número de partículas
            density: {
              enable: true,
              area: 800, // Área de densidad
            },
          },
          color: {
            value: 'black', // Color de las partículas
          },
          shape: {
            type: 'circle', // Forma de las partículas
          },
          opacity: {
            value: 0.5, // Opacidad de las partículas
            random: false,
          },
          size: {
            value: 3, // Tamaño de las partículas
            random: true,
          },
          lineLinked: {
            enable: true, // Habilitar líneas entre partículas
            distance: 150, // Distancia para conectar partículas
            color: '#ffffff', // Color de las líneas
            opacity: 0.4, // Opacidad de las líneas
            width: 1,
          },
          move: {
            enable: true,
            speed: 2, // Velocidad de movimiento
            direction: 'none',
            random: false,
            straight: false,
            outMode: 'bounce', // Rebota cuando llega al borde
            attract: {
              enable: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
