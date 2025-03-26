// Simple script for potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Update copyright year
    document.querySelectorAll('footer p').forEach(el => {
        el.textContent = `© ${new Date().getFullYear()} Lukas Rooney`;
    });
});