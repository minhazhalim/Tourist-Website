import './style.css';
const dataSlideContainer = document.querySelector('[data-slideContainer]');
const dataSlideButton = document.querySelectorAll('[data-slideButton]');
const dataSlide = [...document.querySelectorAll('[data-slide]')];
let currentIndex = 0;
let isMoving = false;
function handleSlideButtonClick(event){
     if(isMoving) return;
     isMoving = true;
     event.currentTarget.id === 'previous' ? currentIndex-- : currentIndex++;
     dataSlideContainer.dispatchEvent(new Event('sliderMove'));
}
dataSlideButton.forEach(button => button.addEventListener('click',handleSlideButtonClick));
const addDisabledAttribute = (els) => els.forEach(element => element.setAttribute('disabled','true'));
const removeDisabledAttribute = (els) => els.forEach(element => element.removeAttribute('disabled'));
dataSlideContainer.addEventListener('sliderMove',() => {
     dataSlideContainer.style.transform = `translateX(-${currentIndex * dataSlide[0].clientWidth}px)`;
     removeDisabledAttribute(dataSlideButton);
     currentIndex === 0 && addDisabledAttribute([dataSlideButton[0]]);
});
dataSlideContainer.addEventListener('transitionend',() => isMoving = false);
document.querySelectorAll('[data-slide] img').forEach(image => image.ondragstart = () => false);
const intersectionObserver1 = new IntersectionObserver((slide) => {
     if(slide[0].isIntersecting){
          addDisabledAttribute([dataSlideButton[1]]);
     }
},{threshold: 0.75});
intersectionObserver1.observe(dataSlide[dataSlide.length - 1]);
const contactForm = document.querySelector('#contact-form');
const contactButton = document.querySelector('#contact-button');
const email = document.querySelector('#email');
function postEmailToDatabase(email){
     return new Promise(resolve => setTimeout(resolve,2000));
}
const contactButtonOptions = {
     pending: `
          <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="32" x2="128" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="224" y1="128" x2="192" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="195.9" y1="195.9" x2="173.3" y2="173.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="224" x2="128" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="60.1" y1="195.9" x2="82.7" y2="173.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="32" y1="128" x2="64" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="60.1" y1="60.1" x2="82.7" y2="82.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
          <span class="uppercase tracking-wide animate-pulse">sending...</span>
     `,
     success: `
          <span class="uppercase tracking-wide">thank you!</span>
          <span class="uppercase tracking-wide">✌️</span>
     `,
};
async function handleFormSubmit(event){
     event.preventDefault();
     addDisabledAttribute([contactForm,contactButton]);
     contactButton.innerHTML = contactButtonOptions.pending;
     const userEmail = email.value;
     email.style.display = 'none';
     await postEmailToDatabase(userEmail);
     contactButton.innerHTML = contactButtonOptions.success;
}
contactForm.addEventListener('submit',handleFormSubmit);
function fadeUpObserverCallback(elsToWatch){
     elsToWatch.forEach((element) => {
          if(element.isIntersecting){
               element.target.classList.add('faded');
               intersectionObserver2.unobserve(element.target);
               element.target.addEventListener('transitionend',() => {
                    element.target.classList.remove('fade-up','faded');
               },{once: true});
          }
     });
}
const fadeUpObserverOptions = {threshold: 0.6};
const intersectionObserver2 = new IntersectionObserver(fadeUpObserverCallback,fadeUpObserverOptions);
document.querySelectorAll('.fade-up').forEach((item) => {
     intersectionObserver2.observe(item);
});