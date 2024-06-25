//Making Array of world places and printed its original order
let Worldplaces: string [] = ["Madina","Karbala","Najaf","Azad Kashmir","Spain"];
console.log("Original Order:", Worldplaces);

//Printed World Places Array in Alphabetic Order without modifing the original Array
console.log("Alphabetic Order:",[...Worldplaces].sort());

//Show that the Array is still in Original order.
console.log("Still in Original Order:", Worldplaces);

//Printed World Places Array in Reverse Alphabetic Order without modifing original Array
console.log("Reverse Alphabetic Order",[...Worldplaces].reverse())

//Show that the Array is still in Original order.
console.log("Still in Original Order",Worldplaces);

//We have Changed Original Array order into Reversed
console.log("Original Array Reversed Order:", Worldplaces.reverse())

//Again Reversed Array and its back to Original Array
console.log("Back to Original Array Order:", Worldplaces.reverse())

//Printed the Array to show that the order has been changed into the Alphabetical Order.
console.log("Sorted in Alphabetical Order:", Worldplaces.sort());

//Again changed the Alphabetical Order Array into Reversed Order.
console.log("Reversed Order Again:", Worldplaces.reverse());
