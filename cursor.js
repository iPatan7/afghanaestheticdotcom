const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Animate cursor with smooth transition
    cursor.style.transform = `translate3d(${posX - 10}px, ${posY - 10}px, 0)`;
    cursorDot.style.transform = `translate3d(${posX - 2}px, ${posY - 2}px, 0)`;
});

// Add hover effect for clickable elements
document.querySelectorAll('a, button, .skill-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = `translate3d(${posX - 15}px, ${posY - 15}px, 0) scale(1.5)`;
        cursor.style.borderColor = 'rgba(229, 231, 235, 0.8)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = `translate3d(${posX - 10}px, ${posY - 10}px, 0) scale(1)`;
        cursor.style.borderColor = 'rgba(229, 231, 235, 0.5)';
    });
}); 