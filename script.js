const popup = document.getElementById("myPopup");
const btn = document.getElementById("startButton");
const pet = document.getElementById("petGenerator");
const petName = document.getElementById("petName");

const dino = document.getElementById("Dino");
const octo = document.getElementById("Octo");
const uni = document.getElementById("Uni");

 let myPetsName = "";

// let homeBtn = document.getElementById("homeBtn");

btn.addEventListener("click", () => {
  popup.style.display = "block";
});

pet.onclick = function display(event) {
  event.preventDefault();
  popup.style.display = "none";
  if (dino.checked) {
    myPetsName = petName.value;

    window.location.href = `dinoPage.html?petName=${myPetsName}`;
    //((href = "dinoPage.html"));
    // console.log("myPetsName: ", myPetsName);
  } else if (octo.checked) {
    window.open((href = "octoPage.html"));
  } else if (uni.checked) {
    window.open((href = "uniPage.html"));
  }
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};



//newDino();

//const newPet = new Dinosaur("Dino");

//module.exports = { Animal, Dinosaur, Octopus, Unicorn,myPetsName };

//export default {  Dinosaur, Octopus, Unicorn, myPetsName };

// module.exports={drinks, eats,stats,updateStats,statDecrease,playFetch,goForRun, relaxInShade,playHideAndSeek,goForSwim,coverInWater,goForRide,grantwish,giveBrush}
