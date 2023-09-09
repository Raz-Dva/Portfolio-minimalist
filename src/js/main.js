import { updateParallaxPosition} from './parallax-effect';
import {headerCounter} from './header-counter';
import {anchorScrolling} from './anchor-scrolling'

window.addEventListener("scroll", updateParallaxPosition);
window.addEventListener("resize", updateParallaxPosition);

headerCounter();
anchorScrolling();
