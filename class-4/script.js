// Get elements
const counter = document.getElementById("counter");
const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");

let value = 0;

// Update counter display
function updateCounter() {
  counter.textContent = value;

  // Color and animation based on increase or decrease
  if (value > 0) {
    counter.style.color = "#2e7d32"; // green
    counter.style.transform = "scale(1.1)";
  } else if (value < 0) {
    counter.style.color = "#c62828"; // red
    counter.style.transform = "scale(0.9)";
  } else {
    counter.style.color = "#333"; // neutral
    counter.style.transform = "scale(1)";
  }

  // Reset animation after a short delay
  setTimeout(() => (counter.style.transform = "scale(1)"), 150);
}

// Button click handlers
inc.onclick = function () {
  value++;
  updateCounter();
};

dec.onclick = function () {
  value--;
  updateCounter();
};

