//Q 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.


let quote: string = "Education is the most powerful weapon which you can use to change the world.";
let famous_person: string =  "Nelson Mandela";
let message:string = `${famous_person} once said, "${quote}"`; //stored both famous person and quote in message using templete litrelas
console.log(message);
