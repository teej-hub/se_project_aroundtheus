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
const saveProfile = document.querySelector("#profile-save-button");
const cardCreate = document.querySelector("#card-add");
const closeCard = document.querySelector("#card-create-close-button");
const saveCard = document.querySelector("#card-add-form");

// popup
const profileModal = document.querySelector("#edit-popup");
const profileEditForm = profileModal.querySelector("#modal-input");
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



/*--------------------------------------------------------------------*/
/*                            Functions                               */
/*--------------------------------------------------------------------*/

function openPopup(modal){
    modal.classList.add("modal_opened");
}
function closePopup(modal){
    modal.classList.remove("modal_opened");
    console.log(modal.classList);
}

function closeProfilePopup(){
    profileModal.classList.remove("modal_opened");
}
function closeCardPopup(){
    cardModal.classList.remove("modal_opened");
}

function getCardElement(cardData){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    console.log("getCardElement called");
    return cardElement;
}

function renderCard(cardData){
    console.log("addCardElement called");
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector('.card__image');
    const cardTitleEl = cardElement.querySelector('.card__title');
    cardTitleEl.textContent = cardData.name;
    cardImageEl.src = cardData.link;
    cardImageEl.alt = cardData.name;
    cardListEl.appendChild(cardElement);
}

/*--------------------------------------------------------------------*/
/*                            Handlers                                */
/*--------------------------------------------------------------------*/

function handleProfileFormSubmit (e){
    e.preventDefault();
    console.log("handleProfileSubmit called");
    profileName.textContent = inputProfileName.value;
    profileDesc.textContent = inputProfileDesc.value;
    closePopup(profileModal);
}
function handleCardFormSubmit (e){
    e.preventDefault();
    console.log("handleCardSubmit called");
    const title = e.target.title.value;
    const link = e.target.link.value;
    
    addCardElement({
        name: title,
        url: link,
    });
    closePopup(cardModal);
}

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

closeProfile.addEventListener("click", () => closePopup(profileModal));
saveProfile.addEventListener("click", handleProfileFormSubmit);
closeCard.addEventListener("click", () => closePopup(cardModal));
/* saveCard.addEventListener("submit", handleCardFormSubmit); */
saveCard.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const link = e.target.link.value;
    console.log(e.target.title.value);
    renderCard({
        name: title,
        url: link,
    });
    closePopup(cardModal);
});
initialCards.forEach((cardData) => {
    renderCard(cardData);
})