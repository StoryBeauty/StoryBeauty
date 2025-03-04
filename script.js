document.addEventListener("DOMContentLoaded", function () {
    function showCategory(category) {
        console.log("Filtering category:", category); // Debugging Log

        const categories = document.querySelectorAll(".category-container");

        categories.forEach((container) => {
            console.log("Checking:", container.dataset.category); // Debugging Log
            if (category === "all" || container.dataset.category === category) {
                container.style.display = "block";
                console.log("Showing:", container.dataset.category);
            } else {
                container.style.display = "none";
            }
        });
    }

    // Ensure Show All is active on load
    showCategory("all");

    // Attach event listeners dynamically
    document.querySelectorAll(".filter-buttons button").forEach(button => {
        button.addEventListener("click", function () {
            const category = this.dataset.filter;
            console.log("Button clicked:", category);
            showCategory(category);
        });
    });
});
let currentIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = document.querySelectorAll(".slide").length;

function updateSlider() {
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

// Auto-scroll every 3 seconds
setInterval(nextSlide, 3000);

// Allow clicking on dots to navigate
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });
});