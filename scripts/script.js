const openPopup = document.querySelector(".profile__edit-button");
const closePopup = document.querySelector(".popup__exit");
let popup = document.querySelector(".popup");
let name = document.getElementById("name");
let description = document.getElementById("description");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__text_type_name");
let jobInput = document.querySelector(".popup__text_type_description");

function exit() {
    popup.classList.remove("popup_type_edit");
}
closePopup.addEventListener("click", exit);
openPopup.addEventListener("click", function () {
 popup.classList.add("popup_type_edit");
 nameInput.value = name.textContent;
jobInput.value = description.textContent;
});

function formSubmitHandler (evt) {
 evt.preventDefault();
 name.textContent = nameInput.value;
 description.textContent = jobInput.value; 
 exit();
}
formElement.addEventListener("submit", formSubmitHandler)
