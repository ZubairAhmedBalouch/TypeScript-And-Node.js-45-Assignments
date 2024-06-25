//Creating function

function describe_city( city:string, country:string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

//Calling the function
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Lahore");

//Changing the default value
describe_city("\nTokyo","Japan")
