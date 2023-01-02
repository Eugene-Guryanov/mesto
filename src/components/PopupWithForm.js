//import Popup from "./Popup.js"
//
//export default class PopupWithForm extends Popup {
//    constructor(popupSelector, callbackSubmit){
//        super(popupSelector);
//        this._callback = callbackSubmit;
//        this._popupForm = this._popup.querySelector('.popup__form');
//    }
//    
//      setEventListeners() {
//        super.setEventListeners();
//        this._popupForm.addEventListener('submit', (evt) => {
//          evt.preventDefault();
//          const inputElement = { name: this._popupForm.querySelector('popup__input_type_title').value, link: this._popupForm.querySelector('popup__input_type_source').value };
//          this._callback(inputElement);
//          this.close();  
//        });
//      }
//    
//      close() {
//        super.close();
//        this._popupForm.reset();
//      }
//}
import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._callback = submitCallback;

    this._popupForm = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._popupFormInputs = this._popupForm.querySelectorAll('.popup__input');
    this._newValues = {};
    this._popupFormInputs.forEach((inputElement) => {
      this._newValues[inputElement.name] = inputElement.value;
    });
    return this._newValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm?.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._callback(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}