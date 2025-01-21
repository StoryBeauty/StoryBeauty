// Get lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.querySelector('.lightbox .close');

// Add click event to all images in the gallery
document.querySelectorAll('.gallery-item').forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
});

// Close the lightbox when clicking the close button
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking anywhere outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImage) {
        lightbox.style.display = 'none';
    }
});