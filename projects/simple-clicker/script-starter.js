// MY FIRST JAVASCRIPT PROJECT! 🌟
// This is the easiest project to start with.
// Follow each step and see your webpage come to life!

console.log("🎉 JavaScript is working! Check the console!");

// ===== STEP 1: FIND THE ELEMENTS =====
// We need to "grab" the HTML elements so we can control them

// TODO: Uncomment the lines below (remove the // at the beginning)
// let message = document.getElementById("message");
// let mainButton = document.getElementById("mainButton");
// let counter = document.getElementById("counter");
// let colorBtn = document.getElementById("colorBtn");
// let resetBtn = document.getElementById("resetBtn");
// let surpriseBtn = document.getElementById("surpriseBtn");
// let nameInput = document.getElementById("nameInput");
// let greetBtn = document.getElementById("greetBtn");
// let specialMessage = document.getElementById("specialMessage");

// ===== STEP 2: CREATE A COUNTER =====
// Let's count how many times the button is clicked!

let clickCount = 0;  // Start at zero clicks

// TODO: Make the main button do something when clicked!
// Uncomment these lines:

// mainButton.addEventListener("click", function() {
//     clickCount = clickCount + 1;  // Add 1 to the count
//     counter.textContent = clickCount;  // Show the new count
//     console.log("Button clicked! Count is now:", clickCount);
// });

// ===== STEP 3: CHANGE THE MESSAGE =====
// Let's make the message change when we click!

// TODO: Add this inside the button click function above:
// (Put these lines INSIDE the function, after the counter lines)

//     if (clickCount === 1) {
//         message.textContent = "Great job! You clicked the button! 🎉";
//     } else if (clickCount === 5) {
//         message.textContent = "Wow! 5 clicks! You're getting good at this! ⭐";
//     } else if (clickCount === 10) {
//         message.textContent = "Amazing! 10 clicks! You're a JavaScript master! 🏆";
//     } else if (clickCount > 10) {
//         message.textContent = "You're unstoppable! " + clickCount + " clicks! 🚀";
//     }

// ===== STEP 4: COLOR CHANGER BUTTON =====
// Let's make a button that changes the page colors!

let colors = ["#ff6b6b", "#4ecdc4", "#ffd93d", "#b4a7d6", "#ff8a80"];
let currentColor = 0;

// TODO: Uncomment this code:

// colorBtn.addEventListener("click", function() {
//     document.body.style.background = colors[currentColor];
//     console.log("Changed color to:", colors[currentColor]);
//
//     currentColor = currentColor + 1;
//     if (currentColor >= colors.length) {
//         currentColor = 0;  // Start over
//     }
// });

// ===== STEP 5: RESET BUTTON =====
// Let's add a button to start over!

// TODO: Uncomment this code:

// resetBtn.addEventListener("click", function() {
//     clickCount = 0;
//     counter.textContent = clickCount;
//     message.textContent = "Click the button below!";
//     console.log("Everything reset!");
// });

// ===== STEP 6: SURPRISE BUTTON =====
// This button will do something random and fun!

let surprises = [
    "🎈 Pop! You found a balloon!",
    "🍕 Pizza time! Your favorite!",
    "🌈 Look! A beautiful rainbow!",
    "🦄 A unicorn appears!",
    "⭐ You found a magic star!",
    "🎁 Surprise! You got a present!",
    "🎪 Welcome to the circus!",
    "🎮 Game time! Let's play!"
];

// TODO: Uncomment this code:

// surpriseBtn.addEventListener("click", function() {
//     let randomNumber = Math.floor(Math.random() * surprises.length);
//     let randomSurprise = surprises[randomNumber];
//     message.textContent = randomSurprise;
//     console.log("Surprise:", randomSurprise);
// });

// ===== STEP 7: NAME GREETING =====
// Let's get the user's name and say hello!

// TODO: Uncomment this code:

// greetBtn.addEventListener("click", function() {
//     let userName = nameInput.value;
//
//     if (userName === "") {
//         specialMessage.textContent = "Please type your name first! 😊";
//     } else {
//         specialMessage.textContent = "Hello, " + userName + "! Welcome to JavaScript! 🎉";
//         console.log("Greeted user:", userName);
//     }
// });

// ===== STEP 8: BONUS CHALLENGES! =====
// Try these extra features once you finish the steps above:

// TODO: Make the main button change emoji when clicked
// Hint: mainButton.textContent = "🎉";

// TODO: Add sound effects (ask teacher for help!)

// TODO: Make the counter change colors at certain numbers
// Hint: counter.style.color = "red";

// TODO: Add a button that makes everything bigger
// Hint: document.body.style.fontSize = "150%";

// TODO: Create a button that shows the current time
// Hint: new Date().toLocaleTimeString()

// ===== FINISHED? TRY THESE IDEAS! =====
// 1. Change the button emoji to something you like
// 2. Add your own surprise messages
// 3. Change the colors in the colors array
// 4. Make the counter start at a different number
// 5. Add more fun buttons with your own ideas!

console.log("📝 Instructions loaded! Start by uncommenting Step 1!");
console.log("💡 Tip: Remove the // at the beginning of lines to make them work!");
console.log("🎯 Goal: Follow the steps and watch your webpage become interactive!");

// ===== WHAT YOU'RE LEARNING =====
// ✅ Variables (storing information)
// ✅ Functions (code that runs when something happens)
// ✅ Events (responding to button clicks)
// ✅ Changing text and colors
// ✅ Getting user input
// ✅ Using if statements
// ✅ Arrays (lists of things)
// ✅ Math.random() (random numbers)

// You're learning real programming! These are the same concepts
// that professional developers use to build websites and apps! 🚀