//Qno 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//Method 1: using indexing method
// let names:string[]=['Saleem','Ramiz','Mubeen','Ali','Faizan'];
// let message:string="Hi, How are you dear: ";
// console.log(message + names[0]);
// console.log(message + names[1]);
// console.log(message + names[2]);
// console.log(message + names[3]);
// console.log(message + names[4]);
//Method 2: using loop method
var names1 = ['Saleem', 'Ramiz', 'Mubeen', 'Ali', 'Faizan'];
var message1 = "Hi, How are you dear: ";
for (var i = 0; i < names1.length; i++) {
    console.log(message1 + names1[i]);
}
