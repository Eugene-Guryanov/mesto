
export default class Card {
   
    constructor({data, handleCardClick, handleDeleteConfirm, handleLikeClick}, elementTemplateSelector, userId){
        this._cardName = data.name;
        this._cardLink = data.link;
        this._cardLikes = data.likes;
        this._elementTemplateSelector = document.querySelector(elementTemplateSelector);
        this._handleCardClick = handleCardClick;
        this._handleDeleteConfirm  = handleDeleteConfirm;
        this._handleLikeClick = handleLikeClick;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;
    }

    _getTemplate() {
    const newCard = this._elementTemplateSelector
    .content
    .querySelector('.element')
    .cloneNode(true);
    return newCard;
    };

    getCard() {
        this._newCard = this._getTemplate();
        this._imageCard = this._newCard.querySelector(".element__image");
        this._imageCard.src = this._cardLink;
        this._imageCard.alt = this._cardName;
        this._buttonDelete = this._newCard.querySelector('.element__delete');
        this._btnLikeCard = this._newCard.querySelector('.element__like');
        this._likeCounter = this._newCard.querySelector('.element__like-counter');
        this._newCard.querySelector(".element__title").textContent = this._cardName;
        this._setEventListeners();
      if (this._userId !== this._ownerId){
       this._buttonDelete.style.display = 'none';
      }
      this.likeCard();
      this.updateLikesCounter(this._cardLikes);
        return this._newCard;
    };

    _setEventListeners() {
      this._btnLikeCard.addEventListener('click', () => {
        this._handleLikeClick(this._id);
      });
    
      this._buttonDelete.addEventListener('click', () => {
        this._handleDeleteConfirm(this._id);
      });

      this._newCard.querySelector(".element__image").addEventListener("click", () => {
        this._handleCardClick(this.cardName, this.cardLink);
      });
    }
    
updateLikesCounter() {
  this._likeCounter.textContent = this._cardLikes.length;
}
updateLikes(data) {
  this._cardLikes = data.likes;
  this.updateLikesCounter(data.likes);
  this.likeCard();
}
likeCard() {
  if(this.isLiked()) {
      this._btnLikeCard.classList.add('element__like_active');
  } else {
      this._btnLikeCard.classList.remove('element__like_active');
  }
}

isLiked() {
  return this._cardLikes.find(user => user._id === this._userId);
}
    deleteCard() {
      this._newCard.remove();
      this._newCard = null;
      }
     
    }
    
   
