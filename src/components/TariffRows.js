export default class TariffRows {
  constructor(rowSelector) {
    this._rows = document.querySelectorAll(rowSelector);
  }

  _toggleTxtBlock(txtBlock) {
    txtBlock.classList.toggle('tariff__txt-block_opened')
  }

  _toggleButton(btn) {
    btn.classList.toggle('tariff__button_opened');
  }

  setEventListeners() {
    this._rows.forEach((row) => {
      row.addEventListener('click', () => {
        const button = row.querySelector('.tariff__button');
        const txtBlock = row.querySelector('.tariff__txt-block');
        this._toggleTxtBlock(txtBlock);
        this._toggleButton(button);
      })
    })
  }
}
