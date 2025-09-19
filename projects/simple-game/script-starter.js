// COOKIE CLICKER GAME - STARTER CODE
// Build your own clicker game! Follow the TODOs to make it work.

// ===== GAME VARIABLES =====
let score = 0;              // Current number of cookies
let clickPower = 1;         // Cookies per click
let autoClickPower = 0;     // Cookies per second
let totalClicks = 0;        // Track total clicks
let totalEarned = 0;        // Track all cookies ever earned

// Upgrade counts
let grandmas = 0;
let factories = 0;

// Upgrade costs
let clickUpgradeCost = 10;
let autoUpgradeCost = 50;
let factoryUpgradeCost = 200;
let megaUpgradeCost = 1000;

// ===== GET HTML ELEMENTS =====
let scoreDisplay = document.getElementById("score");
let cookieBtn = document.getElementById("cookieBtn");
let clickPowerDisplay = document.getElementById("clickPowerNum");
let perSecondDisplay = document.getElementById("perSecond");

// Upgrade buttons
let upgradeClickBtn = document.getElementById("upgradeClick");
let upgradeAutoBtn = document.getElementById("upgradeAuto");
let upgradeFactoryBtn = document.getElementById("upgradeFactory");
let upgradeMegaBtn = document.getElementById("upgradeMega");

// Cost displays
let clickCostDisplay = document.getElementById("clickCost");
let autoCostDisplay = document.getElementById("autoCost");
let factoryCostDisplay = document.getElementById("factoryCost");
let megaCostDisplay = document.getElementById("megaCost");

// Stats displays
let totalClicksDisplay = document.getElementById("totalClicks");
let grandmaCountDisplay = document.getElementById("grandmaCount");
let factoryCountDisplay = document.getElementById("factoryCount");
let totalEarnedDisplay = document.getElementById("totalEarned");

// Reset button
let resetBtn = document.getElementById("resetBtn");

// ===== MAIN COOKIE CLICK =====
cookieBtn.addEventListener("click", function(event) {
    // TODO: Add cookies based on click power
    // score = score + clickPower;

    // TODO: Update total clicks counter
    // totalClicks++;

    // TODO: Update total earned
    // totalEarned = totalEarned + clickPower;

    // TODO: Update the display
    // updateDisplay();

    // Create floating number effect (optional fun feature!)
    createFloatingText("+" + clickPower, event.pageX, event.pageY);

    console.log("Cookie clicked! Score:", score);
});

// ===== UPGRADE: CLICK POWER =====
upgradeClickBtn.addEventListener("click", function() {
    // Check if player has enough cookies
    if (score >= clickUpgradeCost) {
        // TODO: Subtract cost from score
        // score = score - clickUpgradeCost;

        // TODO: Increase click power
        // clickPower++;

        // TODO: Increase the cost for next upgrade (make it 50% more expensive)
        // clickUpgradeCost = Math.floor(clickUpgradeCost * 1.5);

        // TODO: Update displays
        // clickPowerDisplay.textContent = clickPower;
        // clickCostDisplay.textContent = clickUpgradeCost;
        // updateDisplay();

        console.log("Click power upgraded! New power:", clickPower);
    } else {
        alert("Not enough cookies! You need " + clickUpgradeCost + " cookies.");
    }
});

// ===== UPGRADE: AUTO CLICKER (GRANDMA) =====
upgradeAutoBtn.addEventListener("click", function() {
    if (score >= autoUpgradeCost) {
        // TODO: Buy the upgrade
        // - Subtract the cost
        // - Add 1 to autoClickPower
        // - Add 1 to grandmas count
        // - Increase cost by 50%
        // - Update all displays

        console.log("Grandma hired! Auto power:", autoClickPower);
    }
});

// ===== UPGRADE: FACTORY =====
upgradeFactoryBtn.addEventListener("click", function() {
    // TODO: Similar to grandma, but:
    // - Costs factoryUpgradeCost
    // - Adds 5 to autoClickPower
    // - Increases factories count
    // - Show the mega upgrade button when player has 2 factories
});

// ===== UPGRADE: MEGA BAKERY =====
upgradeMegaBtn.addEventListener("click", function() {
    // TODO: The ultimate upgrade!
    // - Costs megaUpgradeCost
    // - Adds 20 to autoClickPower
    // - Maybe change the background color to gold?
});

// ===== AUTO CLICKER SYSTEM =====
// This runs every second
setInterval(function() {
    if (autoClickPower > 0) {
        // TODO: Add autoClickPower to score
        // score = score + autoClickPower;

        // TODO: Add to total earned
        // totalEarned = totalEarned + autoClickPower;

        // TODO: Update display
        // updateDisplay();

        console.log("Auto click! Added:", autoClickPower);
    }
}, 1000); // 1000 milliseconds = 1 second

// ===== UPDATE DISPLAY FUNCTION =====
function updateDisplay() {
    // Update main score
    scoreDisplay.textContent = score;

    // TODO: Update per second display
    // perSecondDisplay.textContent = autoClickPower;

    // TODO: Update stats
    // totalClicksDisplay.textContent = totalClicks;
    // grandmaCountDisplay.textContent = grandmas;
    // factoryCountDisplay.textContent = factories;
    // totalEarnedDisplay.textContent = totalEarned;

    // TODO: Enable/disable upgrade buttons based on cost
    // upgradeClickBtn.disabled = score < clickUpgradeCost;
    // upgradeAutoBtn.disabled = score < autoUpgradeCost;
    // upgradeFactoryBtn.disabled = score < factoryUpgradeCost;
    // upgradeMegaBtn.disabled = score < megaUpgradeCost;

    // Check for achievements
    checkAchievements();
}

// ===== ACHIEVEMENTS =====
function checkAchievements() {
    // TODO: Show special messages for milestones
    // if (score === 100 && !achievement100) {
    //     alert("Achievement: 100 Cookies!");
    //     achievement100 = true;
    // }

    // TODO: Unlock mega bakery when you have 2 factories
    // if (factories >= 2) {
    //     upgradeMegaBtn.style.display = "block";
    // }
}

// ===== RESET GAME =====
resetBtn.addEventListener("click", function() {
    if (confirm("Are you sure you want to reset? You'll lose all progress!")) {
        // TODO: Reset all variables to starting values
        score = 0;
        clickPower = 1;
        autoClickPower = 0;
        totalClicks = 0;
        totalEarned = 0;
        grandmas = 0;
        factories = 0;

        // TODO: Reset costs
        clickUpgradeCost = 10;
        autoUpgradeCost = 50;
        factoryUpgradeCost = 200;

        // TODO: Update all displays
        clickPowerDisplay.textContent = clickPower;
        clickCostDisplay.textContent = clickUpgradeCost;
        autoCostDisplay.textContent = autoUpgradeCost;
        factoryCostDisplay.textContent = factoryUpgradeCost;

        // TODO: Hide mega bakery again
        // upgradeMegaBtn.style.display = "none";

        updateDisplay();
        console.log("Game reset!");
    }
});

// ===== HELPER FUNCTION: FLOATING TEXT =====
function createFloatingText(text, x, y) {
    let floatingDiv = document.createElement("div");
    floatingDiv.textContent = text;
    floatingDiv.className = "click-effect";
    floatingDiv.style.left = x + "px";
    floatingDiv.style.top = y + "px";
    document.body.appendChild(floatingDiv);

    // Remove after animation
    setTimeout(function() {
        floatingDiv.remove();
    }, 1000);
}

// ===== EXTRA CHALLENGES =====
// 1. Add a "Golden Cookie" that appears randomly and gives bonus points
// 2. Add sound effects for clicks and purchases
// 3. Save game progress using localStorage
// 4. Add more upgrade types (Cookie Farm, Cookie Mine, etc.)
// 5. Create special power-ups that double production for 30 seconds
// 6. Add a prestige system - reset with bonuses
// 7. Create visual effects when reaching milestones
// 8. Add keyboard shortcuts (spacebar to click cookie)
// 9. Implement a combo system for fast clicking
// 10. Create seasonal themes (change colors/emojis)

// Initial display update
updateDisplay();
console.log("Cookie Clicker loaded! Start clicking!");