import React from 'react'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


export default function ParticleBg() {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div id='Home'>
            {init && (
                <Particles
                    id="tsparticles"

                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                // value: "#0d47a1",
                            },
                        },
                        fullScreen: {
                            enable: false
                        },
                        // fpsLimit: 120,
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
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            "number": {
                                "value": 100,
                                "density": {
                                    "enable": true,
                                    "value_area": 400
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.4,
                                width: 1,
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                            },
                            size: {
                                "value": 3,
                                "random": true,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </div>
    );

}