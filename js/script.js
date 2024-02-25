const button = document.querySelector(".btn");
const inputInner = document.querySelector(".input");
const form = document.querySelector(".form");
const image = document.querySelector(".image");

let currentValueInput;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = inputInner.value.trim();
  if (!inputValue || inputValue == currentValueInput) {
    return;
  }
  currentValueInput = inputValue;

  image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
});
