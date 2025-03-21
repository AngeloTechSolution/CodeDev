function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        let targetSection = this.getAttribute('data-target');

        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(targetSection).classList.add('active');

        const navLinks = document.querySelector(".nav-links");
        const hamburgerMenu = document.querySelector(".hamburger");

        if (window.getComputedStyle(hamburgerMenu).display !== "none") {
            navLinks.classList.remove("active"); // Close menu
        }
    });
});
