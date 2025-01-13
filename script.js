// script.js (No changes needed from the previous version)
const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photo.classList.toggle('flipped');
    });
});
