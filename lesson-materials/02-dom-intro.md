# Working with the DOM 🎨

## What is the DOM?

DOM stands for **Document Object Model**. Think of it as JavaScript's way of seeing and controlling the HTML page!

Imagine your HTML page is like a family tree, and JavaScript can:
- Find any family member (element)
- Change what they look like
- Make them do things when clicked

## Finding Elements 🔍

### Method 1: getElementById
The easiest way - find an element by its ID (IDs are unique, like social security numbers!)

```html
<!-- HTML -->
<p id="myParagraph">Hello!</p>
```

```javascript
// JavaScript
let paragraph = document.getElementById("myParagraph");
```

### Method 2: querySelector
More powerful - can find by ID, class, or tag name!

```javascript
// Find by ID (use #)
let paragraph = document.querySelector("#myParagraph");

// Find by class (use .)
let button = document.querySelector(".myButton");

// Find by tag name
let heading = document.querySelector("h1");
```

## Changing Content 📝

Once you've found an element, you can change its text:

```javascript
let title = document.getElementById("pageTitle");
title.textContent = "New Title!";

// Or use innerHTML if you want to add HTML tags
title.innerHTML = "New <strong>Bold</strong> Title!";
```

## Changing Styles 🎨

Make things colorful and fun!

```javascript
let box = document.getElementById("myBox");

// Change one style
box.style.color = "blue";
box.style.backgroundColor = "yellow";  // Note: background-color becomes backgroundColor
box.style.fontSize = "20px";

// Multiple styles
box.style.width = "200px";
box.style.height = "200px";
box.style.border = "2px solid red";
```

### Style Property Names
CSS properties with dashes become camelCase in JavaScript:
- `background-color` → `backgroundColor`
- `font-size` → `fontSize`
- `margin-top` → `marginTop`

## Events - Making Things Interactive! 🎮

### Click Events
The most common event - do something when clicked!

```html
<!-- HTML -->
<button id="myButton">Click Me!</button>
<p id="message">No clicks yet</p>
```

```javascript
// JavaScript
let button = document.getElementById("myButton");
let message = document.getElementById("message");
let clickCount = 0;

button.addEventListener("click", function() {
    clickCount = clickCount + 1;
    message.textContent = "Clicked " + clickCount + " times!";
});
```

### Other Useful Events

```javascript
// Mouse enters an element
element.addEventListener("mouseenter", function() {
    element.style.backgroundColor = "lightblue";
});

// Mouse leaves an element
element.addEventListener("mouseleave", function() {
    element.style.backgroundColor = "white";
});

// Input field changes
inputField.addEventListener("input", function() {
    console.log("You typed:", inputField.value);
});
```

## Getting Input Values 📥

For text inputs and other form elements:

```html
<!-- HTML -->
<input type="text" id="nameInput" placeholder="Enter your name">
<button id="greetButton">Greet Me!</button>
<p id="greeting"></p>
```

```javascript
// JavaScript
let nameInput = document.getElementById("nameInput");
let greetButton = document.getElementById("greetButton");
let greeting = document.getElementById("greeting");

greetButton.addEventListener("click", function() {
    let name = nameInput.value;  // Get what was typed
    greeting.textContent = "Hello, " + name + "!";
});
```

## Complete Example 🌟

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Demo</title>
</head>
<body>
    <h1 id="title">Welcome!</h1>
    <button id="colorButton">Change Color</button>
    <button id="sizeButton">Make Bigger</button>

    <script>
        let title = document.getElementById("title");
        let colorButton = document.getElementById("colorButton");
        let sizeButton = document.getElementById("sizeButton");

        colorButton.addEventListener("click", function() {
            title.style.color = "purple";
        });

        sizeButton.addEventListener("click", function() {
            title.style.fontSize = "50px";
        });
    </script>
</body>
</html>
```

## Try This! 🎯

1. Create a button that changes the background color of the page
2. Create a text input and display whatever is typed in a paragraph
3. Create a counter that goes up when you click a "+" button and down when you click a "-" button

## Common Mistakes to Avoid ⚠️

1. **Trying to find elements before the page loads**
   - Put your `<script>` tag at the bottom of the body
   - Or use the script in a separate file

2. **Forgetting the # or . in querySelector**
   ```javascript
   // Wrong
   document.querySelector("myId");

   // Right
   document.querySelector("#myId");
   ```

3. **Using the wrong style property name**
   ```javascript
   // Wrong
   element.style.background-color = "red";

   // Right
   element.style.backgroundColor = "red";
   ```

## Quick Reference 📋

```javascript
// Finding elements
document.getElementById("id")
document.querySelector("#id")
document.querySelector(".class")

// Changing content
element.textContent = "New text"
element.innerHTML = "<strong>Bold text</strong>"

// Changing styles
element.style.propertyName = "value"

// Events
element.addEventListener("click", function() {
    // Do something
});

// Getting input values
inputElement.value
```

---
**Next up:** [Project Guide →](03-project-guide.md)