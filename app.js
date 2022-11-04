// const inquirer = require('inquirer')
import Frog from "./classes/frog.js";
import Rabbit from "./classes/rabbit.js";
import inquirer from "inquirer";
let myPet;

const start = async () => {
  const { typeOfPet } = await inquirer.prompt({
    type: "list",
    name: "typeOfPet",
    message: "please choose what pet you would like to adopt",
    choices: [
      {
        key: "a",
        name: "Frog",
        value: "frog",
      },
      {
        key: "b",
        name: "Rabbit",
        value: "rabbit",
      },
    ],
  });
  const { petName } = await inquirer.prompt({
    type: "input",
    name: "petName",
    message: "what would you like to call your cyber pet?",
  });

  if (typeOfPet === "frog") {
    myPet = new Frog(petName);
  } else if (typeOfPet === "rabbit") {
    myPet = new Rabbit(petName);
  }
  console.log(`you have a ${myPet.name}`);
  userChoice();
};

let userChoice = async () => {
  const { choice } = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: "what would you like to do with your pet?",
    choices: [
      {
        key: "a",
        name: "stroke your pet",
        value: "play",
      },
      {
        key: "b",
        name: "feed your pet treats",
        value: "feed",
      },
      {
        key: "c",
        name: "give your pet a drink",
        value: "drink",
      },
      {
        key: "d",
        name: "view your pet information",
        value: "stats",
      },
      {
        key: "e",
        name: "quit the game!",
        value: "quit",
      },
    ],
  });

  // if (choice === "play") await myPet.play()

  if (choice === "feed") await myPet.eats();
  if (choice === "play") await myPet.play();
  if (choice === "stats") await myPet.stats();
  if (choice === "drink") await myPet.drinks();
  if (choice === "quit") {
    const quitChoice = await confirmQuit();
    if (quitChoice) return;
  }

  myPet.stats();
  userChoice();
};

let confirmQuit = async () => {
  const { quitChoice } = await inquirer.prompt({
    type: "list",
    name: "quitChoice",
    message: "are you sure you want to quit? your pet will be given to adoption",
    choices: [
      {
        key: "a",
        name: "yes i'm sure",
        value: "yes",
      },
      {
        key: "b",
        name: "no i'll keep playing",
        value: "no",
      },
    ],
  });
  if (quitChoice === "yes") return true;
  else return false;
};

start();
