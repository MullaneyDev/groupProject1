import { Unicorn } from "./commonFunctions.js";

//statBars
let healthStat = document.getElementById("health");
let hungerStat = document.getElementById("hunger");
let thirstStat = document.getElementById("thirst");
let happinessStat = document.getElementById("happiness");
let environmentStat = document.getElementById("environment");
const bestScore = document.getElementById("bestScore");
bestScore.textContent = localStorage.getItem("highScore");

const updateStats = () => {
  healthStat.value = newPet.health;
  hungerStat.value = newPet.hunger;
  thirstStat.value = newPet.thirst;
  happinessStat.value = newPet.happiness;
  environmentStat.value = newPet.environment;
  timePlaying.textContent = newPet.currentRunningTime;
};

const urlParams = new URLSearchParams(window.location.search);

// Activity buttons links
const feed = document.getElementById("feed");
const drink = document.getElementById("drink");
const ride = document.getElementById("ride");
const brush = document.getElementById("brush");
const wish = document.getElementById("wish");

homeBtn.addEventListener("click", () => {
  window.open((href = "index.html"));
});

const newPet = new Unicorn(urlParams);
// animal (class) event listeners
feed.addEventListener("click", () => {
  newPet.eats();
});
drink.addEventListener("click", () => {
  newPet.drinks();
});

// unicorn (sub-class) event listeners
ride.addEventListener("click", () => {
  newPet.goForRide();
});
brush.addEventListener("click", () => {
  newPet.giveBrush();
});
wish.addEventListener("click", () => {
  newPet.grantWish();
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
