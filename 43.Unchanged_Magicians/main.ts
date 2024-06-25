// Q 43: Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//Creating an Array that contains magicians names
let Magicians_Names:string[] = ["David Copperfield","Rameez","Arhan","Zain"];

//Creating a function
function show_magicians(Magicians:string[]){
    Magicians.forEach(names => console.log(names));
}

//Calling the fuction and passed Magicians names array in function.
show_magicians(Magicians_Names);

//Create a Modified Creating function
function make_great(Magicians:string[]){
    return Magicians.map(names => `The Great ${names}`); 
    }

// let great_magicians= make_great(Magicians_Names);
// console.log(great_magicians);

//Q43
//Making a copy of orginal Array (Magicians_Names) through .slice() Function
let copy_Magicians_Names = Magicians_Names.slice();

//Modify the copied Array to include "The Great" with their names.
let copy_great_magicians = make_great(copy_Magicians_Names);

//Showing both Arrays Original and Copy

//original
console.log("\nOriginal Array\n");
show_magicians(Magicians_Names);

//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);