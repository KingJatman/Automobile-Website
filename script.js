const navToggle = document.querySelector('.nav-toggle'); // Selects the hamburger menu button
const navMenu = document.querySelector('.nav-menu'); // Selects the navigation menu

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggles the 'active' class to show or hide the navigation menu
});

// Highlight the active navigation link
const navLinks = document.querySelectorAll('.nav-menu a'); // Select all navigation links
const currentPath = window.location.pathname.split('/').pop(); // Get the current page's file name

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop(); // Get the file name from the link's href
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        link.classList.add('active'); // Add the 'active' class to the current page's link
    } else {
        link.classList.remove('active'); // Ensure other links do not have the 'active' class
    }
});
