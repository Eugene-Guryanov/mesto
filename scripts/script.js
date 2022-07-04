let openPopupEdit = document.querySelector(".profile__edit-button");
let closePopup = document.querySelectorAll(".popup__exit");
let popup = document.querySelectorAll(".popup");
let name = document.getElementById("name");
let description = document.getElementById("description");
let title = document.getElementById("title");
let source = document.getElementById("source");
const addForm = document.querySelector(".popup__form_type_add");
const editForm = document.querySelector(".popup__form_type_edit");
let nameInput = document.querySelector(".popup__text_type_name");
let jobInput = document.querySelector(".popup__text_type_description");
let openPopupAdd = document.querySelector(".profile__add-button");
let elementPageItem = document.querySelector(".elements");
let elementTemplate = document.querySelector(".element-template").content;
let popupAdd = document.querySelector(".popup-add");
let popupEdit = document.querySelector(".popup-edit");
let popupImage = document.querySelector(".popup-image");
let initialCards = [
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

// удаление карточки
function handleDelete(btn) {
  btn.target.closest(".element").remove();
}
// функция лайка
function handleLike(evt) {
  let like = evt.target.closest(".element").querySelector(".element__like");
  if (like.classList.contains("element__like_active")) like.classList.remove("element__like_active");
  else like.classList.add("element__like_active");
}
// добаление карточки из массива
function renderCard(card) {
  const elementCard = elementTemplate.cloneNode(true);
  elementCard.querySelector(".element__title").textContent = card.name;
  const placeImg = elementCard.querySelector(".element__image");
  placeImg.src = card.link;
  placeImg.alt = card.name;
  setEventListener(elementCard);
  elementPageItem.append(elementCard);
}

initialCards.forEach(renderCard);

function handleImg(evt) {
  document.querySelector(".popup__description").textContent = evt.target.closest(".element").querySelector(".element__title").textContent;
  let linkImg = evt.target.closest(".element").querySelector(".element__image").src;
  document.querySelector(".popup__image").setAttribute("src", linkImg);
}
// слушатели для карточек
function setEventListener(elementCard) {
  const deleteButton = elementCard.querySelector(".element__delete");
  deleteButton.addEventListener("click", handleDelete);
  const likeButton = elementCard.querySelector(".element__like");
  likeButton.addEventListener("click", handleLike);
  const popupImage = elementCard.querySelector(".element__image");
  popupImage.addEventListener("click", handleImg);
}
// функция закрытия попапа
function exit() {
  popup.forEach((pop) => {
    pop.classList.remove("popup_modal_is-opened");
  });
}
closePopup.forEach((close) => {
  close.addEventListener("click", exit);
});
// попап редактирования профиля
openPopupEdit.addEventListener("click", function () {
  popupEdit.classList.add("popup_modal_is-opened");
  nameInput.value = name.textContent;
  jobInput.value = description.textContent;
});

function editFormHandler(evt) {
  evt.preventDefault();
  exit();
  name.textContent = nameInput.value;
  description.textContent = jobInput.value;
}

function addFormHandler(evt) {
  evt.preventDefault();
  exit();
  const addInput = { name: document.querySelector(".popup__text_type_title").value, link: document.querySelector(".popup__text_type_sorce").value };
  renderCard(addInput);
}

addForm.addEventListener("submit", addFormHandler);
editForm.addEventListener("submit", editFormHandler);

//открытие попапа добавления карточки
openPopupAdd.addEventListener("click", function () {
  popupAdd.classList.add("popup_modal_is-opened");
});

// открытие попапа с картинкой
let elementImage = document.querySelectorAll(".element__image");

elementImage.forEach((img) => {
  img.addEventListener("click", function () {
    popupImage.classList.add("popup_modal_is-opened");
  });
});
