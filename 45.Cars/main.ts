// Q 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


//Define a function to create a object for car with optional options
function make_car(manufacturer, model, ...options){
    //Initilized a car with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    //Adding Additional Options to the car Object
    options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
});
   return car;
}

//Call the function to make a car object
let myCar = make_car("Toyyota","Corolla", "Color: Blue");

//print the above variable to check that all the information has been stored in car object.
console.log(myCar)