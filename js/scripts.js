// Efecto de cambio en la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mostrar/ocultar banner de cookies
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptButton = document.getElementById('acceptCookies');
    
    // Verificar si ya se aceptaron las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }
    
    // Manejar el clic en el botón "Entendido"
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
});

// Inicializar tooltips de Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});