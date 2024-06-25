//Creating Variables
let usernames: string[] = ["Admin","Zubair","Ramiz","Mubeen","Faizan"];
 usernames=[];

if(usernames.length === 0){
    console.log("Your Array is an Empty, You need to find some Users !");   
} 
else{
    //Using for each loop on Array to print special message to Admin and simple message to other users.
usernames.forEach((items => {
    if(items === "Admin"){
        console.log(`Hello ${items}, Would you like to see a Status Report.`);   
    }
    else{
        console.log(`Hello ${items}, Thankyou for Logging in again.`);
        
    }
}))
}