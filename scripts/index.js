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
const closeProfile = document.querySelector("#profile-close-button");
const saveProfile = document.querySelector("#profile-save-button"); // Linked saveProfile to the form instead of the button, and the submit listener works now
const cardCreate = document.querySelector("#card-add");
const closeCard = document.querySelector("#card-create-close-button");
const saveCard = document.querySelector("#modal-input-card");

// popup
const profileModal = document.querySelector("#profile-edit-modal");
const profileEditForm = profileModal.querySelector("#modal-input");
const cardModal = document.querySelector("#card-create-modal");

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

function closeProfilePopup(){
    console.log("closeProfile called");
    profileModal.classList.remove("modal_opened");
}
function closeCardPopup(){
    console.log("closeCard called");
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
    console.log("getCardElement called");
    return cardElement;
}

function addCardElement(titleInput, urlInput){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector('.card__image');
    const cardTitleEl = cardElement.querySelector('.card__title');
    cardTitleEl.textContent = titleInput;
    cardImageEl.src = urlInput;
    cardImageEl.alt = "Image of " + titleInput;
    cardListEl.unshift(cardElement);
}

/*--------------------------------------------------------------------*/
/*                            Handlers                                */
/*--------------------------------------------------------------------*/

function handleProfileFormSubmit (e){
    e.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileDesc.textContent = inputProfileDesc.value;
    console.log("handleProfileSubmit called");
    closeProfilePopup;
}

function handleCardFormSubmit (e){
    e.preventDefault();
    console.log("handle card submit triggered");
    addCardElement(inputCardTitle.value, inputCardURL.value);
    //cardTitleEl.textContent = inputCardTitle.value;
    //cardImageEl.textContent = inputCardURL.value;
    console.log("handleCardSubmit called");

    closeCardPopup;
}

/*
function testSave (e){
    e.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileDesc.textContent = inputProfileDesc.value;
    console.log("saveProfile eventlistener triggered");
    closeForm("profile");
}*/

/*--------------------------------------------------------------------*/
/*                          Event Listeners                           */
/*--------------------------------------------------------------------*/

editButton.addEventListener("click", () => {
    console.log("profile edit event listener triggered");
    profileModal.classList.add("modal_opened");
});
cardCreate.addEventListener("click", () => {
    console.log("card create event listener triggered");
    cardModal.classList.add("modal_opened");
});

closeProfile.addEventListener("click", closeProfilePopup);
saveProfile.addEventListener("submit", handleProfileFormSubmit);
closeCard.addEventListener("click", closeCardPopup);
saveCard.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((cardData) => {
    renderCard(cardData);
})
