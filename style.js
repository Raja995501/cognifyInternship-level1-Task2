// Clears the screen on click of C button.
function clearScreen() {
    document.getElementById("result").value = "";
  }
 // Displays the entered value on screen only if it's a number or '+' symbol.
function liveScreen(value) {
  if (Number.isFinite(Number(value)) || value === "+") {
    document.getElementById("result").value += value;
  } else {
    alert("This calculator only allows numbers and addition(+).");
    
  }
}
 