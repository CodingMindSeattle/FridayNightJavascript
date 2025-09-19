// INTERACTIVE STORY - COMPLETE SOLUTION
// This is the fully working version for teacher reference

let playerName = "";
let currentScene = 0;
let score = 0;
let inventory = [];
let health = 100;

// Get all the HTML elements
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

// Start the game
startBtn.addEventListener("click", function() {
    playerName = nameInput.value.trim();

    if (playerName === "") {
        alert("Please enter your name!");
        return;
    }

    console.log("Game started! Player name:", playerName);

    nameSetup.style.display = "none";
    storyScreen.style.display = "block";
    scoreDisplay.classList.remove("hidden");

    showScene(0);
});

// Scene manager
function showScene(sceneNumber) {
    currentScene = sceneNumber;
    console.log("Showing scene:", sceneNumber);

    choice3.classList.add("hidden");
    choice1.style.display = "block";
    choice2.style.display = "block";

    switch(sceneNumber) {
        case 0:
            scene0_beginning();
            break;
        case 1:
            scene1_darkPath();
            break;
        case 2:
            scene2_waterPath();
            break;
        case 3:
            scene3_gameOver();
            break;
        case 4:
            scene4_safeEscape();
            break;
        case 5:
            scene5_dragonFriend();
            break;
        case 6:
            scene6_waterfall();
            break;
        case 7:
            scene7_river();
            break;
        case 8:
            scene8_wizardQuest();
            break;
        case 9:
            scene9_fairyGarden();
            break;
        case 10:
            scene10_victory();
            break;
    }
}

// Scene 0: Beginning
function scene0_beginning() {
    storyText.innerHTML = `Welcome, <span style="color: #667eea; font-weight: bold;">${playerName}</span>! You stand at the entrance of a mysterious forest. The ancient trees tower above you, and the path splits in two directions. A sign reads: "Danger and treasure await those who enter."`;

    choice1.textContent = "Take the left path (dark and mysterious)";
    choice2.textContent = "Take the right path (sounds of water)";

    choice1.onclick = () => {
        score += 10;
        updateScore();
        showScene(1);
    };

    choice2.onclick = () => {
        score += 5;
        updateScore();
        showScene(2);
    };
}

// Scene 1: Dark Path
function scene1_darkPath() {
    storyText.innerHTML = "The dark path leads you deeper into the forest. Suddenly, you discover a glowing cave! Inside, you see mountains of gold and jewels... but also a massive sleeping dragon! Its scales shimmer purple and gold in the treasure's light.";

    choice1.textContent = "Try to steal some treasure";
    choice2.textContent = "Leave quietly before it wakes";
    choice3.classList.remove("hidden");
    choice3.textContent = "Try to befriend the dragon";

    choice1.onclick = () => {
        score -= 20;
        updateScore();
        showScene(3);
    };

    choice2.onclick = () => {
        score += 20;
        updateScore();
        showScene(4);
    };

    choice3.onclick = () => {
        addItem("Dragon Friend Badge");
        score += 50;
        updateScore();
        showScene(5);
    };
}

// Scene 2: Water Path
function scene2_waterPath() {
    storyText.innerHTML = `Following the sound of water, you discover a magnificent waterfall! The mist creates a perfect rainbow, and you notice a small cave behind the falling water. ${playerName}, what will you do?`;

    choice1.textContent = "Explore behind the waterfall";
    choice2.textContent = "Follow the river downstream";
    choice3.classList.remove("hidden");
    choice3.textContent = "Try to climb to the top";

    choice1.onclick = () => {
        score += 30;
        updateScore();
        showScene(6);
    };

    choice2.onclick = () => {
        score += 15;
        updateScore();
        showScene(7);
    };

    choice3.onclick = () => {
        if (hasItem("Magic Rope")) {
            score += 40;
            updateScore();
            addItem("Eagle Feather");
            storyText.innerHTML = "Using your magic rope, you climb to the top where an eagle gives you a magical feather!";
            setTimeout(() => showScene(9), 3000);
        } else {
            storyText.innerHTML = "The climb is too dangerous without proper equipment! You slide back down.";
            setTimeout(() => showScene(2), 2000);
        }
    };
}

// Scene 3: Game Over - Dragon
function scene3_gameOver() {
    storyText.innerHTML = `<span style="color: #ff6b6b;">The dragon's eyes snap open!</span><br><br>"WHO DARES STEAL FROM ME?!" it roars. The dragon's breath sends you flying out of the cave and all the way back home!<br><br><strong>Game Over</strong> - Final Score: ${score}`;

    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    restartBtn.classList.remove("hidden");
}

// Scene 4: Safe Escape
function scene4_safeEscape() {
    storyText.innerHTML = "You carefully back away from the sleeping dragon. Outside the cave, you meet a friendly wizard! 'Wise choice,' he says. 'That dragon has a terrible temper. Here, take this magic map - it will help you find the real treasure of this forest.'";

    addItem("Magic Map");

    choice1.textContent = "Follow the map north (to the mountains)";
    choice2.textContent = "Follow the map east (to the garden)";

    choice1.onclick = () => {
        score += 25;
        updateScore();
        showScene(8);
    };

    choice2.onclick = () => {
        score += 25;
        updateScore();
        showScene(9);
    };
}

// Scene 5: Dragon Friend Ending
function scene5_dragonFriend() {
    storyText.innerHTML = `The dragon opens one eye and looks at you curiously. "You... want to be my friend?" it asks in surprise. "No one has ever wanted that before!"<br><br>The dragon smiles and gives you a magical scale from its body. "This will protect you always, friend ${playerName}!"<br><br>The dragon flies you home on its back, and you become legendary friends!<br><br><span style="color: #ffd93d; font-size: 24px;">🎉 BEST ENDING ACHIEVED! 🎉</span><br>Final Score: ${score + 100}`;

    addItem("Dragon's Magic Scale");
    score += 100;
    updateScore();

    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    restartBtn.classList.remove("hidden");
}

// Scene 6: Waterfall Discovery
function scene6_waterfall() {
    storyText.innerHTML = "Behind the waterfall, you discover an ancient shrine! Inside, a glowing gem floats above a pedestal. As you take it, the room fills with warm light and you feel stronger!";

    addItem("Rainbow Gem");
    addItem("Magic Rope");
    health = 100;

    choice1.textContent = "Return to the forest path";
    choice2.textContent = "Explore deeper in the shrine";

    choice1.onclick = () => {
        score += 20;
        updateScore();
        showScene(8);
    };

    choice2.onclick = () => {
        if (Math.random() > 0.5) {
            addItem("Ancient Scroll");
            score += 50;
            updateScore();
            storyText.innerHTML = "You find an ancient scroll with powerful magic! This will surely help you later.";
            setTimeout(() => showScene(10), 3000);
        } else {
            storyText.innerHTML = "A trap activates! You barely escape with your treasures.";
            score -= 10;
            updateScore();
            setTimeout(() => showScene(8), 2000);
        }
    };
}

// Scene 7: River Journey
function scene7_river() {
    storyText.innerHTML = "Following the river, you find a small boat. As you drift downstream, you see glowing fish in the water and hear beautiful singing from somewhere ahead.";

    choice1.textContent = "Follow the singing voice";
    choice2.textContent = "Try to catch the glowing fish";

    choice1.onclick = () => {
        score += 30;
        updateScore();
        showScene(9);
    };

    choice2.onclick = () => {
        addItem("Glowing Fish");
        score += 25;
        updateScore();
        storyText.innerHTML = "You caught a magical fish! It grants you one wish. You wish for safe passage through the forest.";
        setTimeout(() => showScene(10), 3000);
    };
}

// Scene 8: Wizard's Quest
function scene8_wizardQuest() {
    storyText.innerHTML = `The wizard appears again! "Ah, ${playerName}! I see you're collecting magical items. If you can solve my riddle, I'll teleport you to the forest's greatest treasure."<br><br>"What has roots nobody sees, is taller than trees, up, up it goes, and yet never grows?"`;

    choice1.textContent = "A mountain!";
    choice2.textContent = "A cloud!";
    choice3.classList.remove("hidden");
    choice3.textContent = "Magic itself!";

    choice1.onclick = () => {
        addItem("Wizard's Staff");
        score += 75;
        updateScore();
        storyText.innerHTML = "Correct! The wizard gives you his staff and teleports you to the treasure!";
        setTimeout(() => showScene(10), 2000);
    };

    choice2.onclick = () => {
        storyText.innerHTML = "Not quite right, but good try! The wizard gives you a hint and lets you try again.";
        score += 10;
        updateScore();
        setTimeout(() => showScene(8), 2000);
    };

    choice3.onclick = () => {
        storyText.innerHTML = "Creative answer! The wizard is impressed by your thinking.";
        score += 30;
        updateScore();
        showScene(9);
    };
}

// Scene 9: Fairy Garden
function scene9_fairyGarden() {
    storyText.innerHTML = "You discover a magical garden filled with singing fairies! They dance around you and offer to grant you a gift for being kind in the forest.";

    choice1.textContent = "Ask for treasure";
    choice2.textContent = "Ask for wisdom";
    choice3.classList.remove("hidden");
    choice3.textContent = "Ask to help them with something";

    choice1.onclick = () => {
        addItem("Fairy Gold");
        score += 40;
        updateScore();
        showScene(10);
    };

    choice2.onclick = () => {
        addItem("Book of Wisdom");
        score += 60;
        updateScore();
        showScene(10);
    };

    choice3.onclick = () => {
        addItem("Fairy Queen's Blessing");
        score += 100;
        updateScore();
        storyText.innerHTML = "Your kindness touches the Fairy Queen's heart! She gives you her eternal blessing.";
        setTimeout(() => showScene(10), 2000);
    };
}

// Scene 10: Victory
function scene10_victory() {
    let ending = "";
    if (score >= 200) {
        ending = "LEGENDARY HERO";
    } else if (score >= 150) {
        ending = "MASTER ADVENTURER";
    } else if (score >= 100) {
        ending = "BRAVE EXPLORER";
    } else {
        ending = "FOREST WANDERER";
    }

    storyText.innerHTML = `<span style="font-size: 28px; color: #ffd93d;">🎊 CONGRATULATIONS ${playerName.toUpperCase()}! 🎊</span><br><br>You have completed your magical forest adventure!<br><br>Your Title: <strong>${ending}</strong><br>Final Score: <strong>${score}</strong><br><br>Treasures Collected:<br>${inventory.length > 0 ? inventory.join(", ") : "None"}<br><br>Thank you for playing!`;

    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    restartBtn.classList.remove("hidden");
}

// Helper Functions
function updateScore() {
    scoreNumber.textContent = score;
    console.log("Score updated to:", score);

    if (score >= 200) {
        scoreDisplay.style.backgroundColor = "#ffd700";
    } else if (score >= 100) {
        scoreDisplay.style.backgroundColor = "#ffd93d";
    }
}

function addItem(item) {
    if (!inventory.includes(item)) {
        inventory.push(item);
        console.log("Added to inventory:", item);
        inventoryDiv.classList.remove("hidden");

        // Create nice display for inventory
        let itemElements = inventory.map(item => `<span class="inventory-item">${item}</span>`);
        inventoryList.innerHTML = itemElements.join(" ");
    }
}

function removeItem(item) {
    let index = inventory.indexOf(item);
    if (index > -1) {
        inventory.splice(index, 1);
        let itemElements = inventory.map(item => `<span class="inventory-item">${item}</span>`);
        inventoryList.innerHTML = itemElements.join(" ");
        console.log("Removed from inventory:", item);
    }
}

function hasItem(item) {
    return inventory.includes(item);
}

// Restart game
restartBtn.addEventListener("click", function() {
    score = 0;
    inventory = [];
    currentScene = 0;
    health = 100;

    updateScore();
    inventoryList.textContent = "Nothing yet...";
    inventoryDiv.classList.add("hidden");
    scoreDisplay.style.backgroundColor = "#ffd93d";

    choice1.style.display = "block";
    choice2.style.display = "block";
    restartBtn.classList.add("hidden");

    showScene(0);
    console.log("Game restarted!");
});

// Add Enter key support for name input
nameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        startBtn.click();
    }
});

console.log("Interactive Story Game - Complete Version Loaded!");