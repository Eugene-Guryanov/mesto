export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this)
    }
  
    // Приватный метод для закрытия попапа по нажатию на ESC
  
    _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  
    // Приватный метод для закрытия попапа по клику на оверлей
  
    _handleOverlayClose(evt) {
      if (evt.target.classList.contains('popup_modal_is-opened') || evt.target.classList.contains('popup__exit')) {
        this.close();
      }
    }
   
    // Публичный метод для открытия попапа с добавлением обработчика событий по закрытию на кнопку ESC
  
    open() {
      this._popup.classList.add('popup_modal_is-opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  
    // Публичный метод для закрытия попапа с удалением обработчика событий по закрытию на кнопку ESC
  
    close() {
      this._popup.classList.remove('popup_modal_is-opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  
   
    // Публичный метод для добавления обработчиков событий для попапа
  
    setEventListeners() {
      this._popup.addEventListener('click', this._handleOverlayClose.bind(this));
    }
  }
