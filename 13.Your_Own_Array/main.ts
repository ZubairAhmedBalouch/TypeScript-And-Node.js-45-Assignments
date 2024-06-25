//Qno 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


//Method 1, performed task by using for loop method.

// let transportation : string[] = ["Car","Bike","Bus","Aeroplane","Cycle"];
// for(let i=0; i<transportation.length; i++){
//     console.log('I would like to own a '+ transportation[i]);
// }

//Method 2, performed task by using for Each method.

// let transportations : string[] = ["Car","Bike","Bus","Aeroplane","Cycle"];
// transportations.forEach(Mode => console.log(`I would like to own a ${Mode}`)); //for Each method list mein se one by one kar kay items/cheezen series mein uthata hai hum iss liye isse use kartay hain.

//Method 3, performed task by using map method.

let transportationMode : string[] = ["Car","Bike","Bus","Aeroplane","Cycle"];
transportationMode.map(Mode => console.log(`I would like to own a ${Mode}`)); //Map method sub items ko aik aik kar kay call karega ye for Each ki trah kam krta hai.



