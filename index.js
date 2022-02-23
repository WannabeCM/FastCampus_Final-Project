const home = document.querySelector("#home");
const history = document.querySelector("#history");
const homeEffect = document.querySelector("#homeEffect");
const historyEffect = document.querySelector("#historyEffect");

function toHome() {
  home.style.display = "block";
  history.style.display = "none";
  homeEffect.style.backgroundColor = "#ddd";
  historyEffect.style.backgroundColor = "white";
}

function toHistory() {
  home.style.display = "none";
  history.style.display = "block";
  historyEffect.style.backgroundColor = "#ddd";
  homeEffect.style.backgroundColor = "white";
}
