 export class FormValidation {

constructor(components, formElement){
  this._inputSelector = components.inputSelector;
  this._submitButtonSelector = components.submitButtonSelector;
  this._inactiveButtonClass = components.inactiveButtonClass;
  this._inputErrorClass = components.inputErrorClass;
  this._errorClass = components.errorClass;
  this._formElement = formElement;
  this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
}

//показать ошибку
_showInputError = (inputElement, errorMessage) => {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
};

// спрятать ошибку
_hideInputError = (inputElement) => {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};

//проверка валидности
_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);
  }
};

_toggleButtonState = () => {
  if (this._hasInvalidInput()){
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", "disabled");
  } else{
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute("disabled");
  }
};

_setEventListeners = () => {
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
  this._toggleButtonState();
};

enableValidation = () =>  {
   this._setEventListeners();
};

// очищаем ошибки валидации
resetError = () => {
  this._inputList.forEach(inputElement => this._hideInputError(inputElement));
  this._toggleButtonState();
}

_hasInvalidInput = () => {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
}
