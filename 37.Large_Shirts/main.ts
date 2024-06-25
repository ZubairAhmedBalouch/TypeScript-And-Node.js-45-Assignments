//Making a Function

function make_shirt(size:string = "Large", printMessage:string = "I Love TypeScript" ){
    console.log(`Creating a '${size}' size shirt with "${printMessage}" prints on shirt.`)
}

//Calling a function with by default values
make_shirt();

//Calling a function now with medium size and by default message
make_shirt('Medium');

//Calling a function now with small size and different print message
make_shirt('small', 'I Love Awami Governor');