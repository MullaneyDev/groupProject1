const popup = document.getElementById("myPopup");
const btn = document.getElementById("startButton");
const pet = document.querySelector(".petGenerator");
const petName = document.querySelector(".petName");

const dino = document.getElementById("Dino");
const octo = document.getElementById("Octo");
const uni = document.getElementById("Uni");

let myPetsName = "";

localStorage.setItem("highScore", 0);

btn.addEventListener("click", () => {
  popup.style.display = "block";
});

pet.onclick = function display(event) {
  event.preventDefault();
  popup.style.display = "none";
  myPetsName = petName.value;
  if (dino.checked) {
    window.location.href = `dinoPage.html?${myPetsName}`;
  } else if (octo.checked) {
    window.location.href = `octoPage.html?${myPetsName}`;
  } else if (uni.checked) {
    window.location.href = `uniPage.html?${myPetsName}`;
  }
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
