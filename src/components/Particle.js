import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 55,
            density: {
              enable: true,
              value_area: 1100,
            },
          },

          color: {
            value: ["#00c8f5", "#38bdf8", "#7dd3fc"],
          },

          line_linked: {
            enable: true,
            distance: 170,
            color: "#38bdf8",
            opacity: 0.28,
            width: 1,
          },

          move: {
            enable: true,
            direction: "none",
            random: true,
            speed: 0.45,
            straight: false,
            out_mode: "out",
            bounce: false,
          },

          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.8,
              sync: false,
            },
          },

          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.25,
              sync: false,
            },
          },
        },

        interactivity: {
          detect_on: "canvas",

          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },

            onclick: {
              enable: false,
            },

            resize: true,
          },

          modes: {
            grab: {
              distance: 160,
              line_linked: {
                opacity: 0.45,
              },
            },
          },
        },

        retina_detect: true,
      }}
    />
  );
}

export default Particle;
