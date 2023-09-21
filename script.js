let popup = document.getElementById("myPopup");
let btn = document.getElementById("startButton");
let pet = document.getElementById("petGenerator");
let dino = document.getElementById("Dino");
let octo = document.getElementById("Octo");
let uni = document.getElementById("Uni");
// let homeBtn = document.getElementById("homeBtn");

//statBars

let healthStat = document.getElementById("health")
let hungerStat = document.getElementById("hunger")
let thirstStat = document.getElementById("thirst")
let happinessStat = document.getElementById("happiness")
let environmentStat = document.getElementById("environment")


// Activity buttons links
const feed = document.getElementById("feed");
const drink = document.getElementById("drink");
const dinoFetch = document.getElementById("fetch");
const relaxShade = document.getElementById("relaxShade");
const goRun = document.getElementById("goRun");
const swim = document.getElementById("swim");
const splash = document.getElementById("splash");
const hideSeek = document.getElementById("hideSeek");
const ride = document.getElementById("ride");
const brush = document.getElementById("brush");
const wish = document.getElementById("wish");

btn.addEventListener("click", () => {
  popup.style.display = "block";
});


// homeBtn.addEventListener("click", () => {
//   console.log("test")
//   window.open((href = "index.html"));
// });


pet.onclick = function display() {
  popup.style.display = "none";
  if (dino.checked) {
    window.open((href = "dinoPage.html"));
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
    console.log("drinks");
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
  updateStats() {
    healthStat.value = this.health;
    hungerStat.value = this.hunger;
    thirstStat.value = this.thirst;
    happinessStat.value = this.happiness;
    environmentStat.value = this.environment;
  }
  statDecrease() {
    this.health -= 2;
    this.happiness -= 2;
    this.hunger -= 2;
    this.thirst -= 2;
    this.environment -= 2;
    this.stats();
    if (this.health === 0) {
      console.log(`${this.name} died from neglect`);
      clearInterval(decrease);
      return;
    } else if (this.happiness === 90) {
      console.log(`${this.name} gave up and died`);
      clearInterval(decrease);
      return;
    } else if (this.hunger === 0) {
      console.log(`${this.name} starved to death`);
      clearInterval(decrease);
      return;
    } else if (this.thirst === 0) {
      console.log(`${this.name} died of dehydration`);
      clearInterval(decrease);
      return;
    } else if (this.environment === 0) {
      console.log(`${this.name} was killed by the environment`);
      clearInterval(decrease);
      return;
    }
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
  giveBrush() {
    this.health += 10;
    this.happiness += 10;
    this.environment += 10;
  }
}


const decrease = setInterval(() => newPet.statDecrease(), 1000);

const newDino = () => {
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
};
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

//newDino();

//const newPet = new Dinosaur("Dino");

const updateStatsInterval = setInterval(() => newPet.updateStats(), 1);
const decrease = setInterval(() => newPet.statDecrease(), 1000);

