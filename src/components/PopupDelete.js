import  Popup  from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm =  this._popup.querySelector(('.popup__form'))
    this._popupButton = this._popupForm.querySelector('.popup__button-confirm');
    this._popupButtonText = this._popupButton.textContent;
  }


  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }


  renderLoading(isLoading) {
    if (isLoading) {
      this._popupButton.textContent = 'Сохранение...';
    } else {
      this._popupButton.textContent = 'Да';
    }
  }
}