import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
   super(popupSelector);
    }
    open(item){
        super.open();
        this._description = this._popup.querySelector(".popup__description");
        this._popupImage = this._popup.querySelector(".popup__image");
        this._description.textContent = item.name;
        this._popupImage.src = item.link;
        this._popupImage.alt = item.name;
    }
    setEventListeners() {
        super.setEventListeners();
    }
}