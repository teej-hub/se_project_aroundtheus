let initialCards = [
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
const modalState = document.querySelector("#profile-edit-modal");
const closeButton = document.querySelector("#profile-close-button");
const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__subtitle");
const inputProfileName = document.querySelector("#modal-input-name");
const inputProfileDesc = document.querySelector("#modal-input-text");
const profileEditForm = modalState.querySelector(".modal__form");
const cardListEl = document.querySelector('.cards__list');
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;

/*--------------------------------------------------------------------*/
/*                            Functions                               */
/*--------------------------------------------------------------------*/
function closeModal() {
    modalState.classList.remove("modal_opened");
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

/*--------------------------------------------------------------------*/
/*                            Handlers                                */
/*--------------------------------------------------------------------*/

function handleFormSubmit (e){
    e.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileDesc.textContent = inputProfileDesc.value;
    closeModal();
}

/*--------------------------------------------------------------------*/
/*                          Event Listeners                           */
/*--------------------------------------------------------------------*/
editButton.addEventListener("click", () => {
    inputProfileName.value = profileName.textContent;
    inputProfileDesc.value = profileDesc.textContent;
    modalState.classList.add("modal_opened");
});

closeButton.addEventListener("click", closeModal);

profileEditForm.addEventListener("submit", handleFormSubmit);

initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardListEl.append(cardElement);
})