"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(clientName = "Janab", size = "Medium", shirttxt = "Apna Time Ayega", quantity = 1) {
    console.log(`Miss."${clientName}" has ordered total '${quantity}' shirts with '${size}' size and also said prints this text "${shirttxt}" on shirt.`);
}
makeShirt("Aqsa Darling", "Small", "Zubair ki Dulhan");
// //Making a Function
// function make_shirt(size:string = "Large", printMessage:string = "I Love TypeScript" ){
//     console.log(`Creating a '${size}' size shirt with "${printMessage}" prints on shirt.`)
// }
// //Calling a function with by default values
// make_shirt();
// //Calling a function now with medium size and by default message
// make_shirt('Medium');
// //Calling a function now with small size and different print message
// make_shirt('small', 'I Love Awami Governor');
