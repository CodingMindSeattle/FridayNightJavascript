# HTML & CSS Basics 🌐

Before we dive into JavaScript, let's quickly understand the building blocks of web pages!

## What is HTML? 📄

HTML (HyperText Markup Language) is like the **skeleton** of a webpage. It gives structure and meaning to content.

### Basic HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page Title</title>
</head>
<body>
    <h1>This is a big heading</h1>
    <p>This is a paragraph of text.</p>
    <button>Click me!</button>
</body>
</html>
```

### Common HTML Tags
```html
<h1>Big Heading</h1>           <!-- Biggest heading -->
<h2>Medium Heading</h2>        <!-- Smaller heading -->
<p>This is a paragraph.</p>    <!-- Regular text -->
<button>Button</button>        <!-- Clickable button -->
<div>Container box</div>       <!-- Generic container -->
<span>Inline text</span>      <!-- Inline container -->
<img src="picture.jpg">       <!-- Image -->
<a href="page.html">Link</a>  <!-- Link to another page -->
```

### Important HTML Attributes
```html
<!-- ID - unique identifier (only one per page) -->
<p id="special-text">This paragraph has an ID</p>

<!-- Class - can be used on multiple elements -->
<p class="red-text">This has a class</p>
<p class="red-text">This also has the same class</p>

<!-- Other useful attributes -->
<button onclick="doSomething()">Click me</button>
<input type="text" placeholder="Enter your name">
```

## What is CSS? 🎨

CSS (Cascading Style Sheets) is like the **clothes** for your webpage. It makes things look pretty!

### How to Add CSS
```html
<!-- Method 1: Inside HTML file -->
<style>
    h1 {
        color: blue;
        font-size: 36px;
    }
</style>

<!-- Method 2: External file -->
<link rel="stylesheet" href="style.css">
```

### Basic CSS Examples
```css
/* Style all h1 tags */
h1 {
    color: purple;
    font-size: 48px;
    text-align: center;
}

/* Style elements with ID "special-text" */
#special-text {
    background-color: yellow;
    padding: 10px;
}

/* Style elements with class "red-text" */
.red-text {
    color: red;
    font-weight: bold;
}

/* Style all buttons */
button {
    background-color: #4CAF50;
    color: white;
    padding: 15px 32px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
```

### CSS Properties You'll Use Most
```css
/* Colors */
color: red;                    /* Text color */
background-color: blue;        /* Background color */

/* Size */
width: 200px;                  /* Width */
height: 100px;                 /* Height */
font-size: 20px;              /* Text size */

/* Spacing */
margin: 10px;                  /* Space outside element */
padding: 15px;                 /* Space inside element */

/* Text */
text-align: center;            /* Center, left, right */
font-weight: bold;             /* Make text bold */

/* Borders and shapes */
border: 2px solid black;       /* Add a border */
border-radius: 10px;           /* Rounded corners */
```

## How HTML, CSS, and JavaScript Work Together 🤝

Think of building a webpage like building a person:

### 🦴 HTML = Skeleton (Structure)
```html
<div id="robot">
    <h1 id="robot-name">RoboFriend</h1>
    <p id="robot-mood">Happy</p>
    <button id="feed-button">Feed Robot</button>
</div>
```

### 👕 CSS = Clothes (Style)
```css
#robot {
    background-color: silver;
    border: 3px solid black;
    padding: 20px;
    border-radius: 15px;
}

#robot-name {
    color: blue;
    font-size: 30px;
}

#feed-button {
    background-color: green;
    color: white;
    padding: 10px 20px;
}
```

### 🧠 JavaScript = Brain (Behavior)
```javascript
let button = document.getElementById("feed-button");
let mood = document.getElementById("robot-mood");

button.addEventListener("click", function() {
    mood.textContent = "Very Happy! 🤖";
});
```

## Quick Practice! ✏️

Look at this HTML and see if you can understand what each part does:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: lightblue;
        }

        #main-title {
            color: darkblue;
            text-align: center;
        }

        .highlight {
            background-color: yellow;
            padding: 5px;
        }

        button {
            background-color: orange;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1 id="main-title">Welcome to My Page!</h1>
    <p>This is a <span class="highlight">highlighted</span> word.</p>
    <p class="highlight">This whole paragraph is highlighted.</p>
    <button onclick="alert('Hello!')">Say Hello</button>
</body>
</html>
```

**Can you guess what this will look like?**
- Blue background
- Dark blue centered title
- Yellow highlighted text
- Orange button that shows a popup

## Why Do We Need JavaScript? 🤔

**HTML + CSS = Static webpage** (like a poster)
- Shows information
- Looks pretty
- But doesn't DO anything

**HTML + CSS + JavaScript = Interactive webpage** (like a video game)
- Responds to clicks
- Changes content
- Reacts to user input
- Can save information
- Updates in real-time

## Fun Fact! 💡

Every website you use has all three:
- **Facebook**: HTML for posts, CSS for styling, JavaScript for liking/commenting
- **YouTube**: HTML for video player, CSS for layout, JavaScript for play/pause
- **Games**: HTML for game board, CSS for colors, JavaScript for game logic

## Ready for JavaScript? 🚀

Now that you understand the basics:
- HTML creates the elements we'll control
- CSS makes them look good
- JavaScript makes them interactive and fun!

Let's start coding with JavaScript and bring our pages to life!

---
**Next:** [JavaScript Basics →](01-basics.md)