/* mouseover eventListner (hover) 
   click eventListner
   keydown eventListner
*/

/* helloWorldBtn.addEventListener(
   "click", 
() => console.log("Hello World")
);   */

const helloWorldBtn = document.querySelector("#helloWorld");
helloWorldBtn.addEventListener("click", () => console.log("Hello World"));

/* buttons.forEach(button) => addEventListner(
"click", 
() => console.log()
 ) 
);   */

/*  */

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () =>
    console.log(`Clicked ${button.textContent}`)
  );

  button.addEventListener("mouseover", () =>
    console.log(`Mouse over: ${button.textContent}`)
  );
});

/*
document.addEventListner(
"keydown", 
(e) => console.log(`Key down: ${e.key}`)
);
     */

document.addEventListener("keydown", (e) => console.log(`Key down: ${e.key} `));

const form = document.querySelector("#loginForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  const name = formData.get("name");
  const password = formData.get("password");

  console.log("name:", name);
  console.log("password:", password);
});

/* CLASSES */
// PascalCase (stor bokstav på classes)
// Make a game:

class Helmet {
  constructor(name, def, durability) {
    this.name = name;
    this.hp = def;
    this.atk = durability.atk;
  }
}

class Sword {
  constructor(name, atk, durability) {
    this.name = name;
    this.atk = atk;
    this.durability = durability;
  }
}

class Human {
  constructor(name, repititionsNeeded) {
    this.name = name;
    this.repititionsNeeded = repititionsNeeded;
  }

  learn(thingToLearn) {
    for (let i = 0; i < this.repititionsNeeded; i++) {
      console.log(
        `${this.name} has repeated ${thingToLearn} ${i}/${this.repititionsNeeded}`
      );
    }
  }
}

const marius = new Human("Marius", 760);
marius.learn("JS Classes");

class Entity {
  constructor(name, hp, atk, helmet = null, sword = null) {
    this.name = name;
    this.hp = hp; // this = Denne entitien
    this.atk = atk; //  this = Denne entitien
    this.helmet = helmet;
    this.sword = sword;
  }

  fight(enemy) {
    let enemyDefense = enemy.helmet ? enemy.helmet.def : 0;
    let attack = this.atk + (this.sword ? this.sword.atk : 0);
    enemy.hp -= attack - enemyDefense;
  }
}

const worldDestroyer = new Sword("WORLD DESTROYER", 9999999999, 9999999999);

const helmet = new Helmet("JØRUNDS HELM OF CONFUSION", 225, 50);

const plotHelmet = new Helmet("HALO (PLOT ARMOR)", 25, 50);

const playerEntity = new Entity("Marius", 500, 25, helmet, worldDestroyer);
const playerTwoEntity = new Entity("Jørund", 200, 250, plotHelmet);

while (playerEntity.hp > 0 && playerTwoEntity.hp > 0) {
  playerEntity.fight(playerTwoEntity);
  playerTwoEntity.fight(playerEntity);

  console.log(
    `${playerEntity.name}'s HP:`,
    playerEntity.hp,
    `${playerEntity.name}'s ATK:`,
    playerEntity.atk
  );

  console.log(
    `${playerTwoEntity.name}'s HP:`,
    playerTwoEntity.hp,
    `${playerTwoEntity.name}'s ATK:`,
    playerTwoEntity.atk
  );
}
