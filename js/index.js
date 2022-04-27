let activeSlideNumber= 1;

let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.slider__active');
    activeElement.classList.remove('slider__active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide' + slideNumber).classList.add('slider__active');
}

let showNextSlide = () => {
    if(activeSlideNumber === 3) {
        activeSlideNumber = 1;
    }else {
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlide(activeSlideNumber);
}

let showPreviousSlide = () => {
    if(activeSlideNumber === 1) {
        activeSlideNumber = 3;
    } else {
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlide(activeSlideNumber);
}

arrowLeft.addEventListener('click', showPreviousSlide);
arrowRight.addEventListener('click', showNextSlide);

const indexLink = document.querySelector(".website-link-logo");
indexLink.addEventListener("click",()=>{
    window.open("index.html","_self")
})