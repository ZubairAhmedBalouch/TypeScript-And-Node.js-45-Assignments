// Q 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


//Defining a function and used REST parameter to take multiple items from user.

function makeSandwich(...items:string[]){//REST parameter mein hum kitne bh argumnts deskhtay hain,items store krwaskht h
    console.log("\n==> Making a Special Sandwich for your with the following items: ");

    items.forEach(item => console.log(item));
    
    console.log("\nYour Sandwich is ready..! Now Just Enjoy it.");
    
}

//Calling function 3 times with different number of arguments.
makeSandwich("Chicken", "Egg","Mayo");

makeSandwich("Butter", "Bread","Cheese","Tomato");

makeSandwich("Bread","Chicken", "Egg", "Cheese", "Mayo", "Tomato", "Butter");
