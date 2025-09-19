// Creating different types of variables
console.log("=== Creating Variables ===");

// String variable (text)
let favoriteFood = "Pizza";
console.log("Favorite food:", favoriteFood);

// Number variables
let score = 50;
let highScore = 100;
console.log("Current score:", score);
console.log("High score:", highScore);

// Boolean variable (true/false)
let gameActive = true;
console.log("Is game active?", gameActive);

// Constant (can't change)
const BONUS_POINTS = 10;
console.log("Bonus points (constant):", BONUS_POINTS);

// Display variables on the page
document.getElementById("food").textContent = favoriteFood;
document.getElementById("score").textContent = score;
document.getElementById("highScore").textContent = highScore;
document.getElementById("gameActive").textContent = gameActive;

// Math operations with variables
function calculateScores() {
    console.log("=== Doing Math ===");

    let totalScore = score + BONUS_POINTS;
    let doubleScore = score * 2;
    let halfScore = score / 2;

    console.log("Score + Bonus:", totalScore);
    console.log("Score × 2:", doubleScore);
    console.log("Score ÷ 2:", halfScore);

    // Update the display
    document.getElementById("totalScore").textContent = totalScore;
    document.getElementById("doubleScore").textContent = doubleScore;
    document.getElementById("halfScore").textContent = halfScore;
}

// Button event listeners
document.getElementById("calculateBtn").addEventListener("click", function() {
    calculateScores();
});

document.getElementById("addPointsBtn").addEventListener("click", function() {
    // Modify the score variable
    score = score + 5;  // Or you could write: score += 5
    console.log("Added 5 points! New score:", score);

    // Update display
    document.getElementById("score").textContent = score;

    // Check if we beat the high score!
    if (score > highScore) {
        highScore = score;
        document.getElementById("highScore").textContent = highScore;
        console.log("🎉 NEW HIGH SCORE!");
    }
});

document.getElementById("resetBtn").addEventListener("click", function() {
    // Reset score to 0
    score = 0;
    console.log("Score reset to:", score);

    // Update display
    document.getElementById("score").textContent = score;
    document.getElementById("totalScore").textContent = "?";
    document.getElementById("doubleScore").textContent = "?";
    document.getElementById("halfScore").textContent = "?";
});

// Demonstrating variable reassignment
console.log("=== Changing Variables ===");

// Strings can be changed
favoriteFood = "Tacos";
console.log("Changed favorite food to:", favoriteFood);

// Numbers can be changed
score = 75;
console.log("Changed score to:", score);

// Booleans can be toggled
gameActive = false;
console.log("Game active changed to:", gameActive);

// But constants cannot be changed!
// Try uncommenting the next line to see an error:
// BONUS_POINTS = 20;  // This would cause an error!

// Fun with string concatenation
let playerName = "Player1";
let welcomeMessage = "Welcome, " + playerName + "! Your score is " + score + " points.";
console.log(welcomeMessage);

// Creating new variables from existing ones
let scoreMessage = "Score: " + score + "/" + highScore;
console.log(scoreMessage);