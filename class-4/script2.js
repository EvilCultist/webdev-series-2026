const counter = document.getElementById("counter");
const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");

let value = 0;

function updateCounter() {
  counter.textContent = value;

  // Color and animation
  if (value > 0) {
    counter.style.color = "#2e7d32";
    counter.style.transform = "scale(1.1)";
  } else if (value < 0) {
    counter.style.color = "#c62828";
    counter.style.transform = "scale(0.9)";
  } else {
    counter.style.color = "#333";
    counter.style.transform = "scale(1)";
  }

  setTimeout(() => (counter.style.transform = "scale(1)"), 150);

  if (value === 20) {
    showNotification("🎉 You hit 20!");
  }
}

inc.onclick = () => {
  value++;
  updateCounter();
};

dec.onclick = () => {
  value--;
  updateCounter();
};

function showNotification(text) {
  const notif = document.createElement("div");
  notif.textContent = text;

  // Style object
  const styles = {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#2e7d32",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    fontSize: "1rem",
    zIndex: 1000,
    opacity: 0,
    transition: "opacity 0.3s",
  };

  // Apply styles from object
  for (let key in styles) {
    notif.style[key] = styles[key];
  }

  document.body.appendChild(notif);

  // Fade in
  requestAnimationFrame(() => {
    notif.style.opacity = 1;
  });

  // Remove after 2 seconds
  setTimeout(() => {
    notif.style.opacity = 0;
    setTimeout(() => document.body.removeChild(notif), 300);
  }, 2000);
}

