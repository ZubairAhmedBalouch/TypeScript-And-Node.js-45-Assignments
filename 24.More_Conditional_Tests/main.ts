//Defining Variables
let Mango: string = "mango"
let upperCaseMango = "MANGO"
let ten = 10;
let twenty = 20;
let countries: string [] = ["Pakistan","UAE", "Iran", "China"];


//Tests for equality and inequality with strings
console.log(`Is Mango is equal to Mango ?`);
console.log(Mango == "mango");

console.log(`\nIs Mango is not equal to Mango ?`);
console.log(Mango != "mango");

//Tests using the lower case function
console.log(`\nIs MANGO is equal to Mango after converting it into lowercase ?`);
console.log(upperCaseMango.toLowerCase() == "mango");

console.log(`\nIs MANGO is not equal to Mango after converting it into lowercase?`);
console.log(upperCaseMango.toLowerCase() != "mango");

//Numerical tests

//Equal to
console.log("\nis ten is equal to 20");
console.log(ten == 20);

//Not Equal to
console.log("\nis ten is not equal to 20");
console.log(ten != 20);

//Greater than
console.log("\nis Twenty is greater than 10");
console.log(twenty > 10);

//Less Than
console.log("\nis Ten is less than 0");
console.log(ten < 0);

//Greater Than or Equal to
console.log("\nis Twenty is greater than or equal to 5");
console.log(twenty >= 5);

//Less Than or Equal to
console.log("\nis Ten is Less than or equal to 2");
console.log(ten <= 2);


//Test Using "AND" & "OR" Operators
//Using && (AND) Operator
console.log("\n 20 is greater than 10 and 10 is less then 20");
console.log(twenty > 10 && 10 < twenty);

console.log("\n 10 is not greater than 20 and 10 is less then 20");
console.log(ten != 10 && 10 < twenty);

//using || (OR) Operator
console.log("\n 20 is greater than 10 and 10 is equal to 20");
console.log(twenty > 10 || ten == 20);

console.log("\n 10 is greater than 20 and 20 is equal to 10");
console.log(ten > 20 || twenty ==  10);

//Test whether an item is included in Array
console.log("\nIs China included in my Countries List");
console.log(countries.includes("China"));

//Not Included
console.log("\nIs China not included in my Countries List");
console.log(!countries.includes("China"));