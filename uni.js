import { Unicorn } from "./commonFunctions.js";

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

const newPet = new Unicorn(`${urlParams}`);
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
