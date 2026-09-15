const projectCards = document.querySelectorAll(".project-card");
const projectModal = document.querySelector("#projectModal");
const projectModalContent = document.querySelector("#projectModalContent");

function openProject(card) {
    const clone = card.cloneNode(true);

    clone.removeAttribute("tabindex");

    projectModalContent.innerHTML = "";
    projectModalContent.appendChild(clone);

    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeProject() {
    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        openProject(card);
    });

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject(card);
        }
    });
});

/* Click anywhere on enlarged view to close */
projectModal.addEventListener("click", closeProject);

/* Escape also closes it */
document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        projectModal.classList.contains("is-open")
    ) {
        closeProject();
    }
});