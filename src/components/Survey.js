export default class Survey {
  constructor(surveySelector) {
    this._survey = document.querySelector(surveySelector);
    this._list = this._survey.querySelector('.survey__list');
    this._results = this._survey.querySelectorAll('.survey__result');
    this._labels = this._survey.querySelectorAll('.survey__label');
  }

  _showResults() {
    this._results.forEach((res) => {
      res.classList.add('survey__result_checked')
    })
  }

  _hideBtns() {
    this._list.classList.add('survey__list_checked');
  }

  setEventListeners() {
    this._labels.forEach((label) => {
      label.addEventListener('click', () => {
        setTimeout(() => {
          this._showResults();
          this._hideBtns();
        }, 1000)
      })
    })
  }
}
