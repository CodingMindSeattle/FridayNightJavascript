# JavaScript Basics 🚀

## What is JavaScript?
JavaScript is the programming language that makes websites interactive! While HTML is the structure (like the skeleton) and CSS is the style (like the clothes), JavaScript is the brain that makes things happen!

## Your First JavaScript

### Where does JavaScript go?
JavaScript can be added to HTML in two ways:

1. **Inside the HTML file** (between `<script>` tags)
```html
<script>
    console.log("Hello World!");
</script>
```

2. **In a separate file** (recommended!)
```html
<script src="script.js"></script>
```

## Variables - Storage Boxes 📦

Variables are like labeled boxes where we store information.

### Creating Variables
```javascript
let myName = "Alex";        // Can change later
const myAge = 13;           // Cannot change (constant)
let myScore = 0;            // Numbers don't need quotes
let isHappy = true;         // Boolean (true/false)
```

### Variable Rules
- Names can't have spaces (use camelCase: `myVariableName`)
- Names can't start with numbers
- Names are case-sensitive (`myName` is different from `MyName`)

## Data Types

### Strings (Text)
```javascript
let message = "Hello!";
let anotherMessage = 'Hi there!';  // Single or double quotes work

// Combining strings
let firstName = "Sam";
let greeting = "Hello, " + firstName + "!";  // "Hello, Sam!"
```

### Numbers
```javascript
let score = 100;
let lives = 3;
let bonus = 2.5;

// Math operations
let total = score + bonus;      // 102.5
let remaining = lives - 1;      // 2
let doubled = score * 2;        // 200
let half = score / 2;           // 50
```

### Booleans (True/False)
```javascript
let isGameOver = false;
let hasWon = true;
```

## Console.log() - Your Debug Tool 🔍

The console is your friend! Use it to see what's happening in your code.

```javascript
console.log("This will appear in the console");
console.log(myScore);
console.log("Score is:", myScore);
```

**How to open the console:**
- Right-click on the webpage → "Inspect" → "Console" tab
- Or press F12 (Windows) or Cmd+Option+I (Mac)

## Try This! 🎯

1. Create variables for:
   - Your favorite color
   - Your age
   - Whether you like pizza (true/false)

2. Use console.log to display them all

3. Create a score variable starting at 0, then add 10 to it

## Common Mistakes to Avoid ⚠️

1. **Forgetting quotes around strings**
   ```javascript
   // Wrong
   let name = Sam;

   // Right
   let name = "Sam";
   ```

2. **Using spaces in variable names**
   ```javascript
   // Wrong
   let my name = "Sam";

   // Right
   let myName = "Sam";
   ```

3. **Forgetting semicolons** (JavaScript is forgiving, but it's good practice!)
   ```javascript
   let score = 100;  // Good habit!
   ```

## Quick Challenge! 💪

Can you create variables that store:
- Your name
- Your favorite number
- A greeting message that uses your name

Then console.log all three!

---
**Next up:** [Working with the DOM →](02-dom-intro.md)