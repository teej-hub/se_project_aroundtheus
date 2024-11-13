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
//const saveProfile = document.querySelector("#profile-save-button");
const saveProfileForm = document.querySelector("#profile-edit-form");
const cardCreate = document.querySelector("#card-add");
const closeCard = document.querySelector("#card-create-close-button");
//const saveCard = document.querySelector("#card-save-button");
const saveCardForm = document.querySelector("#card-add-form");
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

function closeProfilePopup(){
    console.log("closeProfile called");
    profileModal.classList.remove("modal_opened");
}
function closeCardPopup(){
    console.log("closeCard called");
    cardModal.classList.remove("modal_opened");
}

/* function getCardElement(cardData){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    console.log("getCardElement called");
    return cardElement;
}
 */
function renderCard(cardData){
    //console.log("addCardElement called");
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector('.card__image');
    const cardTitleEl = cardElement.querySelector('.card__title');
    cardTitleEl.textContent = cardData.name;
    
    cardImageEl.src = cardData.link;
    
    cardImageEl.alt = cardData.name;
    //console.log(cardElement.children);
    cardListEl.prepend(cardElement);
    return cardElement;
}

function addCardElement(){
    const newCard = document.querySelector("#card-add-form");
    const newCardTitle = newCard.querySelector("#modal-input-title");
    const newCardUrl = newCard.querySelector("#modal-input-url");
    const newCardElement = cardTemplate.cloneNode(true);
    
    console.log("New card's title %s", newCardTitle);
    console.log("New card's url: %s ", newCardUrl);
    
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
    //addCardElement(inputCardTitle.value, inputCardURL.value);
    //cardTitleEl.textContent = inputCardTitle.value;
    //cardImageEl.textContent = inputCardURL.value;
    const inputCardTitle = document.querySelector("#modal-input-title");
    const inputCardUrl = document.querySelector("#modal-input-url");
    const newCard = {name: inputCardTitle.value, link: inputCardUrl.value};
    renderCard(newCard);
    //console.log(inputTitle.value);
    console.log("handleCardSubmit called");
    //renderCard();
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
saveProfileForm.addEventListener("submit", handleProfileFormSubmit);
closeCard.addEventListener("click", closeCardPopup);
saveCardForm.addEventListener("submit", handleCardFormSubmit);

initialCards.reverse().forEach((cardData) => {
    renderCard(cardData);
})
