export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    console.log(this._element);
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", this._handleLikeIcon);

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", this._handleDeleteCard);

    this._element
      .querySelector(".card__image")
      .addEventListener("click", this._handlePreviewImage);
  }

  handleLikeIcon() {
    this._element
    .querySelector(".card__like-button")
    .classList.toggle(".card__like-button_active");
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_js-active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getView() {
    // const template = this._getTemplate();
    this._element = this._getTemplate();
    this._element.querySelector(".card__like-button");

    // get the card view    
    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._name;

    // set event listeners
    this._setEventListeners();

    // return the card
    return this._cardElement;
  }
}
