//Creating a Guest List Array
let guestList : string [] = ["Saleem","Dr Sabeen", "Dr Pireh", "Ramiz"];

guestList.forEach((items) => console.log(`Dear ${items}, You all are invited on dinner`));

//Making variable for those guest who cant come
let not_Comming: string = guestList[0];

//Printing a message for guest who is not comming
console.log(`\n${not_Comming}, is not comming on dinner. \n`);

//Add or remove value from Array
guestList.splice(0,1,"Rida");

//Message print for bigger table
console.log("Good News ! We have Found a Bigger Table for Dinner.\n");

//Adding new value at starting  index of Array
guestList.unshift("Arhaan");

//Adding new value at ending index of Array
guestList.push("Sir Shaman");

//Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest at middle of index array
guestList.splice(middleIndex, 0 , "Madam Shahida"  );

//Sending invitation message to our guests one by one with their names
guestList.forEach(guests => console.log(`Dear ${guests}, You are cordially invited on Dinner party. `));



