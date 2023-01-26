// Элементы

const popupEditOpen = document.querySelector(".profile__edit-button");
const popupCardOpen = document.querySelector(".profile__add-button");
const cardForm = document.querySelector(".popup__form_type_add");
const editForm = document.querySelector(".popup__form_type_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const nameTitle = document.querySelector(".popup__input_type_title");
const linkSource = document.querySelector(".popup__input_type_source");
const linkPopupImg = document.querySelector(".popup__image");
const titlePopupImg = document.querySelector(".popup__description");
const profileAvatarButton = document.querySelector(".profile__avatar-button");
const popupButtonConfirm = document.querySelector(".popup__button-confirm");
const formValidators = {};

// Селекторы

const elementPageItem = ".elements";
const elementTemplate = ".element-template";
const cardPopup = ".popup-add";
const editPopup = ".popup-edit";
const imagePopup = ".popup-image";
const popupConfirm = ".popup-confirm";
const popupChange = ".popup-update";
const name = ".profile__name";
const avatar = ".profile__avatar";
const description = ".profile__description";
// Массивы


// Объекты 

const components = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


export {
popupEditOpen, 
name,
description,
cardForm,
editForm,
nameInput,
jobInput,
popupCardOpen,
elementPageItem,
elementTemplate,
cardPopup,
editPopup,
nameTitle,
linkSource,
linkPopupImg,
titlePopupImg,
imagePopup,
components,
popupConfirm,
popupChange,
formValidators,
profileAvatarButton,
popupButtonConfirm,
avatar,
}