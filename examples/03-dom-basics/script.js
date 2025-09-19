console.log("DOM Manipulation script loaded!");

// Demo 1: Changing Text Content
let changingText = document.getElementById("changingText");

document.getElementById("textBtn1").addEventListener("click", function() {
    changingText.textContent = "Hello, JavaScript learner! 👋";
    console.log("Changed text to hello message");
});

document.getElementById("textBtn2").addEventListener("click", function() {
    changingText.textContent = "Goodbye, see you later! 👋";
    console.log("Changed text to goodbye message");
});

document.getElementById("textBtn3").addEventListener("click", function() {
    changingText.textContent = "Why do programmers prefer dark mode? Because light attracts bugs! 🐛";
    console.log("Told a programming joke!");
});

// Demo 2: Changing Colors & Styles
let colorBox = document.getElementById("colorBox");

document.getElementById("redBtn").addEventListener("click", function() {
    colorBox.style.backgroundColor = "#ff6b6b";
    colorBox.textContent = "I'm red!";
    console.log("Changed box to red");
});

document.getElementById("blueBtn").addEventListener("click", function() {
    colorBox.style.backgroundColor = "#4169e1";
    colorBox.textContent = "I'm blue!";
    console.log("Changed box to blue");
});

document.getElementById("greenBtn").addEventListener("click", function() {
    colorBox.style.backgroundColor = "#32cd32";
    colorBox.textContent = "I'm green!";
    console.log("Changed box to green");
});

document.getElementById("rainbowBtn").addEventListener("click", function() {
    // Fun gradient effect!
    colorBox.style.background = "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)";
    colorBox.textContent = "🌈 Rainbow!";
    colorBox.style.color = "white";
    console.log("Rainbow mode activated!");
});

// Demo 3: Getting User Input
let nameInput = document.getElementById("nameInput");
let textDisplay = document.getElementById("textDisplay");

document.getElementById("greetBtn").addEventListener("click", function() {
    let userName = nameInput.value;

    if (userName === "") {
        textDisplay.textContent = "Please enter your name first!";
        textDisplay.style.backgroundColor = "#ff6b6b";
    } else {
        textDisplay.textContent = "Hello, " + userName + "! Welcome to JavaScript! 🎉";
        textDisplay.style.backgroundColor = "#32cd32";
        console.log("Greeted user:", userName);
    }
});

// Also respond when user presses Enter in the input field
nameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("greetBtn").click();
    }
});

// Demo 4: Changing Sizes
let sizeDemo = document.getElementById("sizeDemo");
let currentSize = 16;  // Starting font size

document.getElementById("biggerBtn").addEventListener("click", function() {
    currentSize += 4;
    sizeDemo.style.fontSize = currentSize + "px";
    console.log("Increased size to:", currentSize + "px");

    // Fun effect: also make it wider
    sizeDemo.style.padding = (20 + currentSize/2) + "px";
});

document.getElementById("smallerBtn").addEventListener("click", function() {
    if (currentSize > 8) {  // Don't go too small
        currentSize -= 4;
        sizeDemo.style.fontSize = currentSize + "px";
        console.log("Decreased size to:", currentSize + "px");

        sizeDemo.style.padding = (20 + currentSize/2) + "px";
    }
});

document.getElementById("resetSizeBtn").addEventListener("click", function() {
    currentSize = 16;
    sizeDemo.style.fontSize = "16px";
    sizeDemo.style.padding = "20px";
    console.log("Reset size to default");
});

// Demo 5: Show/Hide Elements
let magicText = document.getElementById("magicText");
let isVisible = true;

document.getElementById("toggleBtn").addEventListener("click", function() {
    if (isVisible) {
        magicText.style.display = "none";
        isVisible = false;
        console.log("Element hidden");
    } else {
        magicText.style.display = "block";
        isVisible = true;
        console.log("Element shown");
    }
});

document.getElementById("hideBtn").addEventListener("click", function() {
    magicText.style.display = "none";
    isVisible = false;
    console.log("Forced hide");
});

document.getElementById("showBtn").addEventListener("click", function() {
    magicText.style.display = "block";
    isVisible = true;
    console.log("Forced show");
});

// Demo 6: Mouse Events
let mouseBox = document.getElementById("mouseBox");
let enterCount = 0;
let leaveCount = 0;

mouseBox.addEventListener("mouseenter", function() {
    mouseBox.style.backgroundColor = "#ffd93d";
    mouseBox.style.transform = "scale(1.1)";
    mouseBox.textContent = "Hello there! 👋";

    enterCount++;
    document.getElementById("enterCount").textContent = enterCount;
    console.log("Mouse entered the box");
});

mouseBox.addEventListener("mouseleave", function() {
    mouseBox.style.backgroundColor = "#b4a7d6";
    mouseBox.style.transform = "scale(1)";
    mouseBox.textContent = "Come back! 😢";

    leaveCount++;
    document.getElementById("leaveCount").textContent = leaveCount;
    console.log("Mouse left the box");
});

// Bonus: Click event on the mouse box
mouseBox.addEventListener("click", function() {
    mouseBox.textContent = "You clicked me! 🎉";
    mouseBox.style.backgroundColor = "#ff6b6b";
    console.log("Mouse box was clicked!");
});

// Fun startup message
console.log("🎮 All demos are ready! Try clicking buttons and interacting with the page!");
console.log("💡 Tip: You can type element variable names like 'colorBox' or 'currentSize' in the console to see their values!");