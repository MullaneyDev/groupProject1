// const {
//   drinks,
//   eats,
//   stats,
//   updateStats,
//   statDecrease,
//  playHideAndSeek,goForSwim,coverInWater
// } = require("./script.js");

import { Octopus } from "./commonFunctions.js";


//statBars
let healthStat = document.getElementById("health")
let hungerStat = document.getElementById("hunger")
let thirstStat = document.getElementById("thirst")
let happinessStat = document.getElementById("happiness")
let environmentStat = document.getElementById("environment")

// Activity buttons links
const feed = document.getElementById("feed");
const drink = document.getElementById("drink");
const swim = document.getElementById("swim");
const splash = document.getElementById("splash");
const hideSeek = document.getElementById("hideSeek");

homeBtn.addEventListener("click", () => {
  console.log("test");
  window.open((href = "index.html"));
});


const newOcto = () => {
  const newPet = new Octopus("Octy");

  // animal (class) event listeners
  feed.addEventListener("click", () => {
    newPet.eats();
  });
  drink.addEventListener("click", () => {
    newPet.drinks();
  });

  // octopus (sub-class) event listeners
  goRun.addEventListener("click", () => {
    newPet.goForRun();
  });
  swim.addEventListener("click", () => {
    newPet.goForSwim();
  });
  splash.addEventListener("click", () => {
    newPet.coverInWater();
  });
  hideSeek.addEventListener("click", () => {
    newPet.playHideAndSeek();
  });
};

newOcto()

const decrease = setInterval(() => newPet.statDecrease(), 1000);
const updateStatsInterval = setInterval(() => newPet.updateStats(), 100);
