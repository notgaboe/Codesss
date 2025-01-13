// script.js
const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photo.classList.toggle('flipped');
    });
});