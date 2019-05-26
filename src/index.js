import "./style.scss";
const discs = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
const gameEl = document.querySelector("#game");
discs.forEach(function(disc) {
  disc.forEach(function(soloDisc, index) {
    const discEl = document.createElement("p");
    discEl.classList.add("disc");
    gameEl.appendChild(discEl);
  });
});
document.querySelectorAll(".disc").forEach(function(element) {
  element.addEventListener("click", function(e, index) {
    console.log(e, index);
  });
});
