"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ["Admin", "Zubair", "Ramiz", "Mubeen", "Faizan"];
usernames = [];
if (usernames.length === 0) {
    console.log("Your Array is an Empty, You need to find some Users !");
}
else {
    usernames.forEach((items => {
        if (items === "Admin") {
            console.log(`Hello ${items}, Would you like to see a Status Report.`);
        }
        else {
            console.log(`Hello ${items}, Thankyou for Logging in again.`);
        }
    }));
}
