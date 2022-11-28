
export class Card {
   
    constructor(data, elementTemplateSelector, handleImagePopup){
        this.cardName = data.name;
        this.cardLink = data.link;
        this.elementTemplateSelector = elementTemplateSelector;
        this.handleImagePopup = handleImagePopup;
    }

    _getTemplate() {
    const newCard = this.elementTemplateSelector
    .content
    .querySelector('.element')
    .cloneNode(true);
    return newCard;
    };

    getCard() {
        this._newCard = this._getTemplate();
        this._imageCard = this._newCard.querySelector(".element__image");
        this._imageCard.src = this.cardLink;
        this._imageCard.alt = this.cardName;
        this._newCard.querySelector(".element__title").textContent = this.cardName;
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
        this._handleClickImage();
      });
    }
    
    _likeCard() {
      this._newCard.querySelector('.element__like').classList.toggle('element__like_active');
    }
    
    _deleteCard() {
      const itemNewCard = this._newCard
      itemNewCard.remove();
    }
    
    _handleClickImage(){
        this.handleImagePopup(this.cardName, this.cardLink)
    }
}
