const billInput = document.querySelector(".bill-input");
const tip = document.querySelector(".tip");
const peopleNumberInput = document.querySelector(".people-number-input");
const tipAmount = document.querySelector(".tip-amount-calculate");
const total = document.querySelector(".total-calculate");

function calculate() {
  tipAmount.innerHTML = `$${billInput.value}`;
}

billInput.addEventListener("input", calculate);
