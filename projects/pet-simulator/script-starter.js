// VIRTUAL PET SIMULATOR - STARTER CODE
// Take care of your virtual pet! Keep it happy and healthy!

// ===== PET STATS =====
let petName = "???";
let hunger = 50;        // 0 = starving, 100 = full
let happiness = 50;     // 0 = sad, 100 = very happy
let energy = 50;        // 0 = exhausted, 100 = energetic
let health = 100;       // 0 = sick, 100 = healthy
let age = 0;           // Age in minutes
let level = 1;
let experience = 0;
let coins = 0;

// ===== HTML ELEMENTS =====
let petNameInput = document.getElementById("petNameInput");
let nameBtn = document.getElementById("nameBtn");
let petNameDisplay = document.getElementById("petNameDisplay");
let petEmoji = document.getElementById("petEmoji");
let petMood = document.getElementById("petMood");
let messageBox = document.getElementById("messageBox");

// Stat bars
let hungerBar = document.getElementById("hungerBar");
let happinessBar = document.getElementById("happinessBar");
let energyBar = document.getElementById("energyBar");
let healthBar = document.getElementById("healthBar");

// Stat values
let hungerValue = document.getElementById("hungerValue");
let happinessValue = document.getElementById("happinessValue");
let energyValue = document.getElementById("energyValue");
let healthValue = document.getElementById("healthValue");

// Action buttons
let feedBtn = document.getElementById("feedBtn");
let playBtn = document.getElementById("playBtn");
let sleepBtn = document.getElementById("sleepBtn");
let petBtn = document.getElementById("petBtn");
let treatBtn = document.getElementById("treatBtn");
let medicineBtn = document.getElementById("medicineBtn");

// Info displays
let petAge = document.getElementById("petAge");
let petLevel = document.getElementById("petLevel");
let petExp = document.getElementById("petExp");
let coinsDisplay = document.getElementById("coins");

// ===== SET PET NAME =====
nameBtn.addEventListener("click", function() {
    let newName = petNameInput.value.trim();

    if (newName === "") {
        showMessage("Please enter a name for your pet!");
        return;
    }

    petName = newName;
    petNameDisplay.textContent = petName;
    showMessage("Your pet is now named " + petName + "!");

    // TODO: Hide the input and button after naming
    // petNameInput.style.display = "none";
    // nameBtn.style.display = "none";
});

// ===== ACTION: FEED =====
feedBtn.addEventListener("click", function() {
    if (hunger >= 90) {
        showMessage(petName + " is already full!");
        return;
    }

    // TODO: Increase hunger by 20 (but don't go over 100)
    // hunger = Math.min(hunger + 20, 100);

    // TODO: Add 5 experience points
    // experience += 5;

    // TODO: Show a message
    // showMessage(petName + " loves the food! 🍖");

    // TODO: Update the display
    // updateDisplay();

    console.log("Fed the pet!");
});

// ===== ACTION: PLAY =====
playBtn.addEventListener("click", function() {
    if (energy < 20) {
        showMessage(petName + " is too tired to play!");
        return;
    }

    // TODO: Playing makes pet happy but tired
    // - Increase happiness by 20
    // - Decrease energy by 15
    // - Decrease hunger by 10
    // - Add 10 experience
    // - Earn 5 coins

    // Add playing animation
    petEmoji.classList.add("playing");
    setTimeout(() => petEmoji.classList.remove("playing"), 2000);

    // TODO: Show message and update display
});

// ===== ACTION: SLEEP =====
sleepBtn.addEventListener("click", function() {
    // TODO: Sleeping restores energy
    // - Set energy to 100
    // - Increase health by 10
    // - Show sleeping animation

    petEmoji.classList.add("sleeping");
    petEmoji.textContent = "😴";

    setTimeout(() => {
        petEmoji.classList.remove("sleeping");
        petEmoji.textContent = "🐶";
        // TODO: Update display after waking up
    }, 3000);

    showMessage(petName + " is sleeping... Zzz...");
});

// ===== ACTION: PET =====
petBtn.addEventListener("click", function() {
    // TODO: Petting increases happiness
    // - Increase happiness by 10
    // - Add 3 experience
    // - Show heart emoji briefly

    showMessage(petName + " loves being petted! ❤️");
});

// ===== ACTION: TREAT =====
treatBtn.addEventListener("click", function() {
    if (coins < 10) {
        showMessage("Not enough coins! You need 10 coins.");
        return;
    }

    // TODO: Special treat costs coins but gives big boosts
    // - Subtract 10 coins
    // - Increase happiness by 30
    // - Increase hunger by 30
    // - Add 20 experience
});

// ===== ACTION: MEDICINE =====
medicineBtn.addEventListener("click", function() {
    if (coins < 20) {
        showMessage("Not enough coins! You need 20 coins for medicine.");
        return;
    }

    // TODO: Medicine restores health
    // - Subtract 20 coins
    // - Set health to 100
    // - Show message
});

// ===== TIME SYSTEM =====
// This runs every 10 seconds (simulating time passing)
setInterval(function() {
    // Pet gets hungry and less happy over time
    hunger = Math.max(hunger - 5, 0);
    happiness = Math.max(happiness - 3, 0);
    energy = Math.min(energy + 2, 100); // Slowly regain energy

    // TODO: Check pet health based on stats
    // if (hunger < 20) {
    //     health = Math.max(health - 5, 0);
    //     showMessage(petName + " is getting sick from hunger!");
    // }

    // TODO: Show medicine button if health is low
    // if (health < 50) {
    //     medicineBtn.style.display = "inline-block";
    // }

    // Age the pet
    age++;

    updateDisplay();
}, 10000); // 10 seconds

// ===== UPDATE DISPLAY =====
function updateDisplay() {
    // Update stat bars
    hungerBar.style.width = hunger + "%";
    happinessBar.style.width = happiness + "%";
    energyBar.style.width = energy + "%";
    healthBar.style.width = health + "%";

    // Update stat values
    hungerValue.textContent = hunger + "/100";
    happinessValue.textContent = happiness + "/100";
    energyValue.textContent = energy + "/100";
    healthValue.textContent = health + "/100";

    // TODO: Update pet mood based on stats
    updateMood();

    // TODO: Update info section
    // petAge.textContent = age;
    // petLevel.textContent = level;
    // petExp.textContent = experience + "/100";
    // coinsDisplay.textContent = coins;

    // TODO: Check for level up
    // if (experience >= 100) {
    //     levelUp();
    // }

    // Change bar colors based on values
    if (hunger < 30) hungerBar.style.background = "#ff4444";
    if (happiness < 30) happinessBar.style.background = "#ff9999";
    if (energy < 20) energyBar.style.background = "#99ccff";
    if (health < 30) healthBar.style.background = "#ff6666";
}

// ===== UPDATE MOOD =====
function updateMood() {
    let mood = "Normal";

    // TODO: Determine mood based on stats
    // if (happiness > 80 && health > 80) {
    //     mood = "Very Happy! 😊";
    //     petEmoji.textContent = "🐕";
    // } else if (happiness < 30) {
    //     mood = "Sad 😢";
    //     petEmoji.textContent = "😿";
    // } else if (hunger < 20) {
    //     mood = "Hungry! 🍖";
    // } else if (energy < 20) {
    //     mood = "Tired 😴";
    // } else if (health < 30) {
    //     mood = "Sick 🤒";
    //     petEmoji.textContent = "🤒";
    // }

    petMood.textContent = mood;
}

// ===== LEVEL UP SYSTEM =====
function levelUp() {
    level++;
    experience = 0;
    coins += 50; // Bonus coins for leveling up!

    showMessage("🎉 " + petName + " reached Level " + level + "! Earned 50 coins!");

    // TODO: Pet evolves at certain levels
    // if (level === 5) {
    //     petEmoji.textContent = "🐕‍🦺"; // Evolved form!
    //     showMessage(petName + " has evolved!");
    // }
}

// ===== SHOW MESSAGE =====
function showMessage(message) {
    messageBox.textContent = message;
    console.log("Message:", message);

    // Clear message after 3 seconds
    setTimeout(() => {
        messageBox.textContent = "Take care of " + petName + "!";
    }, 3000);
}

// ===== EXTRA CHALLENGES =====
// 1. Add different pet types (cat, rabbit, dragon)
// 2. Add mini-games to earn coins
// 3. Save/load game using localStorage
// 4. Add pet toys that can be purchased
// 5. Create different backgrounds/environments
// 6. Add pet tricks that can be taught
// 7. Implement breeding system for multiple pets
// 8. Add weather effects that affect mood
// 9. Create achievements system
// 10. Add sound effects for actions

// Initial display
updateDisplay();
showMessage("Welcome! Name your pet to begin!");
console.log("Pet Simulator loaded!");