import './index.css';
import  Card from "../components/Card.js";
import FormValidation from "../components/validate.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm";
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
  formValidators,
} from "../components/Constants.js";


const runValidation = (components) => {
  const formList = Array.from(document.querySelectorAll(components.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidation(components, formElement);
    validator.enableValidation();
    validator.resetError();
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
  });
};



const createCard = (data) => {
  // Создадим экземпляр карточки
 const card =  new Card( {
  data: data,
    handleCardClick: () => {
      popupWithPicture.open(data);
    },
  },
  elementTemplate
);
const cardElement =  card.getCard();
section.addItem(cardElement)

}


const popupWithPicture = new PopupWithImage(imagePopup);


const section = new Section ({ renderer: (data) => {
   createCard(data);
  }
  },elementPageItem
) 

const userInfo = new UserInfo({
  name: name,
  description: description,
});

const popupProfileEdit = new PopupWithForm(editPopup, () => {
  userInfo.setUserInfo(jobInput, nameInput);
});


popupEditOpen.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.description;
  formValidators['edit-form'].resetError();
  popupProfileEdit.open();
});

const popupCardAdd = new PopupWithForm(cardPopup, (data) => {
createCard(data);
});


popupCardOpen.addEventListener('click', () => {
  formValidators['add-form'].resetError();
  popupCardAdd.open();
});


popupCardAdd.setEventListeners();
popupProfileEdit.setEventListeners();
popupWithPicture.setEventListeners();
section.renderItems(initialCards);
runValidation(components)