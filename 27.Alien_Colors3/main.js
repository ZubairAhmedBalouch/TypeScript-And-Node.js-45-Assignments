"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Defining Variable
let alien_color = "Green";
// //Using if and Else-if Statements
// if (alien_color === "Green"){
//     console.log("You shot down Green Alien, You earned 5 points");    
// }
// else if (alien_color === "Yellow"){
//     console.log("You shot down Yellow Alien, You earned 10 points");  
// }
// else if (alien_color === "Red"){
//     console.log("You shot down Red Alien, You earned 15 points");   
// }
// //2nd Version
// let alien_color2:string = "Yellow";
// if (alien_color2 === "Yellow"){
//     console.log("You shot down Yellow Alien, You earned 10 points");  
// }
// else if (alien_color2 === "Red"){
//     console.log("You shot down Red Alien, You earned 15 points");   
// }
// else if (alien_color2 === "Green"){
//     console.log("You shot down Green Alien, You earned 5 points");   
// }
//3rd Version
let alien_color3 = "Red";
if (alien_color3 === "Red") {
    console.log("You shot down Red Alien, You earned 15 points");
}
else if (alien_color3 === "Green") {
    console.log("You shot down Green Alien, You earned 5 points");
}
else if (alien_color3 === "Yellow") {
    console.log("You shot down Green Alien, You earned 5 points");
}
