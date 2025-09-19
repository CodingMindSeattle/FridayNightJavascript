// This is a comment! It doesn't run, it's just for humans to read

// Print to the console
console.log("Hello from JavaScript!");
console.log("If you can see this in the console, JavaScript is working!");

// Create some variables
let myName = "Alex";  // Change this to your name!
let myAge = 13;       // Change this to your age!
let likePizza = true; // Do you like pizza?

// Print our variables
console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("I like pizza:", likePizza);

// Let's do some math
let birthYear = 2024 - myAge;
console.log("I was born in:", birthYear);

// Change something on the page!
let welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.textContent = "Hello! JavaScript is working! Welcome, " + myName + "!";

// Fun message
console.log("🎉 Congratulations! You're running JavaScript!");
console.log("Try changing the values of myName and myAge in the script.js file!");

// Create a combined message
let fullMessage = "Hi! I'm " + myName + " and I'm " + myAge + " years old.";
console.log(fullMessage);