#! /usr/bin/env node

import inquirer from "inquirer";

class Hero{
    name: string;
    health = 100;
    constructor(name: string){
        this.name = name
    }
    decreaseHealth(){
        this.health -= 20
    }
    increaseHealth(){
        this.health = 100
    }
}

class Enemy{
    name: string;
    health = 100;

    constructor(name: string){
        this.name = name
    }
    decreaseHealth(){
        this.health -= 20
    }
    increaseHealth(){
        this.health = 100
    }

}

async function main(){
const { heroName} = await inquirer.prompt([
    {
        name: "heroName",
        type: "input",
        message: "Enter your Hero Name : "
    }
]);

const{ enemyType } = await inquirer.prompt([
    {
        name: "enemyType",
        type: "list",
        message: "Select the Enemy you fight with : ",
        choices: ["Alien","Witch","Zombie"]
    }
]);

const hero = new Hero(heroName)
const enemy = new Enemy(enemyType)

console.log(`${enemy.name} V/S ${hero.name}`);

do{
    const action  = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "Choose the attack type of perform action",
            choices: ["Attack","Defend","Range Target","Run"]
        }
    ]);


  switch ( action ){
    case "Attack":
        const randomNum = Math.random();
        if(randomNum > 0.5){
            hero.decreaseHealth();
            console.log(`${hero.name} health: ${hero.health}`);
            console.log(`${enemy.name} health: ${enemy.health} `);
            if(hero.health <= 0){
                console.log("You Loss ! try again");
                return
            }
        }else {
            enemy.decreaseHealth();
            console.log(`${hero.name} health: ${hero.health}`);
            console.log(`${enemy.name} health: ${enemy.health} `);
            if(hero.health <= 0){
                console.log("Congraatulation!! you won ");
                return
            }
        }
        break;
}

 }
 while(true)
 }
    main();