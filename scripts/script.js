import {
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
  initialCards,
  components,
} from "./Constants.js"

import  {Card} from "./Card.js";
import {FormValidation} from "./validate.js";




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
  name.textContent = nameInput.value;
  description.textContent = jobInput.value;
  closePopup(editPopup);
};

function HandleCardForm(evt) {
  evt.preventDefault();
  const cardInput = { name: nameTitle.value, link: linkSource.value };
  createCard(cardInput);
  closePopup(cardPopup);
  cardForm.reset();
};

cardForm.addEventListener("submit", HandleCardForm);
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
  runValidation(components)
};

function handleEditPopup() {
  nameInput.value = name.textContent;
  jobInput.value = description.textContent;
  openPopup(editPopup);
  runValidation(components)
};


 initialCards.forEach((data) => {
  createCard(data)
}); 



const runValidation = (components) => {
  const formList = Array.from(document.querySelectorAll(components.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidation(components, formElement);
    validator.enableValidation();
    validator.resetError();
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

runValidation(components)