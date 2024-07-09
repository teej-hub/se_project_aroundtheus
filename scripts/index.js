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


const editButton = document.querySelector("#profile-edit-button");
const modalState = document.querySelector("#profile-edit-modal");
const closeButton = document.querySelector("#profile-close-button");
const saveButton = document.querySelector("#profile-save-button");
const profileForm = document.querySelector("#profile-content");
const profileName = profileForm.querySelector(".profile__name");
const profileDesc = profileForm.querySelector(".profile__subtitle");
const modalInput = document.querySelector("#modal-input");
const inputProfileName = modalInput.querySelector("#modal-input-name");
const inputProfileDesc = modalInput.querySelector("#modal-input-text");

const profileEditForm = modalState.querySelector(".modal__form");

function closeModal() {
    modalState.classList.remove("modal_opened");
}

editButton.addEventListener("click", () => {
    inputProfileName.value = profileName.textContent;
    inputProfileDesc.value = profileDesc.textContent;
    modalState.classList.add("modal_opened");
});

closeButton.addEventListener("click", () => {
    closeModal();
});

profileEditForm.addEventListener("submit", (e) => {
    e.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileDesc.textContent = inputProfileDesc.value;
    closeModal();
});

