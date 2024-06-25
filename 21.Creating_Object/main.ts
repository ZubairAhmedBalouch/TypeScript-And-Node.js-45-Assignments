interface Car {
    CarName: string;
    Model: number;
    color: string;
    price: number;
}

let Car = {
    CarName: "Toyotta Corolla",
    Model: 2022,
    color: "Black",
    price: 5500000
}

console.log(Car);

//WHAT IS INTERFACE AND WHY WE USE IT IN OBJECT: ??
//In Normal Variables we can easily define its data type easily, but in Object, Class we can not normally define the data type of Object, because it can contain many properties things, like Name, Age, email, any function. For that purpose we simply make a templete/interface in which we define each and every thing of object data types Thats basically known as INTERFACE