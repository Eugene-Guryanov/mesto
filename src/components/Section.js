export default class Section {
  constructor({ renderer }, containerSelector ) {
      this._renderer = renderer;
      this._containerElement = document.querySelector(containerSelector);
    }

    //отрисовка карточек
    renderItems(items) {
      items.reverse().forEach((item) => {
        this._renderer(item);
      });
    }
    
    //добавление новых карточе
   addItem(cardElement) {
      this._containerElement.prepend(cardElement);
   }
}
