const openEditPopup = document.querySelector(".profile__edit-button");
const closePopupList = document.querySelectorAll(".popup__exit");
const popupList = document.querySelectorAll(".popup");
const name = document.getElementById("name");
const description = document.getElementById("description");
const cardForm = document.querySelector(".popup__form_type_add");
const editForm = document.querySelector(".popup__form_type_edit");
const nameInput = document.querySelector(".popup__text_type_name");
const jobInput = document.querySelector(".popup__text_type_description");
const openCardPopup = document.querySelector(".profile__add-button");
const elementPageItem = document.querySelector(".elements");
const elementTemplate = document.querySelector(".element-template").content;
const title = elementTemplate.querySelector("#title");
const source = elementTemplate.querySelector("#source");
const cardPopup = document.querySelector(".popup-add");
const editPopup = document.querySelector(".popup-edit");
const imagePopup = document.querySelector(".popup-image");
const nameTitle = document.querySelector(".popup__text_type_title");
const linkSource = document.querySelector(".popup__text_type_sorce");
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
const linkPopupImg = document.querySelector(".popup__image");
const titlePopupImg = document.querySelector(".popup__description");

// удаление карточки
function handleDelete(btn) {
  btn.target.closest(".element").remove();
}
// функция лайка
function handleLike(evt) {
  evt.target.closest(".element").querySelector(".element__like").classList.toggle("element__like_active");
}

// добаление карточки из массива
function createCard(card) {
  const elementCard = elementTemplate.cloneNode(true);
  elementCard.querySelector(".element__title").textContent = card.name;
  const placeImg = elementCard.querySelector(".element__image");
  placeImg.src = card.link;
  placeImg.alt = card.name;
  setEventListener(elementCard);
  renderCard(elementCard);
  return;
}

function renderCard(elementCard) {
  elementPageItem.prepend(elementCard);
}

initialCards.forEach(createCard);

// слушатели для карточек
function setEventListener(elementCard) {
  const deleteButton = elementCard.querySelector(".element__delete");
  deleteButton.addEventListener("click", handleDelete);
  const likeButton = elementCard.querySelector(".element__like");
  likeButton.addEventListener("click", handleLike);
  const popupImage = elementCard.querySelector(".element__image");
  popupImage.addEventListener("click", handleImg);
  popupImage.addEventListener("click", handleImagePopup);
}

function handleImg(evt) {
  const titleImg = evt.target.closest(".element").querySelector(".element__title").textContent;
  const linkImg = evt.target.closest(".element").querySelector(".element__image").src;
  titlePopupImg.textContent = titleImg;
  linkPopupImg.setAttribute("src", linkImg);
  linkPopupImg.setAttribute("alt", titleImg);
}

function editFormHandler(evt) {
  evt.preventDefault();
  closePopup(editPopup);
  name.textContent = nameInput.value;
  description.textContent = jobInput.value;
}

function cardFormHandler(evt) {
  evt.preventDefault();
  closePopup(cardPopup);
  const cardInput = { name: nameTitle.value, link: linkSource.value };
  createCard(cardInput);
  nameTitle.value = "";
  linkSource.value = "";
}

cardForm.addEventListener("submit", cardFormHandler);
editForm.addEventListener("submit", editFormHandler);

//открытие попапа добавления карточки
openCardPopup.addEventListener("click", handleCardPopup);

// попап редактирования профиля
openEditPopup.addEventListener("click", handleEditPopup);

// функция закрытия попапа

closePopupList.forEach((evt) => {
  evt.addEventListener("click", closePopup);
});

function closePopup() {
  imagePopup.classList.remove("popup_modal_is-opened");
  cardPopup.classList.remove("popup_modal_is-opened");
  editPopup.classList.remove("popup_modal_is-opened");
}

//функция открытия попапов

function openPopup(popup) {
  popup.classList.add("popup_modal_is-opened");
}

function handleImagePopup() {
  openPopup(imagePopup);
}

function handleCardPopup() {
  openPopup(cardPopup);
}

function handleEditPopup() {
  openPopup(editPopup);
  nameInput.value = name.textContent;
  jobInput.value = description.textContent;
}