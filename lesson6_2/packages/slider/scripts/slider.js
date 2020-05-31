"use strict";

let slider = document.querySelector('.slider');

//Сам спиннер
let Spinner = document.createElement('i');
Spinner.classList.add('fas', 'fa-fan', 'fa-spin');
slider.insertAdjacentElement('beforebegin',Spinner);

//Кнопка налево
let LeftBtn = document.createElement('i');
LeftBtn.classList.add('fas', 'fa-angle-double-left', 'slider-leftArrow');
slider.insertAdjacentElement('beforebegin',LeftBtn);

//Кнопка на право
let RightBtn = document.createElement('i');
RightBtn.classList.add('fas', 'fa-angle-double-right', 'slider-rightArrow');
slider.insertAdjacentElement('beforebegin',RightBtn);

window.addEventListener('load', () => {
    //Убираем спиннер
    hideSpinner ();
    //Инициализируем картинки
    img.init();

    RightBtn.addEventListener('click',function () {
        img.showNextRight();
    });
    
    LeftBtn.addEventListener('click', function () {
        img.showNextLeft();
    });
});

function hideSpinner () {
    Spinner.style.display = 'none';
}


let img = {
    currentSlide: 0,
    slides: document.querySelectorAll('.slider-item'),

    showSlide (indexSlide) {
        this.slides[indexSlide].classList.remove('hidden-slide');
    },

    hideSlide () {
        document.querySelector('.slider-item:not(.hidden-slide)').classList.remove('animate__slideInRight');
        document.querySelector('.slider-item:not(.hidden-slide)').classList.remove('animate__slideInLeft');
        document.querySelector('.slider-item:not(.hidden-slide)').classList.add('hidden-slide');
    },

    showNextLeft () {
        this.hideSlide();
        if (this.currentSlide == 0) {
            this.currentSlide = this.slides.length-1;
        } else {
            this.currentSlide--;
        }
        this.slides[this.currentSlide].classList.add("animate__animated","animate__slideInLeft");
        this.showSlide(this.currentSlide);
    },

    showNextRight () {
        this.hideSlide();
        if (this.currentSlide == this.slides.length - 1) {
            this.currentSlide = 0;
        } else {
            this.currentSlide++;
        }
        this.slides[this.currentSlide].classList.add("animate__animated","animate__slideInRight");
        this.showSlide(this.currentSlide);
    },

    init () {
        this.showSlide (this.currentSlide);
    }
}