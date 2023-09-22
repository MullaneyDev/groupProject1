import { Dinosaur } from "./commonFunctions.js";

//statBars
let healthStat = document.getElementById("health");
let hungerStat = document.getElementById("hunger");
let thirstStat = document.getElementById("thirst");
let happinessStat = document.getElementById("happiness");
let environmentStat = document.getElementById("environment");

const updateStats = () => {
  healthStat.value = newPet.health;
  hungerStat.value = newPet.hunger;
  thirstStat.value = newPet.thirst;
  happinessStat.value = newPet.happiness;
  environmentStat.value = newPet.environment;
  timePlaying.textContent = (
    (new Date().getTime() - newPet.startTime) /
    60 /
    60
  ).toFixed(2);
};

const urlParams = new URLSearchParams(window.location.search);

// Activity buttons links
const feed = document.getElementById("feed");
const drink = document.getElementById("drink");
const dinoFetch = document.getElementById("fetch");
const relaxShade = document.getElementById("relaxShade");
const goRun = document.getElementById("goRun");

const timePlaying = document.getElementById("timePlaying");
const bestScore = document.getElementById("bestScore");
bestScore.textContent = localStorage.getItem("highScore");
homeBtn.addEventListener("click", () => {
  window.open((href = "index.html"));
});

const newPet = new Dinosaur(`${urlParams}`);
// animal (class) event listeners
feed.addEventListener("click", () => {
  newPet.eats();
});
drink.addEventListener("click", () => {
  newPet.drinks();
});

// dinosaur (sub-class) event listeners
dinoFetch.addEventListener("click", () => {
  newPet.playFetch();
});
relaxShade.addEventListener("click", () => {
  newPet.relaxInShade();
});
goRun.addEventListener("click", () => {
  newPet.goForRun();
});

const updateStatsInterval = setInterval(() => updateStats(), 100);

let imageContainer = document.getElementById("imageContainer");
let images = document.getElementsByTagName("img");
let currentIndex = 0;

function switchImage() {
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = "block";
}

setInterval(switchImage, 1000);
