console.log("Events script loaded! Ready for interaction!");

// CLICK EVENTS
let clickCount = 0;
let clickCountDisplay = document.getElementById("clickCount");

document.getElementById("singleClick").addEventListener("click", function() {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
    console.log("Button clicked! Total clicks:", clickCount);

    // Fun effect: change button color randomly
    let colors = ["#ff6b6b", "#4ecdc4", "#ffd93d", "#b4a7d6", "#32cd32"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
});

document.getElementById("resetCounter").addEventListener("click", function() {
    clickCount = 0;
    clickCountDisplay.textContent = clickCount;
    console.log("Counter reset!");
});

document.getElementById("add10").addEventListener("click", function() {
    clickCount += 10;
    clickCountDisplay.textContent = clickCount;
    console.log("Added 10! New count:", clickCount);
});

// DOUBLE CLICK EVENT
let doubleClickBox = document.getElementById("doubleClickBox");
let colorIndex = 0;
let colors = ["#ff6b6b", "#4ecdc4", "#ffd93d", "#32cd32", "#667eea"];

doubleClickBox.addEventListener("dblclick", function() {
    this.style.backgroundColor = colors[colorIndex];
    this.textContent = "Color changed! 🎨";
    colorIndex = (colorIndex + 1) % colors.length;  // Cycle through colors
    console.log("Double clicked! Changed to color index:", colorIndex);

    // Reset text after 1 second
    setTimeout(() => {
        this.textContent = "Double-click me!";
    }, 1000);
});

// HOVER EVENTS
let hoverBox = document.getElementById("hoverBox");
let hoverCount = 0;
let hoverCountDisplay = document.getElementById("hoverCount");

hoverBox.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "#4ecdc4";
    this.style.transform = "scale(1.2) rotate(5deg)";
    this.textContent = "You're hovering! ✨";
    hoverCount++;
    hoverCountDisplay.textContent = hoverCount;
    console.log("Mouse entered! Hover count:", hoverCount);
});

hoverBox.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "#ff6b6b";
    this.style.transform = "scale(1) rotate(0deg)";
    this.textContent = "Come back! 👋";
    console.log("Mouse left!");
});

// INPUT EVENTS
let liveInput = document.getElementById("liveInput");
let liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("input", function() {
    let text = this.value;
    if (text === "") {
        liveOutput.textContent = "nothing yet";
    } else {
        liveOutput.textContent = text;
    }
    console.log("User typed:", text);
});

// Number input with calculation
let numberInput = document.getElementById("numberInput");
let squareOutput = document.getElementById("squareOutput");

numberInput.addEventListener("input", function() {
    let number = this.value;
    if (number === "") {
        squareOutput.textContent = "?";
    } else {
        let squared = number * number;
        squareOutput.textContent = squared;
        console.log(number + " squared is " + squared);
    }
});

// KEYBOARD EVENTS
let keyInput = document.getElementById("keyInput");
let keyPressed = document.getElementById("keyPressed");
let keyCode = document.getElementById("keyCode");

keyInput.addEventListener("keydown", function(event) {
    keyPressed.textContent = event.key;
    keyCode.textContent = event.code;
    console.log("Key pressed:", event.key, "Code:", event.code);

    // Fun: Change background color based on key
    if (event.key === "r" || event.key === "R") {
        keyInput.style.backgroundColor = "#ffcccc";
    } else if (event.key === "g" || event.key === "G") {
        keyInput.style.backgroundColor = "#ccffcc";
    } else if (event.key === "b" || event.key === "B") {
        keyInput.style.backgroundColor = "#ccccff";
    }
});

keyInput.addEventListener("keyup", function() {
    // Reset background when key is released
    keyInput.style.backgroundColor = "white";
});

// MOUSE POSITION / DRAWING
let drawingArea = document.getElementById("drawing-area");

drawingArea.addEventListener("click", function(event) {
    // Get click position relative to the drawing area
    let rect = this.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // Create a dot at that position
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = x + "px";
    dot.style.top = y + "px";

    // Random colors for fun!
    let dotColors = ["#ff6b6b", "#4ecdc4", "#ffd93d", "#667eea", "#32cd32"];
    dot.style.backgroundColor = dotColors[Math.floor(Math.random() * dotColors.length)];

    this.appendChild(dot);
    console.log("Drew dot at position:", x, y);
});

document.getElementById("clearDrawing").addEventListener("click", function() {
    drawingArea.innerHTML = "";
    console.log("Drawing cleared!");
});

// MINI GAME
let gameScore = 0;
let gameMistakes = 0;
let currentTarget = "RED";
let targetColors = ["RED", "BLUE", "GREEN"];

function updateTarget() {
    currentTarget = targetColors[Math.floor(Math.random() * targetColors.length)];
    document.getElementById("targetColor").textContent = currentTarget;

    // Change color of the target text
    if (currentTarget === "RED") {
        document.getElementById("targetColor").style.color = "#ff6b6b";
    } else if (currentTarget === "BLUE") {
        document.getElementById("targetColor").style.color = "#4169e1";
    } else if (currentTarget === "GREEN") {
        document.getElementById("targetColor").style.color = "#32cd32";
    }
}

document.getElementById("redGameBtn").addEventListener("click", function() {
    if (currentTarget === "RED") {
        gameScore++;
        console.log("Correct! Score:", gameScore);
    } else {
        gameMistakes++;
        console.log("Wrong! Mistakes:", gameMistakes);
    }
    document.getElementById("gameScore").textContent = gameScore;
    document.getElementById("gameMistakes").textContent = gameMistakes;
    updateTarget();
});

document.getElementById("blueGameBtn").addEventListener("click", function() {
    if (currentTarget === "BLUE") {
        gameScore++;
        console.log("Correct! Score:", gameScore);
    } else {
        gameMistakes++;
        console.log("Wrong! Mistakes:", gameMistakes);
    }
    document.getElementById("gameScore").textContent = gameScore;
    document.getElementById("gameMistakes").textContent = gameMistakes;
    updateTarget();
});

document.getElementById("greenGameBtn").addEventListener("click", function() {
    if (currentTarget === "GREEN") {
        gameScore++;
        console.log("Correct! Score:", gameScore);
    } else {
        gameMistakes++;
        console.log("Wrong! Mistakes:", gameMistakes);
    }
    document.getElementById("gameScore").textContent = gameScore;
    document.getElementById("gameMistakes").textContent = gameMistakes;
    updateTarget();
});

// Initialize game
updateTarget();

console.log("🎮 All events are set up! Try interacting with everything on the page!");