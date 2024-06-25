"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating an Array that contains magicians names
let Magicians_Names = ["David Copperfield", "Rameez", "Arhan", "Zain"];
//Creating a function
function show_magicians(Magicians) {
    Magicians.forEach(names => console.log(names));
}
//Calling the fuction and passed Magicians names array in function.
show_magicians(Magicians_Names);
