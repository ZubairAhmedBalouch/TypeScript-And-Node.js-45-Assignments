//Q 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// lower case
let personName = "Zubair Ahmed";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase())); //in vs code there is no title case option is availaible thats why replace and replace(/\bw/g,c => c.toUpperCase() command is being used here, that command basically merges both lower case and upper case to form title case.
export {};
