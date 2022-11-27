import  {Card} from "./Card.js";
import {FormValidation} from "./validate.js";
const popupEditOpen = document.querySelector(".profile__edit-button");
const name = document.getElementById("name");
const description = document.getElementById("description");
const cardForm = document.querySelector(".popup__form_type_add");
const editForm = document.querySelector(".popup__form_type_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const popupCardOpen = document.querySelector(".profile__add-button");
const elementPageItem = document.querySelector(".elements");
const elementTemplate = document.querySelector(".element-template");
const cardPopup = document.querySelector(".popup-add");
const editPopup = document.querySelector(".popup-edit");
const nameTitle = document.querySelector(".popup__input_type_title");
const linkSource = document.querySelector(".popup__input_type_source");
const linkPopupImg = document.querySelector(".popup__image");
const titlePopupImg = document.querySelector(".popup__description");
const imagePopup = document.querySelector(".popup-image");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const components = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};



function openPopup(modalWindow) {
  modalWindow.classList.add("popup_modal_is-opened");
  document.addEventListener('keydown', closeByEsc);
  modalWindow.addEventListener('click', closeByClick);
};

function handleImagePopup() {
  openPopup(imagePopup);
};

function handleCardClick(name, link) {
  titlePopupImg.textContent = name;
  linkPopupImg.setAttribute("src", link);
  linkPopupImg.setAttribute("alt", name);
  handleImagePopup();
};

function editFormHandler(evt) {
  evt.preventDefault();
  closePopup(editPopup);
  name.textContent = nameInput.value;
  description.textContent = jobInput.value;
};

function cardFormHandler(evt) {
  evt.preventDefault();
  closePopup(cardPopup);
  const cardInput = { name: nameTitle.value, link: linkSource.value };
  createCard(cardInput);
  cardForm.reset();
};

cardForm.addEventListener("submit", cardFormHandler);
editForm.addEventListener("submit", editFormHandler);

//открытие попапа добавления карточки
popupCardOpen.addEventListener("click", handleCardPopup);

// попап редактирования профиля
popupEditOpen.addEventListener("click", handleEditPopup);

// функция закрытия попапа

function closeByClick (evt){
  if (evt.target.classList.contains("popup_modal_is-opened") || evt.target.classList.contains('popup__exit')) {
    closePopup(evt.currentTarget);
}
};


function closeByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector(".popup_modal_is-opened");
      closePopup(openedPopup);
    }
};

function closePopup(modalWindow) {
  modalWindow.classList.remove('popup_modal_is-opened');
  document.removeEventListener('keydown', closeByEsc);
  modalWindow.removeEventListener('click', closeByClick);
};

//функция открытия попапов


function handleCardPopup() {
  openPopup(cardPopup);
};

function handleEditPopup() {
  openPopup(editPopup);
  nameInput.value = name.textContent;
  jobInput.value = description.textContent;
};


 initialCards.forEach((data) => {
  createCard(data)
}); 


const Validation = (components) => {
  const formList = Array.from(document.querySelectorAll(components.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidation(components, formElement);
    validator.enableValidation();
  });
};

function createCard(data){
  // Создадим экземпляр карточки
  const card = new Card(data, elementTemplate, handleCardClick);
  // Создаём карточку и возвращаем наружу
  const elementCard = card.getCard();

  // Добавляем в DOM
  elementPageItem.prepend(elementCard);
}

Validation(components)