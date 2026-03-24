import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Start the tsParticles engine using the “slim” (lighter) version
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container); // Optional for debugging
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed inset-0 -z-10 pointer-events-none" // Tailwind to set it as an absolute background
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // The particles scatter away from the mouse a little
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#00c3ff", 
          },
          links: {
            color: "#ff00c8",
            distance: 150,
            enable: true,
            opacity: 0.2, // Subtle lines
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce", // They bounce off the edges of the screen
            },
            random: false,
            speed: 0.3, // Very slow and graceful movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60, // Number of particles
          },
          opacity: {
            value: 0.4, // Subtle particles
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;