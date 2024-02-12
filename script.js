"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 1; // Initialize noCount to 1 instead of 0

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  changeImage(noCount);
  resizeYesButton();
  updateNoButtonText();
  noCount++;  // Increment after updating image and button text
});

function handleYesClick() {
  titleElement.innerHTML = "Let's video call on the 14th, See you :3 Grrrrrrrr";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Sure ka na dili ka?",
    "Sure na dyud?",
    "Ayaw ba.",
    "Na yayay nako",
    "mangloud nako oi.",
    "Sige dyud",
    "I will jump nalang on the bridge",
    "Don't hurt my conyo heart",
    "I will Wallop you if you click NO!",
    "Walloping you now!",
    "ISTOP!",
    "YES kana ba!"
  ];

  const messageIndex = noCount > messages.length ? noCount % messages.length : noCount;
  return messages[messageIndex - 1];
}

function changeImage(noCount) {
  if (noCount > MAX_IMAGES) {
    noCount = 1; // Reset the count to loop back to the first image
  }
  catImg.src = `img/cat-${noCount}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

