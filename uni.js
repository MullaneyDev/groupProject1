// const {
//   drinks,
//   eats,
//   stats,
//   updateStats,
//   statDecrease,
//  goForRide,grantwish,giveBrush
// } = require("./script.js");

import { Unicorn } from "./commonFunctions.js";


//statBars
let healthStat = document.getElementById("health")
let hungerStat = document.getElementById("hunger")
let thirstStat = document.getElementById("thirst")
let happinessStat = document.getElementById("happiness")
let environmentStat = document.getElementById("environment")

// Activity buttons links
const feed = document.getElementById("feed");
const drink = document.getElementById("drink");
const ride = document.getElementById("ride");
const brush = document.getElementById("brush");
const wish = document.getElementById("wish");

homeBtn.addEventListener("click", () => {
  console.log("test");
  window.open((href = "index.html"));
});


const newUnicorn = () => {
  const newPet = new Unicorn("Uni");
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
};

newUnicorn()

const decrease = setInterval(() => newPet.statDecrease(), 1000);
const updateStatsInterval = setInterval(() => newPet.updateStats(), 100);
