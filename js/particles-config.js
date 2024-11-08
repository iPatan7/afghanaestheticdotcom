document.addEventListener("DOMContentLoaded", function() {
    // Check if particles.js is loaded
    if (typeof particlesJS !== 'undefined') {
        console.log('Particles.js is loaded');
    } else {
        console.error('Particles.js is not loaded');
        return;
    }

    // Check if container exists
    const container = document.getElementById('particles-js');
    if (!container) {
        console.error('Particles container not found');
        return;
    }

    const particlesConfig = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                bounce: true,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    };

    // Initialize particles with error checking
    try {
        particlesJS('particles-js', particlesConfig);
        console.log('Particles initialized successfully');
    } catch (error) {
        console.error('Error initializing particles:', error);
    }

    // Debug: Check if canvas was created
    setTimeout(() => {
        const canvas = document.querySelector('#particles-js canvas');
        if (canvas) {
            console.log('Canvas created successfully');
            // Make sure canvas is interactive
            canvas.style.pointerEvents = 'auto';
        } else {
            console.error('Canvas not created');
        }
    }, 1000);
}); 