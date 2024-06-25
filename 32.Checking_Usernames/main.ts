//Array of Current Users
let current_users: string[] = ["Ramiz", "Mubeen", "Aina", "Sabeen","Rida"];

//Array of New users
let new_users: string[] = ["Zubair", "Aina", "Sabeen","Faizan","Ali"];

new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()) 
    ){
    console.log(`${newUser} this name is already taken, you need to enter a new user name.`);
    }else {
        console.log(`${newUser} this user name is available`);
        
    }
});

//Some is built-in call back functon of TS it check and compare array elements one by one