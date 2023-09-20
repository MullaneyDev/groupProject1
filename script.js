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
class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 100;
    this.thirst = 100;
    this.happiness = 100;
    this.environment = 100;
  }
  drinks() {
    this.health += 5;
    this.thirst += 10;
    return this;
  }
  eats() {
    this.health += 5;
    this.hunger += 10;
    this.thirst -= 5;
    return this;
  }
  stats() {
    return console.table({
      Name: this.name,
      Health: this.health,
      Hunger: this.hunger,
      Thirst: this.thirst,
      Happiness: this.happiness,
      Environment: this.environment,
    });
  }
  statDecrease() {
    newPet.health -= 2;
    newPet.happiness -= 2;
    newPet.hunger -= 2;
    newPet.thirst -= 2;
    newPet.environment -= 2;
    newPet.stats();
  }
}

class Dinosaur extends Animal {
  constructor(name) {
    super(name);
    this.happy = "Roar";
  }

  playFetch() {
    this.health += 10;
    this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  goForRun() {
    this.health += 10;
    this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  relaxInShade() {
    this.health += 10;
    this.happiness += 10;
    this.environment += 10;
  }
}

class Octopus extends Animal {
  constructor(name) {
    super(name);
    this.happy = "Spins";
  }

  playHideAndSeek() {
    this.health += 10;
    this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  goForSwim() {
    this.health += 10;
    this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  coverInWater() {
    this.health += 10;
    this.happiness += 10;
    this.environment += 10;
  }
}

class Unicorn extends Animal {
  constructor(name) {
    super(name);
    this.happy = "Horn glows";
  }

  goForRide() {
    this.health += 10;
    this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  grantWish() {
    this.health += 10;
    this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  relaxInShade() {
    this.health += 10;
    this.happiness += 10;
    this.environment += 10;
  }
}

const newPet = new Dinosaur("Dino");
setInterval(newPet.statDecrease, 1000);
