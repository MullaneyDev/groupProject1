// const {
//   drinks,
//   eats,
//   stats,
//   updateStats,
//   statDecrease,
//   playFetch,
//   goForRun,
//   relaxInShade,
// } = require("./script.js");

// const { Animal, Dinosaur ,myPetsName} = require("./script.js");
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
};

const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams: ", urlParams.get("petName"));

// Activity buttons links

const feed = document.getElementById("feed");
const drink = document.getElementById("drink");
const dinoFetch = document.getElementById("fetch");
const relaxShade = document.getElementById("relaxShade");
const goRun = document.getElementById("goRun");

homeBtn.addEventListener("click", () => {
  console.log("test");
  window.open((href = "index.html"));
});

console.log("new dino page");

const newPet = new Dinosaur("Dino");
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

//console.log("myPetsName: ", myPetsName);

//const decrease = setInterval(() => newPet.statDecrease(), 1000);
const updateStatsInterval = setInterval(() => updateStats(), 100);
