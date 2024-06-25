//Creating Variable
let usernames: string[] = ["Admin", "Zubair","Ramiz","Mubeen", "Faizan"];

//Using for each loop on Array to print special message to Admin and simple message to other users
usernames.forEach(items =>{
    if (items === "Admin"){
        console.log(`Hello ${items}, Would you like to see a status report.`)
    }
    else {
        console.log(`Hello ${items}, thank you for logging in again.`)
    }
});