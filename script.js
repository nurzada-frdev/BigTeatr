let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

let offset = 0;
const sliderline = document.querySelector('.hero--book__book-slider')

document.querySelector('.hero--book__book-slider--btn__slide-prev').addEventListener('click', function () {
    offset = offset + 270;  //offset+=270
    if (offset > 540){
        offset = 0;
    }
    sliderline.style.left = -offset + 'px';
});
document.querySelector('.hero--book__book-slider--btn__slide-next').addEventListener('click', function () {
    offset = offset - 270; //offset-=270
    if (offset < 0){
        offset = 540;
    }
    sliderline.style.left = -offset + 'px';
});