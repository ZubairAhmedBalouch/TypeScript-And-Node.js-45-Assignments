//Q42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


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

let great_magicians= make_great(Magicians_Names);

console.log(great_magicians);

//------------------FOR EACH METHOD VS MAP METHOD----------------------------
//for Each method humein output list ki soorat mein one by one kar kay deta hai.
//Map method huein output array ki soorat mein list bna kar deta hai.
