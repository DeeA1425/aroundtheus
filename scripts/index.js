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
const profileFormElement = profileEditModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");

const profileForm = document.forms["profile-form"];
const cardListEl = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");
const cardsWrap = document.querySelector(".cards__list");
/* -------------------------------------------------------------------------- */
/*                                 Form Data                                  */
/* -------------------------------------------------------------------------- */
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

/*
// here your code and close with the same but in the other way

function getCardElement(cardData) {
  // clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  // access the card title and image and store them in variables
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");

  // set the path to the image to the link field of the object
  cardImageEl.src = cardData.link;
  // set the image alt text to the name field of the object
  cardImageEl.alt = cardData.name;
  // set the card title to the name field of the object, too
  cardTitleEl.textContent = cardData.name;
  // find delete button
  const closeCardBtn = addCardModal.querySelector(".modal__close");
  // add the event listener to the delete button

  // cardElement.removed()

  //add click listener to cardImage element

  //openModal with previewImageModal

  // return the ready HTML element with the filled-in data
  return cardElement;
}
*/

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);

  return cardElement;
}
profileFormElement.addEventListener("submit", handleProfileFormSubmit);
profileEditButton.addEventListener("click", () => openPopup(profileEditModal));
profileAddCloseButton.addEventListener("click", () => openPopup(closeModal));
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
}

/* -------------------------------------------------------------------------- */
/*                               Event Listener                               */
/* -------------------------------------------------------------------------- */
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

profileAddCloseButton.addEventListener("click", () => {
  closePopup(addCardModal);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

profileAddButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitleInput.textContent;
  profileDescription.value = profileDescriptionInput.textContent;
  addCardModal.classList.add("modal_opened");
});

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);


function handleLike() {}

function handleDeleteCard() {}

function handleImageClick() {}

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  console.log(likeButton)

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitleEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  likeButton.addEventListener("click", handleLike);
  deleteButton.addEventListener("click", handleDeleteCard);
  cardImageEl.addEventListener("click", () => handleImageClick(data));

  return cardElement;
}

/* for loop that inserts card */

initialCards.forEach((cardData) => {
  cardsWrap.prepend(getCardElement(cardData));
});
