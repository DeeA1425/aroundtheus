import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louis",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile__title-input");
const profileDescriptionInput = document.querySelector(
  "#profile__description-input"
);
const addCardButton = document.querySelector("#add-card-button");
const addCardModal = document.querySelector("#profile-add-modal");
const profileAddCloseButton = addCardModal.querySelector(".modal__close");
const addTitle = document.querySelector(".profile__title");
const profileAddButton = document.querySelector(".profile__add-button");
const addCardFormElement = addCardModal.querySelector(".modal__form");

const profileForm = document.forms["profile-form"];
const cardListEl = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");
const cardsWrap = document.querySelector(".cards__list");
const previewImageModal = document.querySelector("#preview-modal");
const previewImage = previewImageModal.querySelector(".modal__preview-image");
const previewCaption = previewImageModal.querySelector(".modal__caption");
const previewImageCloseButton =
  previewImageModal.querySelector(".modal__close");

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const card = new Card(cardData, "#card-template")
card.getView();

/* -------------------------------------------------------------------------- */
/*                                 Form Data                                  */
/* -------------------------------------------------------------------------- */

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

/* -------------------------------------------------------------------------- */
/*                                   Classes                                  */
/* -------------------------------------------------------------------------- */

const profileEditValidaor = new FormValidator(settings, "#profile-edit-form");
// profileEditValidaor.enableValidation("")

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscapeClose);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscapeClose);
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);

  return cardElement;
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
// add new card button
profileAddButton.addEventListener("click", () => openPopup(addCardModal));

/* -------------------------------------------------------------------------- */
/*                                Event Handler                               */
/* -------------------------------------------------------------------------- */

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  cardsWrap.prepend(cardElement);
  closePopup(addCardModal);
  e.target.reset();
}

/* -------------------------------------------------------------------------- */
/*                               Event Listener                               */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

profileEditCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

profileAddCloseButton.addEventListener("click", () => {
  closePopup(addCardModal);
});

previewImageCloseButton.addEventListener("click", () => {
  closePopup(previewImageModal);
});

addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

function handleImageClick(data) {
  previewImage.src = data.link;
  previewImage.alt = data.name;
  previewCaption.textContent = data.name;
  openPopup(previewImageModal);
}

/* -------------------------------------------------------------------------- */
/*                             Card Like Button                               */
/* -------------------------------------------------------------------------- */

function getCardElement(data) {
  const cardElement = cardTemplate.document
    .querySelector(".card")
    .cloneNode(true);

  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitleEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => handleImageClick(data));

  return cardElement;
}

/* for loop that inserts card */

initialCards.forEach((cardData) => {
  cardsWrap.prepend(getCardElement(cardData));
});

// Esc.button Modal Close
function handleEscapeClose(event) {
  if (event.key === "Escape" || event.key === "Esc") {
    const openedModal = document.querySelector(".modal_opened");

    if (openedModal) {
      closePopup(openedModal);
    }
  }
}

// Modal Close Overlay
const modals = document.querySelectorAll(".modal");

const handleModalClose = (evt) => {
  if (evt.target.classList.contains("modal")) {
    closePopup(evt.currentTarget);
  }
};

modals.forEach((modal) => {
  modal.addEventListener("mousedown", handleModalClose);
});
