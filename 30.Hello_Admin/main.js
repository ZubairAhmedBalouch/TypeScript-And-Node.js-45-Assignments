"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
Object.defineProperty(exports, "__esModule", { value: true });
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["Admin", "Zubair", "Ramiz", "Mubeen", "Faizan"];
usernames.forEach(items => {
    if (items === "Admin") {
        console.log(`Hello ${items}, Would you like to see a status report.`);
    }
    else {
        console.log(`Hello ${items}, thank you for logging in again.`);
    }
});
