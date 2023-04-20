import Survey from "../components/Survey.js";
import { swapInputValues } from "../utils/utils.js";
import MobileMenu from "../components/MobileMenu.js";
import {
  toInput,
  fromInput,
  swapBtn,
} from '../utils/constants.js';

// Swap input values
swapBtn.addEventListener('click', () => {
  swapInputValues(toInput, fromInput);
});

// Mobile menu
const mobileMenu = new MobileMenu('.header', '.page');
mobileMenu.setEventListeners();

//Survey
const survey = new Survey({
  surveySelector: '.survey',
  handleSurvey: () => {
    setTimeout(() => {
      survey.showResults();
      survey.hideBtns();
    }, 300)
  }
});

survey.setEventListeners();
