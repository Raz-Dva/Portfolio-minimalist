import { updateParallax } from './parallax-effect';

window.addEventListener("scroll", updateParallax)

const headers = document.getElementsByClassName('section-header');
let counter = 0;

Array.from(headers).forEach((el) => {
    let number = counter < 10 ? `0${counter}` : counter.toString();

    el.textContent = `${el.textContent} ${number}`;
    counter++;
})
