// =========================================
// 🎯 Part 1: JavaScript Basics
// =========================================

// Variable + Conditional
let userName = "Joshua";
let hour = new Date().getHours();

if (hour < 12) {
  document.getElementById("greeting").innerText = `Good Morning, ${userName}!`;
} else {
  document.getElementById("greeting").innerText = `Good Day, ${userName}!`;
}

// =========================================
// ❤️ Part 2: Functions
// =========================================

// Function 1: Simple greeting
function sayHello(name) {
  document.getElementById("hello-output").innerText = `Hello, ${name}!`;
}

// Function 2: Calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}
// Example usage in console:
console.log("Total:", calculateTotal(50, 3)); // 150

// =========================================
// 🔁 Part 3: Loops
// =========================================

// For loop: Display numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  document.getElementById("number-list").appendChild(li);
}

// While loop: Countdown from 3
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// =========================================
// 🌐 Part 4: DOM Manipulation
// =========================================

// 1. Toggle dark mode on button click
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  // Update text dynamically
  let textEl = document.getElementById("toggleText");
  if (document.body.classList.contains("dark-mode")) {
    textEl.innerText = "Dark Mode is ON";
  } else {
    textEl.innerText = "Dark Mode is OFF";
  }
});

// 2. Create new element dynamically
let newPara = document.createElement("p");
newPara.innerText = "This paragraph was created with JavaScript!";
document.body.appendChild(newPara);

// 3. Change text style
newPara.style.fontWeight = "bold";
newPara.style.color = "blue";
