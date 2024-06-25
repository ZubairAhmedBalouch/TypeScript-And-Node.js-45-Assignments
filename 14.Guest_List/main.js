//Qno 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//Method 1: Using for loop method
// let guestList : string [] = ["Saleem","Dr Sabeen", "Dr Pireh", "Ramiz"];
// for(let i=0; i<guestList.length; i++){
//     console.log(`Dear ` + guestList[i] + `,\n"You are cordially invited to a dinner party by tomorrow, Please grace us with your presence " Thankyou..!\n`);
// }
//Method 2: Using map Method.
let guestList = ["Saleem", "Dr Sabeen", "Dr Pireh", "Ramiz"];
guestList.map((items) => console.log(`Dear ${items}, Your are cordially inivited on dinner.`));
export {};
