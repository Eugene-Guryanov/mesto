let openPopup = document.querySelector(".profile__edit-button");
let closePopup = document.querySelector(".popup__exit");
let popup = document.querySelector(".popup");
let name = document.getElementById("name");
let description = document.getElementById("description");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__text_name");
let jobInput = document.querySelector(".popup__text_description");
nameInput.value = name.textContent;
jobInput.value = description.textContent;

closePopup.addEventListener("click", function () {
 popup.classList.remove("popup-active");
});
openPopup.addEventListener("click", function () {
 popup.classList.add("popup-active");
});

function formSubmitHandler (evt) {
    evt.preventDefault();
 const nameValue = nameInput.value;
 const jobInputValue = jobInput.value;
 name.textContent = nameValue;
 description.textContent = jobInputValue;
 popup.classList.remove("popup-active");
}
formElement.addEventListener("submit", formSubmitHandler);