//Q41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


//Creating an Array that contains magicians names
let Magicians_Names:string[] = ["David Copperfield","Rameez","Arhan","Zain"];

//Creating a function
function show_magicians(Magicians:string[]){
    Magicians.forEach(names => console.log(names));

}

//Calling the fuction and passed Magicians names array in function.
show_magicians(Magicians_Names);