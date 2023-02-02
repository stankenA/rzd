import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';
import Cell from '../components/Cell.js';

//Main page swiper
const infoSwiper = new Swiper('.info__swiper', {
  slidesPerView: 1,
  spaceBetween: 60,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".info__swiper-button_next",
    prevEl: ".info__swiper-button_prev",
  },
  pagination: {
    el: ".info__swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});


//Main page clickable cells
const privilegeCell = new Cell('.info__cell_type_privilege', () => {
  privilegeCell.open();
  workCell.close();
});

const workCell = new Cell('.info__cell_type_work', () => {
  privilegeCell.close();
  workCell.open();
});

const schemeCell = new Cell('.info__cell_type_scheme', () => {
  schemeCell.open();
  economyCell.close();
});

const economyCell = new Cell('.info__cell_type_economy', () => {
  schemeCell.close();
  economyCell.open();
});

const lowMobCell = new Cell('.info__cell_type_low-mob', () => {
  lowMobCell.open();
  direcotrCell.close();
});

const direcotrCell = new Cell('.info__cell_type_director', () => {
  lowMobCell.close();
  direcotrCell.open();
});

const cellsArray = [privilegeCell, schemeCell, lowMobCell, economyCell, workCell, direcotrCell];

cellsArray.forEach((cell) => {
  cell.setEventListeners();
})

