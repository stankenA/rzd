import { swapInputValues } from '../utils/utils.js';
import MobileMenu from '../components/MobileMenu.js';
import {
  toInput,
  fromInput,
  swapBtn
} from '../utils/constants.js';
import TimetableList from '../components/TimetableList.js';

// Swap input values
swapBtn.addEventListener('click', () => {
  swapInputValues(toInput, fromInput);
});


// Mobile menu
const mobileMenu = new MobileMenu('.header', '.page');
mobileMenu.setEventListeners();

// Timetable

const timetableColumns = document.querySelectorAll('.timetable__column');
timetableColumns.forEach((column) => {
  const columnClass = new TimetableList(column);
  columnClass.setEventListeners();
});

