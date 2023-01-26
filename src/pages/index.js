import './index.css';
import  Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
import  PopupDelete  from '../components/PopupDelete.js';
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
  popupConfirm,
  popupChange,
  formValidators,
  profileAvatarButton,
  popupButtonConfirm,
  avatar,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
 headers: {
   authorization: 'e8a00538-06eb-4bf4-9ee5-2d02ccb49463',
    'Content-Type': 'application/json'
  }
});

let userId;

Promise.all([api.getInitialCards(), api.getUser()])
 .then(([cards, userData]) => {
  
  userInfo.fill(userData);
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar();
   userId = userData._id;
    section.renderItems(cards);

 })
 .catch((err) => console.log(err));

const runValidation = (components) => {
  const formList = Array.from(document.querySelectorAll(components.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidation(components, formElement);
    validator.enableValidation();
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
    handleDeleteConfirm: () => {
      popupWithConfirm.setSubmitAction(() => {
        popupWithConfirm.renderLoading(true)
        api.deleteCard(data._id)
          .then(() => {
            card.deleteCard();
            popupWithConfirm.close()
          })
          .catch((err) => console.log(err))
          .finally(() => popupWithConfirm.renderLoading(false))
      })
      popupWithConfirm.open(); 
    },
    handleLikeClick: (id) => {
     if(card.isLiked()) {
        api.deleteLike(id)
          .then((res) => {
            card.updateLikes(res);
     })
          .catch((err) => console.log(err))
     } else {
         api.putLike(id)
          .then((res) => {
            card.updateLikes(res);
    })
    .catch((err) => console.log(err))
    }
  }
},
  elementTemplate,
  userId
);
return card.getCard()
}

const popupWithConfirm  = new PopupDelete(popupConfirm);
const popupChangeAvatar = new PopupWithForm(popupChange,  (data) => {
  popupChangeAvatar.renderLoading(true);

  api.setAvatar(data)
  .then((res) => {
      userInfo.fill(res);
      userInfo.setUserAvatar();
      popupChangeAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupChangeAvatar.renderLoading(false));
});

const popupWithPicture = new PopupWithImage(imagePopup);


const section = new Section ({ renderer: (data) => { 
  section.addItem(createCard(data)) 
  }
  },elementPageItem
) 

const userInfo = new UserInfo({
  name: name,
  description: description,
  avatar: avatar,
});

const popupProfileEdit = new PopupWithForm( editPopup,  (data) => {
popupProfileEdit.renderLoading(true);
    api.setUserInfo(data)
      .then((res) => {
        userInfo.fill(res)
        userInfo.setUserInfo(res)
        popupProfileEdit.close();
      })
      .catch((err) => console.log(err))
      .finally(() => popupProfileEdit.renderLoading(false));
  });


popupEditOpen.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.description;
  formValidators['edit-form'].resetError();
  popupProfileEdit.open();
  
});
console.log(userInfo.getUserInfo)
const popupCardAdd = new PopupWithForm(cardPopup, (data) => {
  popupCardAdd.renderLoading(true);
  api
    .newCard(data.title, data.source)
    .then((res) => {
      section.addItem(createCard(res));
      popupCardAdd.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupCardAdd.renderLoading(false)); 
});


popupCardOpen.addEventListener('click', () => {
  formValidators['add-form'].resetError();
  popupCardAdd.open();
});
profileAvatarButton.addEventListener('click',() => {
  formValidators['update-form'].resetError();
  popupChangeAvatar.open();
})




popupChangeAvatar.setEventListeners();
popupWithConfirm.setEventListeners();
popupCardAdd.setEventListeners();
popupProfileEdit.setEventListeners();
popupWithPicture.setEventListeners();
runValidation(components)