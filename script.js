let popup = document.getElementById("myPopup");
let btn = document.getElementById("startButton");
let pet = document.getElementById("petGenerator");

btn.onclick = function () {
  popup.style.display = "block";
};

pet.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
