const contactModal = document.querySelector("#contactModal");
const openContactModal = document.querySelector("#contactModalOpen");
const closeContactModal = document.querySelector("#contactModalClose");
const contactBackdrop = document.querySelector(".contact-modal-backdrop");

function openModal() {
    contactModal.classList.add("is-open");
    contactModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeModal() {
    contactModal.classList.remove("is-open");
    contactModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

openContactModal.addEventListener("click", openModal);

closeContactModal.addEventListener("click", closeModal);

contactBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});