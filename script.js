let display = document.getElementById("display");

// Add value
function appendValue(value) {
  let lastChar = display.value.slice(-1);

  if (["+", "-", "*", "/"].includes(lastChar) &&
      ["+", "-", "*", "/"].includes(value)) {
    return; // prevent double operator
  }

  display.value += value;
}

// AC (clear all)
function allClear() {
  display.value = "";
}

// Delete last digit
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Percentage
function percentage() {
  try {
    display.value = eval(display.value) / 100;
  } catch {
    display.value = "Error";
  }
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

let history = document.getElementById("history");

function calculate() {
  try {
    history.innerText = display.value;
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// ✅ Keyboard support
document.addEventListener("keydown", function (e) {
  const key = e.key;

  if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
    appendValue(key);
  } 
  else if (key === "Enter") {
    calculate();
  } 
  else if (key === "Backspace") {
    deleteLast();
  } 
  else if (key === "Escape") {
    allClear();
  } 
  else if (key === "%") {
    percentage();
  }
});