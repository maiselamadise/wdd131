// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set the last modified date in the footer
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger Menu for Mobile
const navMenu = document.querySelector('nav ul');
const hamburger = document.createElement('button');
hamburger.textContent = '☰';
hamburger.style.display = 'none'; // Initially hidden on larger screens
hamburger.setAttribute('aria-label', 'Toggle navigation menu');
hamburger.setAttribute('tabindex', '0'); // Make the button focusable

// Insert the hamburger button before the navigation menu
document.querySelector('header').insertBefore(hamburger, navMenu);

// Toggle navigation visibility on hamburger click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
    hamburger.textContent = hamburger.textContent === '☰' ? 'X' : '☰';
});

// Show the hamburger button on mobile screens
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
    } else {
        hamburger.style.display = 'none';
        navMenu.classList.remove('visible');
    }
});