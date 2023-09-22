const message = document.getElementById("message");
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

class Animal {
  constructor(name) {
    this.decrease = setInterval(() => this.statDecrease(), 1000);
    this.showTimer = setInterval(() => this.runTimer(), 100);
    this.name = name;
    this.health = 100;
    this.hunger = 100;
    this.thirst = 100;
    this.happiness = 100;
    this.environment = 100;
    this.startTime = new Date().getTime();
    this.currentRunningTime = 0;
  }
  drinks() {
    this.health + 5 > 100 ? 100 : (this.health += 5);
    this.thirst + 10 > 100 ? 100 : (this.thirst += 5);
    return this;
  }
  eats() {
    this.health + 5 > 100 ? 100 : (this.health += 5);
    this.hunger + 10 > 100 ? 100 : (this.hunger += 10);
    this.thirst + 5 > 100 ? 100 : (this.thirst += 5);
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

  endGame() {
    // get current time
    clearInterval(this.decrease);
    clearInterval(this.showTimer);
    for (let i = 0; i < this.activityButtons.length; i++) {
      this.activityButtons[i].disabled = true;
    }
    let endTime = new Date().getTime();
    let timeInPlay = ((endTime - this.startTime) / 60 / 60).toFixed(2);
    // check if high score is exceeded
    if (timeInPlay > localStorage.getItem("highScore")) {
      localStorage.setItem("highScore", timeInPlay);
      bestScore.textContent = localStorage.getItem("highScore");
    }
  }

  runTimer() {
    this.currentRunningTime = (
      (new Date().getTime() - this.startTime) /
      60 /
      60
    ).toFixed(2);
  }

  statDecrease() {
    this.health -= 2;
    this.happiness -= 2;
    this.hunger -= 2;
    this.thirst -= 2;
    this.environment -= 2;
    if (this.health === 90) {
      message.innerText = `${this.name} died from neglect`;
      this.endGame();
      return;
    } else if (this.happiness === 0) {
      message.innerText = `${this.name} gave up and died`;
      this.endGame();
      return;
    } else if (this.hunger === 0) {
      message.innerText = `${this.name} starved to death`;
      this.endGame();
      return;
    } else if (this.thirst === 0) {
      deathMessage.innerText = `${this.name} died of dehydration`;
      this.endGame();
      return;
    } else if (this.environment === 0) {
      deathMessage.innerText = `${this.name} was killed by the environment`;
      this.endGame();
      return;
    }
  }
}

export class Dinosaur extends Animal {
  constructor(name) {
    super(name);
    this.happy = "Roar";
    this.activityButtons = [feed, drink, dinoFetch, relaxShade, goRun];
  }

  playFetch() {
    this.health + 10 > 100 ? 100 : (this.health += 10);
    this.happiness + 10 > 100 ? 100 : (this.happiness += 10);
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  goForRun() {
    this.health + 10 > 100 ? 100 : (this.health += 10);
    this.happiness + 10 > 100 ? 100 : (this.happiness += 10);
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  relaxInShade() {
    this.health + 10 > 100 ? 100 : (this.health += 10);
    this.happiness + 10 > 100 ? 100 : (this.happiness += 10);
    this.environment + 10 > 100 ? 100 : (this.environment += 10);
  }
}

export class Octopus extends Animal {
  constructor(name) {
    super(name);
    this.happy = "Spins";
    this.activityButtons = [feed, drink, swim, splash, hideSeek];
  }

  playHideAndSeek() {
    this.health + 10 > 100 ? 100 : (this.health += 10);
    this.happiness + 10 > 100 ? 100 : (this.happiness += 10);
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  goForSwim() {
    this.health + 10 > 100 ? 100 : (this.health += 10);
    this.happiness + 10 > 100 ? 100 : (this.happiness += 10);
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  coverInWater() {
    this.health + 10 > 100 ? 100 : (this.health += 10);
    this.happiness + 10 > 100 ? 100 : (this.happiness += 10);
    this.environment + 10 > 100 ? 100 : (this.environment += 10);
  }
}

export class Unicorn extends Animal {
  constructor(name) {
    super(name);
    this.happy = "Horn glows";
    this.activityButtons = [feed, drink, ride, brush, wish];
  }

  goForRide() {
    this.health + 10 > 100 ? 100 : (this.health += 10);
    this.happiness + 10 > 100 ? 100 : (this.happiness += 10);
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  grantWish() {
    this.health + 10 > 100 ? 100 : (this.health += 10);
    this.happiness + 10 > 100 ? 100 : (this.happiness += 10);
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  giveBrush() {
    this.health + 10 > 100 ? 100 : (this.health += 10);
    this.happiness + 10 > 100 ? 100 : (this.happiness += 10);
    this.environment + 10 > 100 ? 100 : (this.environment += 10);
  }
}
