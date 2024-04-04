function changeBackgroundColor() {
  var newColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generates a random hex color
  document.body.style.backgroundColor = newColor;
}
