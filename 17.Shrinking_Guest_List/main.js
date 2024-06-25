"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating a Guest List Array
let guestList = ["Saleem", "Dr Sabeen", "Dr Pireh", "Ramiz"];
guestList.forEach((items) => console.log(`Dear ${items}, You all are invited on dinner`));
//Making variable for those guest who cant come
let not_Comming = guestList[0];
//Printing a message for guest who is not comming
console.log(`\n${not_Comming}, is not comming on dinner. \n`);
//Add or remove value from Array
guestList.splice(0, 1, "Rida");
//Message print for bigger table
console.log("Good News ! We have Found a Bigger Table for Dinner.\n");
//Adding new value at starting  index of Array
guestList.unshift("Arhaan");
//Adding new value at ending index of Array
guestList.push("Sir Shaman");
//Get a middle index of our guest list array
let middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest at middle of index array
guestList.splice(middleIndex, 0, "Madam Shahida");
//Sending invitation message to our guests one by one with their names
guestList.forEach(guests => console.log(`Dear ${guests}, You are cordially invited on Dinner party`));
//Question 17
console.log("\n Unfortunately, new dinner table wont arrive on time, So I can only invite two pepole for Dinner");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest} I cant invite you on dinner`);
}
console.log("\nInvitation to last two guests on dinner. \n");
//Sending invitation message to last two guests.
guestList.forEach(twoguests => console.log(`Luckily, ${twoguests} You are invited on dinner`));
guestList.pop();
guestList.pop();
console.log(`Empty List`, guestList);
