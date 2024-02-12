"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  noCount++;
  if (noCount > MAX_IMAGES) {
    noCount = 1; // Reset the count to loop back to the first image
  }
  changeImage(noCount);
  resizeYesButton(); // Enlarge the "Yes" button only when "No" is clicked
  updateNoButtonText();
});

function handleYesClick() {
  titleElement.innerHTML = "Let's video call on the 14th, See you :3 Grrrrrrrr";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  // The "resizeYesButton" function is not called here, so the "Yes" button won't enlarge when "Yes" is clicked
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

  // Adjust the message index to consider the modulo of the length
  const messageIndex = noCount % messages.length;

  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

