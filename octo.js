import { Octopus } from "./commonFunctions.js";

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
const swim = document.getElementById("swim");
const splash = document.getElementById("splash");
const hideSeek = document.getElementById("hideSeek");

homeBtn.addEventListener("click", () => {
  window.open((href = "index.html"));
});

const newPet = new Octopus("Octy");

// animal (class) event listeners
feed.addEventListener("click", () => {
  newPet.eats();
});
drink.addEventListener("click", () => {
  newPet.drinks();
});

// octopus (sub-class) event listeners
swim.addEventListener("click", () => {
  newPet.goForSwim();
});
splash.addEventListener("click", () => {
  newPet.coverInWater();
});
hideSeek.addEventListener("click", () => {
  newPet.playHideAndSeek();
});

const updateStatsInterval = setInterval(() => updateStats(), 100);
