"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//Array of Current Users
let current_users = ["Ramiz", "Mubeen", "Aina", "Sabeen", "Rida"];
//Array of New users
let new_users = ["Zubair", "Aina", "Sabeen", "Faizan", "Ali"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} this is already taken, you need to enter a new user name.`);
    }
    else {
        console.log(`${newUser} this user name is available`);
    }
});
