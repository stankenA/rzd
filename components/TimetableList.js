export default class TimetableList {
  constructor(timetableColumn) {
    this._column = timetableColumn;
    this._button = this._column.querySelector('.timetable__button');
    this._arrow = this._column.querySelector('.timetable__column-arrow');
    this._list = this._column.querySelector('.timetable__column-list');
  }

  _toggleArrow() {
    this._arrow.classList.toggle('timetable__column-arrow_opened');
  }

  _toggleList() {
    this._list.classList.toggle('timetable__column-list_opened')

    if (this._list.classList.contains('timetable__column-list_opened')) {
      this._list.style.height = `${this._list.scrollHeight}px`;
    } else {
      this._list.style.height = '0px';
    }
  }

  setEventListeners() {
    this._button.addEventListener('click', () => {
      this._toggleArrow();
      this._toggleList();
    })
  }
}
