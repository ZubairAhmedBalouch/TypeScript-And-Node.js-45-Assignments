//Qno 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.





//Using Splice Method created Guest List
let guestList : string [] = ["Saleem","Dr Sabeen", "Dr Pireh", "Ramiz"];
// guestList.forEach((items) => console.log(`Dear ${items}, Your are cordially inivited on dinner.`));

let not_Comming: string = guestList[0];
console.log(`\n \n${not_Comming}, is not comming on dinner \n`);
guestList.splice(0,1,"Rida"); // splice will remove name from list by using indexing and it will also add new name on it. first 0 means remove "Saleem", add there "Rida", here Rida added to index 0 and saleem shifted to index 1, second 1 means remove index 1 which is now "saleem". 
guestList.forEach((items) => console.log(`Dear ${items}, Your are cordially inivited on dinner.`));

guestList.unshift("Atif Aslam","Chahat Fateh Ali Khan")
guestList.forEach((items) => console.log(`${items}, Your are cordially inivited on dinner`));

//Using indexOf Method.

// let guestList1 : string [] = ["Saleem","Dr Sabeen", "Dr Pireh", "Ramiz"];
// guestList1.forEach((items) => console.log(`Dear ${items}, You are inivited on dinner`))
// let absent : string = "Saleem";
// console.log(`\n${absent}, in not comming on dinner.\n`);
// let new_Guest : string = "Rida";
// guestList1 [guestList1.indexOf(absent)] = new_Guest; //Ye absent ki index mein ja kar wahan new guest add karega.
// guestList1.forEach((items) => console.log(`Dear ${items}, You are inivited on dinner`)); // for Each one by one kar kay array ki items ko print karega.





