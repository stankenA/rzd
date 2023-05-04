import { swapInputValues } from '../utils/utils.js';
import MobileMenu from '../components/MobileMenu.js';
import {
  toInput,
  fromInput,
  swapBtn
} from '../utils/constants.js';

// Swap input values
swapBtn.addEventListener('click', () => {
  swapInputValues(toInput, fromInput);
});


// Mobile menu
const mobileMenu = new MobileMenu('.header', '.page');
mobileMenu.setEventListeners();
