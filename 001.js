document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here

    // Navigation handling
    document.querySelector('nav ul li a[href="products.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'products.html';
    });

    // Hero button handling
    document.querySelector('.hero-button').addEventListener('click', function() {
        window.location.href = 'products.html';
    });
});
