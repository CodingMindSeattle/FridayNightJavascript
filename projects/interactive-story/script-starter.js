// INTERACTIVE STORY - STARTER CODE
// Welcome! This is where you'll build your interactive story.
// Follow the TODOs to complete your adventure!

// ===== VARIABLES =====
let playerName = "";
let currentScene = 0;
let score = 0;
let inventory = [];

// Get all the HTML elements we need
let nameSetup = document.getElementById("nameSetup");
let storyScreen = document.getElementById("storyScreen");
let storyText = document.getElementById("storyText");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let nameInput = document.getElementById("nameInput");
let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");
let inventoryDiv = document.getElementById("inventory");
let inventoryList = document.getElementById("inventoryList");
let scoreDisplay = document.getElementById("scoreDisplay");
let scoreNumber = document.getElementById("score");

// ===== START THE GAME =====
startBtn.addEventListener("click", function() {
    playerName = nameInput.value;

    // Check if they entered a name
    if (playerName === "") {
        alert("Please enter your name!");
        return;
    }

    console.log("Game started! Player name:", playerName);

    // Hide name setup, show story
    nameSetup.style.display = "none";
    storyScreen.style.display = "block";

    // TODO: Show the score display
    // Hint: Remove the "hidden" class from scoreDisplay

    // Start the first scene
    showScene(0);
});

// ===== SCENES =====
// This function shows different parts of the story
function showScene(sceneNumber) {
    currentScene = sceneNumber;
    console.log("Showing scene:", sceneNumber);

    // Hide the third button by default
    choice3.classList.add("hidden");

    if (sceneNumber === 0) {
        // SCENE 0: The beginning
        storyText.innerHTML = "Welcome, <span id='characterName'>" + playerName + "</span>! You stand at the entrance of a mysterious forest. The path splits in two directions.";

        choice1.textContent = "Take the left path (looks dark)";
        choice2.textContent = "Take the right path (you hear water)";

        choice1.onclick = function() {
            // TODO: Add 10 points to the score
            // TODO: Call updateScore() to show the new score
            // TODO: Go to scene 1
            showScene(1);
        };

        choice2.onclick = function() {
            // TODO: Add 5 points to the score
            // TODO: Go to scene 2
            showScene(2);
        };

    } else if (sceneNumber === 1) {
        // SCENE 1: The dark path
        storyText.innerHTML = "The dark path leads you to a glowing cave. Inside, you see a treasure chest and a sleeping dragon!";

        choice1.textContent = "Try to steal the treasure";
        choice2.textContent = "Leave quietly";

        // TODO: Show the third button
        // TODO: Set choice3.textContent to "Try to befriend the dragon"

        choice1.onclick = function() {
            // TODO: The dragon wakes up! Go to scene 3 (game over)
            showScene(3);
        };

        choice2.onclick = function() {
            // Safe choice - go to scene 4
            showScene(4);
        };

        choice3.onclick = function() {
            // TODO: Creative choice! Add an item to inventory
            // addItem("Dragon Friend Badge");
            // TODO: Add 50 points!
            // TODO: Go to scene 5 (special ending)
        };

    } else if (sceneNumber === 2) {
        // SCENE 2: The water path
        // TODO: Create your own scene here!
        storyText.innerHTML = "You follow the sound of water and find a beautiful waterfall. There's a rainbow in the mist!";

        choice1.textContent = "Look for treasure behind the waterfall";
        choice2.textContent = "Follow the river downstream";

        choice1.onclick = function() {
            // TODO: Add an item to inventory (maybe "Rainbow Gem"?)
            // TODO: Add points and go to another scene
        };

        choice2.onclick = function() {
            // TODO: Continue the adventure
        };

    } else if (sceneNumber === 3) {
        // SCENE 3: Game Over - Dragon catches you
        storyText.innerHTML = "The dragon wakes up and roars! 'WHO DARES STEAL MY TREASURE?!' <br><br> Game Over - The dragon sends you home!";

        // Hide choice buttons
        choice1.style.display = "none";
        choice2.style.display = "none";

        // Show restart button
        restartBtn.classList.remove("hidden");

    } else if (sceneNumber === 4) {
        // SCENE 4: Safe escape
        storyText.innerHTML = "You quietly leave the cave. Outside, you find a friendly wizard who gives you a magic map!";

        // TODO: Add the magic map to inventory
        // addItem("Magic Map");

        choice1.textContent = "Follow the map north";
        choice2.textContent = "Follow the map south";

        // TODO: Create what happens next!

    } else if (sceneNumber === 5) {
        // SCENE 5: Special ending with dragon
        storyText.innerHTML = "The dragon is surprised by your bravery! 'No one has ever tried to be my friend,' it says. The dragon gives you a magical gift and flies you home safely!<br><br>🎉 YOU WIN! Best possible ending!";

        // TODO: Add 100 bonus points!
        // TODO: Add "Dragon's Blessing" to inventory

        // Hide choice buttons and show restart
        choice1.style.display = "none";
        choice2.style.display = "none";
        restartBtn.classList.remove("hidden");
    }

    // TODO: Add more scenes!
    // Some ideas:
    // - Meeting a fairy
    // - Finding a magic sword
    // - Solving a riddle
    // - Helping a lost animal
}

// ===== HELPER FUNCTIONS =====

// Update the score display
function updateScore() {
    scoreNumber.textContent = score;
    console.log("Score updated to:", score);

    // TODO: Add special effects when score reaches certain amounts
    // if (score >= 100) {
    //     scoreDisplay.style.backgroundColor = "#gold";
    // }
}

// Add an item to inventory
function addItem(item) {
    inventory.push(item);
    console.log("Added to inventory:", item);

    // Show inventory section
    inventoryDiv.classList.remove("hidden");

    // Update inventory display
    // TODO: Make the inventory display look better!
    inventoryList.textContent = inventory.join(", ");
}

// Remove an item from inventory
function removeItem(item) {
    let index = inventory.indexOf(item);
    if (index > -1) {
        inventory.splice(index, 1);
        inventoryList.textContent = inventory.join(", ");
        console.log("Removed from inventory:", item);
    }
}

// Check if player has an item
function hasItem(item) {
    return inventory.includes(item);
}

// Restart the game
restartBtn.addEventListener("click", function() {
    // Reset everything
    score = 0;
    inventory = [];
    currentScene = 0;

    // Update displays
    updateScore();
    inventoryList.textContent = "Nothing yet...";
    inventoryDiv.classList.add("hidden");

    // Show buttons again
    choice1.style.display = "block";
    choice2.style.display = "block";
    restartBtn.classList.add("hidden");

    // Go back to scene 0
    showScene(0);

    console.log("Game restarted!");
});

// ===== EXTRA CHALLENGES =====
// 1. Add a health system (lose health from bad choices)
// 2. Add random events (Math.random() to choose different outcomes)
// 3. Add time limits for choices
// 4. Save the game progress using localStorage
// 5. Add background music/sounds
// 6. Create branching paths that meet up later
// 7. Add character stats (strength, magic, luck)
// 8. Create multiple endings based on score
// 9. Add images for each scene
// 10. Make choices that depend on inventory items

console.log("Story game loaded! Enter your name to begin!");