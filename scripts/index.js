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
const editButton = document.querySelector("#profile-edit-button");
const profileModal = document.querySelector("#profile-edit-modal");
const closeProfileModal = document.querySelector("#profile-close-button");
const saveProfile = document.querySelector("#profile-save-button");
const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__subtitle");
const inputProfileName = document.querySelector("#modal-input-name");
const inputProfileDesc = document.querySelector("#modal-input-text");
const profileEditForm = profileModal.querySelector("#modal-input");
const cardListEl = document.querySelector('.cards__list');
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardModal = document.querySelector("#card-create-modal");
const closeCardModal = document.querySelector("#card-create-close-button");
const inputCardTitle = document.querySelector("#modal-input-title");
const inputCardURL = document.querySelector("#modal-input-url");
const saveCard = document.querySelector("#card-save-button");
/*--------------------------------------------------------------------*/
/*                            Functions                               */
/*--------------------------------------------------------------------*/


function closeProfile(){
    profileModal.classList.remove("modal_opened");
}
function closeCard(){
    cardModal.classList.remove("modal_opened");
}

function getCardElement(cardData){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector('.card__image');
    const cardTitleEl = cardElement.querySelector('.card__title');
    cardTitleEl.textContent = cardData.name;
    cardImageEl.src = cardData.link;
    cardImageEl.alt = cardData.name;
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
    closeProfile();
}
function handleCardFormSubmit (e){
    e.preventDefault();
    cardTitleEl.textContent = inputCardTitle.value;
    cardImageEl.textContent = inputCardURL.value;
    closeCard();
}

/*--------------------------------------------------------------------*/
/*                          Event Listeners                           */
/*--------------------------------------------------------------------*/
editButton.addEventListener("click", () => {
    console.log("event listener");
    /*inputProfileName.value = profileName.textContent;
    inputProfileDesc.value = profileDesc.textContent;*/
    profileModal.classList.add("modal_opened");
});

closeProfileModal.addEventListener("click", closeProfile);
saveProfile.addEventListener("submit", handleProfileFormSubmit);
closeCardModal.addEventListener("click", closeCard);
saveCard.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardListEl.append(cardElement);
})
//making new commit, testing mac 