const components = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

//показать ошибку
const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

// спрятать ошибку
const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

//проверка валидности
const checkInputValidity = (formElement, inputElement, errorAndInputErrorClasses) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, errorAndInputErrorClasses);
  } else {
    hideInputError(formElement, inputElement, errorAndInputErrorClasses);
  }
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)){
    buttonElement.classList.add(components.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
  } else{
    buttonElement.classList.remove(components.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement, component) => {
  const inputList = Array.from(formElement.querySelectorAll(component.inputSelector));
  const buttonElement = formElement.querySelector(component.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, component);
      toggleButtonState(inputList, buttonElement);
    });
  });
  toggleButtonState(inputList, buttonElement);
};

const enableValidation = (component) => {
  const formList = Array.from(document.querySelectorAll(component.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, component);
  });
};

// очищаем ошибки валидации
const resetError = (formElement, component) => {
  const inputList = Array.from(formElement.querySelectorAll(component.inputSelector));
  const buttonElement = formElement.querySelector(component.submitButtonSelector);
  inputList.forEach(inputElement => hideInputError(formElement, inputElement, component));
  toggleButtonState (inputList, buttonElement);
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
enableValidation(components); 
