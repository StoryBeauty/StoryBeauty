document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-item");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    lightbox.innerHTML = `
        <button class="close">&times;</button>
        <button class="prev">&#10094;</button>
        <img src="" alt="Fullscreen Image">
        <button class="next">&#10095;</button>
    `;

    const lightboxImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".close");
    const prevButton = lightbox.querySelector(".prev");
    const nextButton = lightbox.querySelector(".next");

    let currentIndex = 0;
    let allImages = Array.from(images);

    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            currentIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        if (!allImages[currentIndex]) return;
        lightboxImage.src = allImages[currentIndex].src;
        lightbox.style.display = "flex";
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % allImages.length;
        updateLightboxImage();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
        updateLightboxImage();
    }

    function updateLightboxImage() {
        if (allImages.length > 0) {
            lightboxImage.src = allImages[currentIndex].src;
        }
    }

    closeButton.addEventListener("click", closeLightbox);
    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    // Close lightbox on outside click
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox || e.target === closeButton) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeLightbox();
        }
    });
});
