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
const saveProfile = document.querySelector("#modal-input"); // Linked saveProfile to the form instead of the button, and the submit listener works now
const closeCard = document.querySelector("#card-create-close-button");
const saveCard = document.querySelector("#card-save-button");

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


function closeForm(element){
    var toClose;
    if(element == "profile"){
        toClose = profileModal;
    }
    else{
        toClose = cardModal;
    }
    
    console.log("called closeForm");
    toClose.classList.remove("modal_opened");
}

function getCardElement(cardData){
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
    console.log("handle");
    profileName.textContent = inputProfileName.value;
    profileDesc.textContent = inputProfileDesc.value;
    console.log("inputProfileName.value(): " + inputProfileName.value);
    closeForm("profile");
}

function handleCardFormSubmit (e){
    e.preventDefault();
    cardTitleEl.textContent = inputCardTitle.value;
    cardImageEl.textContent = inputCardURL.value;
    closeForm("card");
}


function testSave (e){
    e.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileDesc.textContent = inputProfileDesc.value;
    console.log("saveProfile eventlistener triggered");
    closeForm("profile");
}

/*--------------------------------------------------------------------*/
/*                          Event Listeners                           */
/*--------------------------------------------------------------------*/

editButton.addEventListener("click", () => {
    console.log("event listener");
    profileModal.classList.add("modal_opened");
});


closeProfileModal.addEventListener("click", closeForm("profile"));
saveProfile.addEventListener("submit", handleProfileFormSubmit);
closeCardModal.addEventListener("click", closeForm("profile"));
saveCard.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardListEl.append(cardElement);
})
