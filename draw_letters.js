/* these are optional special variables which will change the system */
var systemBackgroundColor = "#acf2e7";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  push();
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // Square parameters
  let squareSize = letterData["size"];
  let squareDegree = letterData["degree"];
  let squareX = letterData["squareX"];
  let squareY = letterData["squareY"];

  let line1_W = letterData["1_lineW"];
  let line1_startX = letterData["1_startX"];
  let line1_startY = letterData["1_startY"];
  let line1_endX = letterData["1_endX"];
  let line1_endY = letterData["1_endY"];
  
  let line2_W = letterData["2_lineW"];
  let line2_startX = letterData["2_startX"];
  let line2_startY = letterData["2_startY"];
  let line2_endX = letterData["2_endX"];
  let line2_endY = letterData["2_endY"];
  
  

  // Set modes
  rectMode(CENTER);
  angleMode(DEGREES);

  // draw letters
  // Square
  push(); // isolate transformations
  rotate(squareDegree);
  strokeWeight(4);
  fill(darkGreen);
  square(squareX, squareY, squareSize);
  pop();
  // Lines
  strokeWeight(line1_W);
  line(line1_startX, line1_startY, line1_endX, line1_endY);
  strokeWeight(line2_W);
  line(line2_startX, line2_startY, line2_endX, line2_endY);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["1_endX"] = map(percent, 0, 100, oldObj["1_endX"], newObj["1_endX"]);
  new_letter["1_endY"] = map(percent, 0, 100, oldObj["1_endY"], newObj["1_endY"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
