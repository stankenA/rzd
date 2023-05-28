const allRows = document.querySelectorAll('.disclosure__row');

allRows.forEach((row) => {
  const rowHeading = row.querySelector('.disclosure__row-heading');
  const mainList = row.querySelector('.disclosure__list-1');
  const firstArrow = row.querySelector('.disclosure__arrow');

  rowHeading.addEventListener('click', () => {
    mainList.classList.toggle('disclosure__list-1_opened');
    firstArrow.classList.toggle('disclosure__arrow_opened');
  });
})

class Disclosure {
  constructor(listItem) {
    this._item = listItem;
    this._firstHeading = this._item.querySelector('.disclosure__list-1-item-heading');
    this._firstArrow = this._item.querySelector('.disclosure__arrow');
    this._secondList = this._item.querySelector('.disclosure__list-2');
    this._secondItems = this._item.querySelectorAll('.disclosure__list-2-item');
  }

  setEventListeners() {
    this._firstHeading.addEventListener('click', () => {
      this._firstArrow.classList.toggle('disclosure__arrow_opened');
      this._secondList.classList.toggle('disclosure__list-2_opened');
    });

    this._secondItems.forEach((item) => {
      const secondHeading = item.querySelector('.disclosure__list-2-item-heading');
      const secondArrow = item.querySelector('.disclosure__arrow');
      const thirdList = item.querySelector('.disclosure__list-3');

      secondHeading.addEventListener('click', () => {
        thirdList.classList.toggle('disclosure__list-3_opened');
        secondArrow.classList.toggle('disclosure__arrow_opened');
      });

      const thirdItems = item.querySelectorAll('.disclosure__list-3-item');
      thirdItems.forEach((item) => {
        const thirdHeading = item.querySelector('.disclosure__list-3-item-heading');
        const thirdArrow = item.querySelector('.disclosure__arrow');
        const fourthList = item.querySelector('.disclosure__list-4');

        thirdHeading.addEventListener('click', () => {
          fourthList.classList.toggle('disclosure__list-4_opened');
          thirdArrow.classList.toggle('disclosure__arrow_opened');
        })
      })
    })
  }
}

const allMainListItems = document.querySelectorAll('.disclosure__list-1-item');
allMainListItems.forEach((item) => {
  const disclosureItem = new Disclosure(item);
  disclosureItem.setEventListeners();
});
