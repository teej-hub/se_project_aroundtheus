const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },
    {
        name: "Lake Louise",
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
    }
];
/*--------------------------------------------------------------------*/
/*                            Elements                                */
/*--------------------------------------------------------------------*/

// Buttons 
const editButton = document.querySelector("#profile-edit-button");
const closeProfile = document.querySelector("#profile-close-button");
const saveProfileForm = document.querySelector("#profile-edit-form");
const cardCreate = document.querySelector("#card-add");
const closeCard = document.querySelector("#card-create-close-button");
const saveCardForm = document.querySelector("#card-add-form");

//const saveProfile = document.querySelector("#profile-save-button");//const saveCard = document.querySelector("#card-save-button");

// popup
const profileModal = document.querySelector("#edit-popup");
const cardModal = document.querySelector("#add-popup");

// data, input
const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__subtitle");
const inputProfileName = document.querySelector("#modal-input-name");
const inputProfileDesc = document.querySelector("#modal-input-text");
const inputCardTitle = document.querySelector("#modal-input-title");
const inputCardURL = document.querySelector("#modal-input-url");

// cards
const cardListEl = document.querySelector('.cards__list');
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
/* const likeButton = cardTemplate.querySelector("#like-button"); */
/*--------------------------------------------------------------------*/
/*                            Functions                               */
/*--------------------------------------------------------------------*/

function openPopup(popup){
    console.log("openPopup called");
    popup.classList.add("modal_opened");
}

function closePopup(popup){
    console.log("closePopup called");
    popup.classList.remove("modal_opened");
}

function renderCard(cardData){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector('.card__image');
    const cardTitleEl = cardElement.querySelector('.card__title');
    const likeButton = cardElement.querySelector("#like-button");
    cardTitleEl.textContent = cardData.name;
    cardImageEl.src = cardData.link;
    cardImageEl.alt = cardData.name;
    cardListEl.prepend(cardElement);
    return cardElement;
}

/* function toggleLike(card){
    const cardLiked = document.querySelector(".card__like-button");
    card.classList.toggle(cardLiked);
}  */

/*--------------------------------------------------------------------*/
/*                            Handlers                                */
/*--------------------------------------------------------------------*/

function handleProfileFormSubmit (e){
    e.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileDesc.textContent = inputProfileDesc.value;
    console.log("handleProfileSubmit called");
    closePopup(profileModal);
}

function handleCardFormSubmit (e){
    e.preventDefault();
    const inputCardTitle = document.querySelector("#modal-input-title");
    const inputCardUrl = document.querySelector("#modal-input-url");
    const newCard = {name: inputCardTitle.value, link: inputCardUrl.value};
    renderCard(newCard);
    console.log("handleCardSubmit called");
    closePopup(cardModal);
}

/* function handleLike(card) {
    console.log("handleLike called");
    card.likeButton.toggle("active");
} */

/*--------------------------------------------------------------------*/
/*                          Event Listeners                           */
/*--------------------------------------------------------------------*/

editButton.addEventListener("click", () => {
    console.log("profile edit event listener triggered");
    openPopup(profileModal);
});
cardCreate.addEventListener("click", () => {
    console.log("card create event listener triggered");
    openPopup(cardModal);
});


closeProfile.addEventListener("click", closePopup(profileModal));
saveProfileForm.addEventListener("submit", handleProfileFormSubmit);
closeCard.addEventListener("click", closePopup(cardModal));
saveCardForm.addEventListener("submit", handleCardFormSubmit);
/* clonedButton.addEventListener("click", () => {
    console.log("clonedButton eventlistener triggered");
    clonedButton.classList.toggle("card__like-button-active")
})  */


initialCards.reverse().forEach((cardData) => {
    renderCard(cardData);
})
const likeButtons = document.querySelectorAll("#like-button");
likeButtons.forEach(likeButton => {
    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("card__like-button_active");
    });
});