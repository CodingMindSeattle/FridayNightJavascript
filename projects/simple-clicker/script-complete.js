// MY FIRST JAVASCRIPT PROJECT - COMPLETE VERSION! 🌟

console.log("🎉 JavaScript is working! Check the console!");

// ===== STEP 1: FIND THE ELEMENTS =====
let message = document.getElementById("message");
let mainButton = document.getElementById("mainButton");
let counter = document.getElementById("counter");
let colorBtn = document.getElementById("colorBtn");
let resetBtn = document.getElementById("resetBtn");
let surpriseBtn = document.getElementById("surpriseBtn");
let nameInput = document.getElementById("nameInput");
let greetBtn = document.getElementById("greetBtn");
let specialMessage = document.getElementById("specialMessage");

// ===== STEP 2: CREATE A COUNTER =====
let clickCount = 0;

mainButton.addEventListener("click", function() {
    clickCount = clickCount + 1;
    counter.textContent = clickCount;
    console.log("Button clicked! Count is now:", clickCount);

    // ===== STEP 3: CHANGE THE MESSAGE =====
    if (clickCount === 1) {
        message.textContent = "Great job! You clicked the button! 🎉";
        mainButton.textContent = "🎉";
    } else if (clickCount === 5) {
        message.textContent = "Wow! 5 clicks! You're getting good at this! ⭐";
        mainButton.textContent = "⭐";
    } else if (clickCount === 10) {
        message.textContent = "Amazing! 10 clicks! You're a JavaScript master! 🏆";
        mainButton.textContent = "🏆";
    } else if (clickCount === 20) {
        message.textContent = "INCREDIBLE! 20 clicks! You're a coding legend! 👑";
        mainButton.textContent = "👑";
        counter.style.color = "gold";
        counter.style.textShadow = "2px 2px 4px rgba(0,0,0,0.5)";
    } else if (clickCount > 20) {
        message.textContent = "You're unstoppable! " + clickCount + " clicks! 🚀";
        mainButton.textContent = "🚀";
    }

    // Fun animation effect
    mainButton.style.transform = "scale(0.8)";
    setTimeout(() => {
        mainButton.style.transform = "scale(1)";
    }, 100);
});

// ===== STEP 4: COLOR CHANGER BUTTON =====
let colors = ["linear-gradient(135deg, #ff6b6b, #4ecdc4)",
             "linear-gradient(135deg, #ffd93d, #ff8a80)",
             "linear-gradient(135deg, #b4a7d6, #667eea)",
             "linear-gradient(135deg, #32cd32, #98fb98)",
             "linear-gradient(135deg, #ff1493, #ffa500)"];
let currentColor = 0;

colorBtn.addEventListener("click", function() {
    document.body.style.background = colors[currentColor];
    console.log("Changed background to color", currentColor + 1);

    currentColor = currentColor + 1;
    if (currentColor >= colors.length) {
        currentColor = 0;
    }

    colorBtn.textContent = "Color " + (currentColor + 1) + "!";
});

// ===== STEP 5: RESET BUTTON =====
resetBtn.addEventListener("click", function() {
    clickCount = 0;
    counter.textContent = clickCount;
    counter.style.color = "#ff6b6b";
    counter.style.textShadow = "none";
    message.textContent = "Click the button below!";
    mainButton.textContent = "😊";
    specialMessage.textContent = "Welcome! Let's learn JavaScript together!";
    nameInput.value = "";

    console.log("Everything reset!");
});

// ===== STEP 6: SURPRISE BUTTON =====
let surprises = [
    "🎈 Pop! You found a balloon!",
    "🍕 Pizza time! Your favorite!",
    "🌈 Look! A beautiful rainbow!",
    "🦄 A unicorn appears!",
    "⭐ You found a magic star!",
    "🎁 Surprise! You got a present!",
    "🎪 Welcome to the circus!",
    "🎮 Game time! Let's play!",
    "🐱 A cute kitten says hi!",
    "🍪 You found a magic cookie!",
    "🎭 Drama time! You're the star!",
    "🎨 Art time! You're creative!",
    "🏆 You win the awesome award!",
    "🌟 You're a shining star!",
    "🎵 Music time! Dance party!"
];

surpriseBtn.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * surprises.length);
    let randomSurprise = surprises[randomNumber];
    message.textContent = randomSurprise;

    // Fun color flash effect
    message.style.backgroundColor = "#ffd93d";
    setTimeout(() => {
        message.style.backgroundColor = "#f0f0f0";
    }, 1000);

    console.log("Surprise:", randomSurprise);
});

// ===== STEP 7: NAME GREETING =====
greetBtn.addEventListener("click", function() {
    let userName = nameInput.value.trim();

    if (userName === "") {
        specialMessage.textContent = "Please type your name first! 😊";
        specialMessage.style.color = "#ff6b6b";
    } else {
        specialMessage.textContent = "Hello, " + userName + "! Welcome to JavaScript! 🎉";
        specialMessage.style.color = "#32cd32";

        // Bonus: Update the page title with their name
        document.title = userName + "'s JavaScript Project!";

        console.log("Greeted user:", userName);
    }
});

// Bonus: Allow Enter key in name input
nameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        greetBtn.click();
    }
});

// ===== BONUS FEATURES =====

// Add keyboard shortcuts
document.addEventListener("keydown", function(event) {
    if (event.key === " ") { // Spacebar
        mainButton.click();
    } else if (event.key === "c") { // C key
        colorBtn.click();
    } else if (event.key === "s") { // S key
        surpriseBtn.click();
    } else if (event.key === "r") { // R key
        resetBtn.click();
    }
});

// Add a time display
function updateTime() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.title = "My JavaScript Project - " + timeString;
}

setInterval(updateTime, 1000); // Update every second

// Celebration effect for milestones
function celebrate() {
    let confetti = document.createElement("div");
    confetti.textContent = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "0px";
    confetti.style.fontSize = "30px";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "1000";
    confetti.style.animation = "fall 3s linear";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Add CSS for falling animation
let style = document.createElement("style");
style.textContent = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
    }
}
`;
document.head.appendChild(style);

// Trigger celebration at special milestones
let originalButtonClick = mainButton.onclick;
mainButton.addEventListener("click", function() {
    if (clickCount === 10 || clickCount === 20 || clickCount === 50) {
        celebrate();
    }
});

console.log("🎮 Complete version loaded!");
console.log("🎯 Try these keyboard shortcuts:");
console.log("   Spacebar = Click main button");
console.log("   C = Change colors");
console.log("   S = Surprise");
console.log("   R = Reset");
console.log("🌟 Great job learning JavaScript!");