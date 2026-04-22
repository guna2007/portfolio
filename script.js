document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll(".reveal, .reveal-card");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -70px" },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const cpImages = document.querySelectorAll(".cp-images img");
const imageModal = document.getElementById("imageModal");
const modalImage = imageModal?.querySelector(".image-modal__image");
const modalCloseButton = imageModal?.querySelector(".image-modal__close");

if (cpImages.length && imageModal && modalImage && modalCloseButton) {
  const openModal = (img) => {
    modalImage.src = img.currentSrc || img.src;
    modalImage.alt = img.alt || "Expanded competitive programming screenshot";
    imageModal.classList.add("is-open");
    imageModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    imageModal.classList.remove("is-open");
    imageModal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    modalImage.alt = "";
    document.body.style.overflow = "";
  };

  cpImages.forEach((img) => {
    img.addEventListener("click", () => openModal(img));
  });

  modalCloseButton.addEventListener("click", closeModal);

  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && imageModal.classList.contains("is-open")) {
      closeModal();
    }
  });
}
