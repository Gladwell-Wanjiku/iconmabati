
const images = document.querySelectorAll('.mbt');
let currentImage = 0;

function showImage(index) {
    images[currentImage].classList.remove('active');
    images[index].classList.add('active');
    currentImage = index;
}

function nextImage() {
    showImage((currentImage + 1) % images.length);
}

function prevImage() {
    showImage((currentImage - 1 + images.length) % images.length);
}

document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);

setInterval(nextImage, 2000);
