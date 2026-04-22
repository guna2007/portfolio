const modal = document.querySelector("#imageModal");
const modalImage = modal?.querySelector(".image-modal__image");
const closeButton = modal?.querySelector(".image-modal__close");
const cpImages = document.querySelectorAll(".cp-images img");

const closeModal = () => {
  if (!modal || !modalImage) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  modalImage.alt = "";
};

cpImages.forEach((image) => {
  image.addEventListener("click", () => {
    if (!modal || !modalImage) return;
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

closeButton?.addEventListener("click", closeModal);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
