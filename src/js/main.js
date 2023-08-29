const mainHeight = document.querySelector('main');
const indexFactor = ((mainHeight.offsetHeight - window.innerHeight)/100);
const parallaxBlock = document.querySelector('#block-parallax');
const initialBlockHeight = parallaxBlock.offsetHeight;

parallaxBlock.style.height = '120%';

const oversizedBlock = document.querySelector('#block-parallax');
const relativeHeightDifference = ((oversizedBlock.offsetHeight - initialBlockHeight) / oversizedBlock.offsetHeight).toFixed(2);
    // console.log(relativeHeightDifference);

function updateParallax(){
    const scrollDistance = window.scrollY;
    const relativeScrollDistance = scrollDistance / indexFactor;

    parallaxBlock.style.transform = `translateY(${relativeScrollDistance * relativeHeightDifference}%)`
}

window.addEventListener("scroll", updateParallax)
