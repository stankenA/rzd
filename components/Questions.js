export default class Questions {
  constructor(questionsSelector) {
    this._questions = Array.from(document.querySelectorAll(questionsSelector));
  }

  _toggleContainer(container) {
    container.classList.toggle('questions__container_opened');

    if (container.classList.contains('questions__container_opened')) {
      container.style.height = `${container.scrollHeight}px`;
    } else {
      container.style.height = '0px';
    }
  }

  _toggleBtnTxt(buttonTxt, container) {

    if (container.classList.contains('questions__container_opened')) {
      buttonTxt.textContent = 'скрыть ответ';
    } else {
      buttonTxt.textContent = 'показать ответ';
    }
  }

  _toggleArrow(arrow) {
    arrow.classList.toggle('questions__arrow_opened');
  }

  _toggleButton(button) {
    button.classList.toggle('questions__button_opened');
  }

  setEventListeners() {
    this._questions.forEach((question) => {
      const button = question.querySelector('.questions__button');
      const buttonTxt = question.querySelector('.questions__button-txt');
      const container = question.querySelector('.questions__container');
      const arrow = question.querySelector('.questions__arrow');

      button.addEventListener('click', () => {
        this._toggleContainer(container);
        this._toggleBtnTxt(buttonTxt, container);
        this._toggleArrow(arrow);
        this._toggleButton(button);
      })
    })
  }
}
