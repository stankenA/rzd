import TariffRows from "../components/TariffRows.js";
import Survey from "../components/Survey.js";
import {
  toInput,
  fromInput,
  swapBtn,

} from '../utils/constants.js'

// Clickable tariff rows
const tariffRows = new TariffRows('.tariff__row_clickable');
tariffRows.setEventListeners();

// Swap input values
function swapInputValues(firstInput, secondInput) {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;

  firstInput.value = secondValue;
  secondInput.value = firstValue;
}

swapBtn.addEventListener('click', () => {
  swapInputValues(toInput, fromInput);
})

//Survey

const survey = new Survey('.survey');
survey.setEventListeners();
