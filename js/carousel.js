const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");
const carouselStatus = document.querySelector(".carousel-status");

let currentSlide = 0;

function showSlide(index) {
    // Wrap around
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Remove active state
    slides.forEach((slide) => {
        slide.classList.remove("is-active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("is-active");
    });

    // Activate selected slide
    slides[currentSlide].classList.add("is-active");
    dots[currentSlide].classList.add("is-active");

    // Update 01 / 04
    carouselStatus.textContent =
        `${String(currentSlide + 1).padStart(2, "0")} / ` +
        `${String(slides.length).padStart(2, "0")}`;
}



// DOTS
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});


// INITIALIZE
showSlide(0);