// Force reload the page when clicking the "Portfolio" link in the nav bar
document.querySelectorAll('a[href="portfolio.html"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        window.location.href = 'portfolio.html'; // Force reload
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeButton = document.querySelector('.lightbox .close');
    const prevButton = document.querySelector('.lightbox .prev');
    const nextButton = document.querySelector('.lightbox .next');

    let currentIndex = 0;

    const showLightbox = (index) => {
        currentIndex = index;
        lightboxImg.src = galleryItems[currentIndex].src;
        lightbox.style.display = 'flex';
    };

    const hideLightbox = () => {
        lightbox.style.display = 'none';
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        lightboxImg.src = galleryItems[currentIndex].src;
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        lightboxImg.src = galleryItems[currentIndex].src;
    };

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => showLightbox(index));
    });

    closeButton.addEventListener('click', hideLightbox);
    prevButton.addEventListener('click', showPrev);
    nextButton.addEventListener('click', showNext);

    document.addEventListener('keydown', (event) => {
        if (lightbox.style.display === 'flex') {
            if (event.key === 'ArrowLeft') showPrev();
            if (event.key === 'ArrowRight') showNext();
            if (event.key === 'Escape') hideLightbox();
        }
    });
});

// Remove forced reload for portfolio link
document.querySelectorAll('a[href="portfolio.html"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default only when needed
        if (window.location.pathname !== '/portfolio.html') {
            window.location.href = 'portfolio.html'; // Redirect only if not on portfolio
        }
    });
});

if (category.includes("products")) {
    category = "products";  // Normalize the category name
}

if (category === 'all' || category === 'show all') {
    container.style.display = 'block'; // Show everything
}

function showCategory(category) {
    console.log(`Selected category: ${category}`);
    const categoryContainers = document.querySelectorAll('.category-container');

    // Fix "Show all" button
    if (category.toLowerCase() === 'show all' || category === 'all') {
        categoryContainers.forEach(container => {
            container.style.display = 'block';
            console.log(`Displayed: ${container.dataset.category}`);
        });
        return; // Stop execution here
    }

    // Fix "Products we use" button
    if (category.toLowerCase().includes("products")) {
        category = "products"; // Normalize category name
    }

    categoryContainers.forEach(container => {
        if (container.dataset.category === category) {
            container.style.display = 'block'; // Show matching category
            console.log(`Displayed: ${container.dataset.category}`);
        } else {
            container.style.display = 'none'; // Hide others
            console.log(`Hidden: ${container.dataset.category}`);
        }
    });
}
