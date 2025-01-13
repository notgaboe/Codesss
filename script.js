// script.js - Adds click event to flip the photos
const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photo.classList.toggle('flipped');
    });
});
