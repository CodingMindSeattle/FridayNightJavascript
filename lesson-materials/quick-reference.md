# JavaScript Quick Reference 🚀

## Variables
```javascript
let changeable = "can change";      // Use for values that change
const permanent = "cannot change";   // Use for values that stay the same
```

## Data Types
```javascript
let text = "Hello";                  // String (text)
let number = 42;                     // Number
let decimal = 3.14;                  // Also a number
let boolean = true;                  // Boolean (true/false)
```

## Console (Debugging)
```javascript
console.log("Message");              // Print to console
console.log(variableName);           // Print variable value
console.log("Score:", score);        // Print with label
```

## Math Operations
```javascript
let sum = 5 + 3;                     // Addition: 8
let difference = 10 - 4;             // Subtraction: 6
let product = 3 * 4;                 // Multiplication: 12
let quotient = 20 / 5;               // Division: 4

score = score + 10;                  // Add 10 to score
score += 10;                         // Shorthand for above
score++;                             // Add 1 to score
```

## Strings (Text)
```javascript
let firstName = "Sam";
let lastName = "Smith";
let fullName = firstName + " " + lastName;    // "Sam Smith"

let message = "Hello, " + firstName + "!";    // "Hello, Sam!"
```

## Finding HTML Elements
```javascript
// By ID (most common)
let element = document.getElementById("myId");

// By querySelector (flexible)
let byId = document.querySelector("#myId");        // ID
let byClass = document.querySelector(".myClass");  // Class
let byTag = document.querySelector("h1");          // Tag
```

## Changing Content
```javascript
element.textContent = "New text";                  // Change text
element.innerHTML = "<strong>Bold</strong>";       // Add HTML
```

## Changing Styles
```javascript
element.style.color = "red";                       // Text color
element.style.backgroundColor = "blue";            // Background
element.style.fontSize = "20px";                   // Size
element.style.display = "none";                    // Hide
element.style.display = "block";                   // Show
```

## Events (Making Things Interactive)
```javascript
// Click event
button.addEventListener("click", function() {
    // Code here runs when button is clicked
    console.log("Button clicked!");
});

// Mouse hover
element.addEventListener("mouseenter", function() {
    element.style.backgroundColor = "yellow";
});

// Input change
inputField.addEventListener("input", function() {
    console.log(inputField.value);  // Get what was typed
});
```

## Getting Input Values
```javascript
let inputElement = document.getElementById("myInput");
let userText = inputElement.value;                 // Get the text
inputElement.value = "";                           // Clear the input
```

## If Statements (Decisions)
```javascript
if (score > 100) {
    console.log("You win!");
}

if (lives === 0) {
    console.log("Game over");
} else {
    console.log("Keep playing!");
}
```

## Comparison Operators
```javascript
===  // Equals (use three equals!)
!==  // Not equals
>    // Greater than
<    // Less than
>=   // Greater than or equal
<=   // Less than or equal
```

## Common Patterns

### Toggle Something
```javascript
let isOn = false;

button.addEventListener("click", function() {
    if (isOn) {
        element.style.display = "none";
        isOn = false;
    } else {
        element.style.display = "block";
        isOn = true;
    }
});
```

### Counter
```javascript
let count = 0;
let display = document.getElementById("counter");

plusButton.addEventListener("click", function() {
    count++;
    display.textContent = count;
});

minusButton.addEventListener("click", function() {
    count--;
    display.textContent = count;
});
```

### Color Changer
```javascript
let colors = ["red", "blue", "green", "yellow", "purple"];
let currentColor = 0;

colorButton.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[currentColor];
    currentColor++;
    if (currentColor >= colors.length) {
        currentColor = 0;  // Start over
    }
});
```

## CSS Property Names in JavaScript

| CSS           | JavaScript      |
|--------------|-----------------|
| background-color | backgroundColor |
| font-size    | fontSize        |
| margin-top   | marginTop       |
| padding-left | paddingLeft     |
| border-radius| borderRadius    |

## Debugging Tips 🔍

1. **Check the Console** - Press F12 or right-click → Inspect → Console
2. **Add console.log()** everywhere to see what's happening
3. **Check for typos** - JavaScript is case-sensitive!
4. **Save your file** and refresh the browser
5. **Red text in console** = Error (read the message!)

## Keyboard Shortcuts

- **F12** or **Cmd+Option+I** - Open Developer Tools
- **Ctrl+S** or **Cmd+S** - Save file
- **F5** or **Cmd+R** - Refresh browser
- **Ctrl+/** or **Cmd+/** - Comment out code

## Remember!

- Semicolons at the end of lines (optional but good practice)
- Quotation marks around strings
- IDs must match exactly (case-sensitive)
- Save file → Refresh browser to see changes
- The console is your friend!