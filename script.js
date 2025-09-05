function alertComingSoon() {
    alert("Thank you for visiting! Website will launch soon 🚀");
}

// Toggle navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
