const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a navigation link
links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
    });
});