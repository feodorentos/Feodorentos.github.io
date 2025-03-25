// Карусель отзывы

let carouselItems = document.querySelectorAll('.carousel-item');
let dots = document.querySelectorAll('.dot');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let currentSlide = 0;

prevButton.addEventListener('click', () => {
    showPrevSlide();
});

nextButton.addEventListener('click', () => {
    showNextSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

function showSlide(n) {
    carouselItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    carouselItems[n].classList.add('active');
    dots[n].classList.add('active');
    currentSlide = n;
}

function showNextSlide() {
    if (currentSlide < carouselItems.length - 1) {
        showSlide(currentSlide + 1);
    } else {
        showSlide(0);
    }
}

function showPrevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    } else {
        showSlide(carouselItems.length - 1);
    }
}







// header button


const navMedia = document.querySelector('#nav-media');
const navBtn = document.querySelector('#nav-btn');
const navCross = document.querySelector('#nav-cross');



navBtn.addEventListener('click', function() {
    navMedia.style.display = 'flex'; // Показываем элемент
});

navCross.addEventListener('click', function() {
    navMedia.style.display = 'none'; // Скрываем элемент
});




AOS.init({
    once: true
});