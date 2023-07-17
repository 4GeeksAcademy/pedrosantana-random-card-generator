/* eslint-disable */
import "bootstrap";
import "./style.css";

function random(num) {
  return Math.floor(Math.random() * num);
}
function generateCard() {
  let card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let cardNum = random(13);
  let suitList = ["♦", "♥", "♠", "♣"];
  let suitNum = random(4);
  let color = suitNum < 2 ? "red" : "black";
  let numberElm = document.getElementById("number");
  let suitUpElm = document.getElementById("suitup");
  let suitDownElm = document.getElementById("suitdown");
  suitUpElm.innerText = suitList[suitNum];
  suitUpElm.style.color = color;
  suitDownElm.innerText = suitList[suitNum];
  suitDownElm.style.color = color;
  numberElm.innerText = card[cardNum];
}
window.onload = function() {
  generateCard();
  document.getElementById("card").addEventListener("click", generateCard);
};
