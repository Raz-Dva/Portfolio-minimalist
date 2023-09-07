import { updateParallaxPosition} from './parallax-effect';
import {headerCounter} from './header-counter';

window.addEventListener("scroll", updateParallaxPosition);
window.addEventListener("resize", updateParallaxPosition);

headerCounter();



