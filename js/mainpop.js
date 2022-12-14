var newHue1;
var newHue2;
var newHue3;
var newHue4;

var currentHue1;
var currentHue2;
var currentHue3;
var currentHue4;

var hueDiff1;
var hueDiff2;
var hueDiff3;
var hueDiff4;

var incrementer1 = 0;
var incrementer2 = 0;
var incrementer3 = 0;
var incrementer4 = 0;

var counter = 0;
var iterations = 200;

function setNewColor() {
  var bodyStyle = getComputedStyle(document.body);
  currentHue1 = Number(bodyStyle.getPropertyValue("--hue1"));
  currentHue2 = Number(bodyStyle.getPropertyValue("--hue2"));
  currentHue3 = Number(bodyStyle.getPropertyValue("--hue3"));
  currentHue4 = Number(bodyStyle.getPropertyValue("--hue4"));

  newHue1 = getRandomNumber(0, 360);
  newHue2 = getRandomNumber(0, 360);
  newHue3 = getRandomNumber(0, 360);
  newHue4 = getRandomNumber(0, 360);

  hueDiff1 = newHue1 - currentHue1;
  hueDiff2 = newHue2 - currentHue2;
  hueDiff3 = newHue3 - currentHue3;
  hueDiff4 = newHue4 - currentHue4;

  incrementer1 = hueDiff1 / iterations;
  incrementer2 = hueDiff2 / iterations;
  incrementer3 = hueDiff3 / iterations;
  incrementer4 = hueDiff4 / iterations;
}

var frameId;

function animate() {
  if (counter == 0) {
    setNewColor();
  }

  counter++;

  currentHue1 += incrementer1;
  currentHue2 += incrementer2;
  currentHue3 += incrementer3;
  currentHue4 += incrementer4;

  if (counter == iterations) {
    counter = 0;
  }

  document.body.style.setProperty("--hue1", currentHue1);
  document.body.style.setProperty("--hue2", currentHue2);
  document.body.style.setProperty("--hue3", currentHue3);
  document.body.style.setProperty("--hue4", currentHue4);

  requestAnimationFrame(animate);
}
animate();

function getRandomNumber(low, high) {
  var r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}
