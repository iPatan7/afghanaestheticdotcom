document.addEventListener('DOMContentLoaded', function() {
    const particleContainer = document.getElementById('particleContainer');
    const nameWrapper = document.querySelector('.aws-name-wrapper');
    
    if (particleContainer) {
        particleContainer.style.position = 'fixed';
    }

    function createCloudParticle() {
        if (!particleContainer) return;

        const particle = document.createElement('div');
        particle.className = 'cloud-particle';
        
        // Enhanced randomization for smoother movement
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 10;
        const duration = Math.random() * 4000 + 6000; // Longer duration
        const opacity = Math.random() * 0.15 + 0.05; // Subtler opacity

        // Initial styles with improved gradients
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${startX}px;
            top: ${startY}px;
            opacity: 0;
            background: radial-gradient(
                circle at center,
                rgba(255, 153, 0, ${opacity}),
                rgba(255, 153, 0, ${opacity * 0.5}) 50%,
                rgba(255, 153, 0, 0) 80%
            );
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            filter: blur(${size/2}px);
            will-change: transform, opacity;
            transform-origin: center center;
        `;
        
        particleContainer.appendChild(particle);

        // Smoother animation path
        const endX = startX + (Math.random() - 0.5) * 150;
        const distance = window.innerHeight + 100;
        
        // Create animation
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 0
            },
            { 
                transform: `translate(
                    ${(Math.random() - 0.5) * 50}px, 
                    ${-distance * 0.3}px
                ) scale(1.1)`,
                opacity: opacity,
                offset: 0.2
            },
            { 
                transform: `translate(
                    ${(Math.random() - 0.5) * 100}px, 
                    ${-distance * 0.6}px
                ) scale(1.2)`,
                opacity: opacity,
                offset: 0.5
            },
            { 
                transform: `translate(
                    ${endX - startX}px, 
                    ${-distance}px
                ) scale(1)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'both'
        }).onfinish = () => {
            if (particle.parentNode === particleContainer) {
                particleContainer.removeChild(particle);
            }
        };
    }

    // Optimized particle creation
    let isActive = true;
    let lastTime = 0;
    const particleInterval = 100; // Adjust for density

    function animate(currentTime) {
        if (!isActive) return;

        if (currentTime - lastTime >= particleInterval) {
            createCloudParticle();
            lastTime = currentTime;
        }

        requestAnimationFrame(animate);
    }

    // Start animation
    requestAnimationFrame(animate);

    // Handle visibility changes
    document.addEventListener('visibilitychange', () => {
        isActive = !document.hidden;
        if (isActive) {
            requestAnimationFrame(animate);
        }
    });

    // Name hover effect
    if (nameWrapper) {
        let rafId = null;
        
        nameWrapper.addEventListener('mousemove', (e) => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
            
            rafId = requestAnimationFrame(() => {
                const rect = nameWrapper.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / nameWrapper.offsetWidth) * 100;
                const y = ((e.clientY - rect.top) / nameWrapper.offsetHeight) * 100;
                nameWrapper.style.setProperty('--mouse-x', `${x}%`);
                nameWrapper.style.setProperty('--mouse-y', `${y}%`);
                rafId = null;
            });
        });

        // Clean up the effect when mouse leaves
        nameWrapper.addEventListener('mouseleave', () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        });
    }

    // Cleanup
    window.addEventListener('unload', () => {
        isActive = false;
    });

    // Add scroll spy for section highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        // Update active states if needed
        document.querySelectorAll('.quick-link-card').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add or update this function in your script.js
    function smoothScroll(targetId) {
        const element = document.getElementById(targetId);
        if (element) {
            event.preventDefault();
            
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            // Add highlight animation
            element.classList.add('highlight-card');
            setTimeout(() => {
                element.classList.remove('highlight-card');
            }, 1500);
        }
    }

    // Add click handler for the Connect With Me button
    document.addEventListener('DOMContentLoaded', function() {
        const connectLinks = document.querySelectorAll('a[href="#instagram-connect"]');
        connectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                smoothScroll('instagram-connect');
            });
        });
    });
});

function smoothScroll(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
} 