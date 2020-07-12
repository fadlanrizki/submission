const imageSlider = document.querySelector('.img-slider');
const images = document.querySelectorAll('.img-slider img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let Counter = 1;
const size = images[0].clientWidth;
imageSlider.style.transform = 'translateX(' + (-size * Counter) + 'px)';

// Button listeners
nextBtn.addEventListener('click', function (event) {
    if (Counter >= images.length - 1) return;
    imageSlider.style.transition = "transform 0.4s ease-in-out"
    Counter++;
    imageSlider.style.transform = 'translateX(' + (-size * Counter) + 'px)';
});

prevBtn.addEventListener('click', function (event) {
    if (Counter <= 0) return;
    imageSlider.style.transition = "transform 0.4s ease-in-out"
    Counter--;
    imageSlider.style.transform = 'translateX(' + (-size * Counter) + 'px)';
});

// FIX BUG
imageSlider.addEventListener('transitionend', function (event) {
    if (images[Counter].id === 'lastClone') {
        imageSlider.style.transition = "none";
        Counter = images.length - 2;
        imageSlider.style.transform = 'translateX(' + (-size * Counter) + 'px)';
    }
    if (images[Counter].id === 'firstClone') {
        imageSlider.style.transition = "none";
        Counter = images.length - Counter;
        imageSlider.style.transform = 'translateX(' + (-size * Counter) + 'px)';
    }
})