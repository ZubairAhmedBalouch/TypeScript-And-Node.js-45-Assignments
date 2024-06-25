//Creating a function with parameter which return values in string

function city_country(city:string, country:string): string {
    return `"${city}, ${country}"`;  //Return command only save values in city_country function
                                    //return will not print values, it only saves in function for print we will use console in calling function.
                                    //jidher hum chahengay udhr return ko print karwa skhtay hain, ye console ki trah khud se print nahe hoga.
}

//Calling a function and print the return value
console.log(city_country("Lahore","Pakistan"));

console.log(city_country("Bejing","China"));

console.log(city_country("London","UK"));