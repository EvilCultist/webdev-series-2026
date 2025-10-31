const inc_button = document.getElementById("increment");
const dec_button = document.getElementById("decrement");
const counter_display = document.getElementById("counter");
let val = 0;
counter_display.textContent = val;
function increase() {
    val++;
    counter_display.textContent = val;
    counter_display.style.color = "#2e7d32";
    counter_display.style.transform = "scale(1.1)";
    setTimeout(() => {
        counter_display.style.transform = "scale(1)";
        counter_display.style.transition = "transform 0.15s ease";
        counter_display.style.color = "black";
    }, 1000);
}
function decrease() {
    val--;
    counter_display.textContent = val;
    counter_display.style.color = "#c62828";
    counter_display.style.transform = "scale(1.1)";
    setTimeout(() => {
        counter_display.style.transform = "scale(1)"
        counter_display.style.transition = "transform 0.15s ease";
        counter_display.style.color = "black";
    }, 1000);
}
inc_button.onclick = increase;
dec_button.onclick = decrease; 