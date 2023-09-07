const body = document.querySelector('.main-container');
const parallaxBlock = document.querySelector('#parallax');
const initialParallaxHeight = parallaxBlock.offsetHeight;

parallaxBlock.style.height = '120%';

const oversizedParallax = document.querySelector('#parallax');
let indexFactor, relativeHeightDifference;


function setHeightDifference() {
    indexFactor = ((body.offsetHeight - window.innerHeight) / 100);
    relativeHeightDifference = +((oversizedParallax.offsetHeight - initialParallaxHeight) / oversizedParallax.offsetHeight).toFixed(5);
}

setHeightDifference();

document.fonts.ready.then(() => {
    setHeightDifference();
});

export function updateParallaxPosition() {
    const scrollDistance = window.scrollY;
    const relativeScrollDistance = scrollDistance / indexFactor;

    parallaxBlock.style.transform = `translateY(${relativeScrollDistance * Number(relativeHeightDifference)}%)`;
}


