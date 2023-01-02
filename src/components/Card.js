
export default class Card {
   
    constructor({data, handleCardClick}, elementTemplateSelector){
        this._cardName = data.name;
        this._cardLink = data.link;
        this._elementTemplateSelector = elementTemplateSelector;
        this._handleCardClick = handleCardClick;
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
        this._newCard.querySelector(".element__title").textContent = this._cardName;
        this._setEventListeners();
        return this._newCard;
    };

    _setEventListeners() {
      this._newCard.querySelector('.element__like').addEventListener('click', () => {
          this._likeCard();
      })
    
      this._newCard.querySelector('.element__delete').addEventListener('click', () => {
          this._deleteCard();
      })
      this._newCard.querySelector(".element__image").addEventListener("click", () => {
        this._handleCardClick(this.cardName, this.cardLink);
      });
    }
    
    _likeCard() {
      this._newCard.querySelector('.element__like').classList.toggle('element__like_active');
    }
    
    _deleteCard() {
      const itemNewCard = this._newCard
      itemNewCard.remove();
    }
}
