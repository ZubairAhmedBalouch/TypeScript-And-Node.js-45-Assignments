"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color = "Red";
if (alien_color === "Green") {
    console.log("Player Just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
//Second Version
if (alien_color === "Blue") {
    console.log("I am color blue");
}
else {
    console.log("I came from Else Statement");
}
