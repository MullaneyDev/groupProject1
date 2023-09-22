class Animal {
  constructor(name) {
    this.decrease = setInterval(() => this.statDecrease(), 1000);
    this.name = name;
    this.health = 100;
    this.hunger = 100;
    this.thirst = 100;
    this.happiness = 100;
    this.environment = 100;
  }
  drinks() {
    this.health + 5 > 100 ? 100 : (this.health += 5);
    this.thirst + 10 > 100 ? 100 : (this.thirst += 5);
    console.log(this.health, this.thirst);

    return this;
  }
  eats() {
    this.health + 5 > 100 ? 100 : (this.health += 5);
    this.hunger + 10 > 100 ? 100 : (this.hunger += 10);
    this.thirst + 5 > 100 ? 100 : (this.thirst += 5);
    console.log(this.health, this.hunger, this.thirst);
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
    this.health -= 2;
    this.happiness -= 2;
    this.hunger -= 2;
    this.thirst -= 2;
    this.environment -= 2;
    //this.stats();
    if (this.health === 0) {
      console.log(`${this.name} died from neglect`);
      clearInterval(this.decrease);
      return;
    } else if (this.happiness === 0) {
      console.log(`${this.name} gave up and died`);
      clearInterval(this.decrease);
      return;
    } else if (this.hunger === 0) {
      console.log(`${this.name} starved to death`);
      clearInterval(this.decrease);
      return;
    } else if (this.thirst === 0) {
      console.log(`${this.name} died of dehydration`);
      clearInterval(this.decrease);
      return;
    } else if (this.environment === 0) {
      console.log(`${this.name} was killed by the environment`);
      clearInterval(this.decrease);
      return;
    }
  }
}

export class Dinosaur extends Animal {
  constructor(name) {
    super(name);
    this.happy = "Roar";
  }

  playFetch() {
    this.health + 10 > 100 ? 100 : this.health += 10;
    this.happiness + 10 > 100 ? 100 : this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  goForRun() {
    this.health + 10 > 100 ? 100 : this.health += 10;
    this.happiness + 10 > 100 ? 100 : this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  relaxInShade() {
    this.health + 10 > 100 ? 100 : this.health += 10;
    this.happiness + 10 > 100 ? 100 : this.happiness += 10;
    this.environment + 10 > 100 ? 100 : this.environment += 10;
  }
}

export class Octopus extends Animal {
  constructor(name) {
    super(name);
    this.happy = "Spins";
  }

  playHideAndSeek() {
    this.health + 10 > 100 ? 100 : this.health += 10;
    this.happiness + 10 > 100 ? 100 : this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  goForSwim() {
    this.health + 10 > 100 ? 100 : this.health += 10;
    this.happiness + 10 > 100 ? 100 : this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  coverInWater() {
    this.health + 10 > 100 ? 100 : this.health += 10;
    this.happiness + 10 > 100 ? 100 : this.happiness += 10;
    this.environment + 10 > 100 ? 100 : this.environment += 10;
  }
}

export class Unicorn extends Animal {
  constructor(name) {
    super(name);
    this.happy = "Horn glows";
  }

  goForRide() {
    this.health + 10 > 100 ? 100 : this.health += 10;
    this.happiness + 10 > 100 ? 100 : this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  grantWish() {
    this.health + 10 > 100 ? 100 : this.health += 10;
    this.happiness + 10 > 100 ? 100 : this.happiness += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
  giveBrush() {
    this.health + 10 > 100 ? 100 : this.health += 10;
    this.happiness + 10 > 100 ? 100 : this.happiness += 10;
    this.environment + 10 > 100 ? 100 : this.environment += 10;
  }
}
