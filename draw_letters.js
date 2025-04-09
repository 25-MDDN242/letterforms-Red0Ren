/* these are optional special variables which will change the system */
var systemBackgroundColor = "#acf2e7";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen = "#26b29d";
const lightGreen = "#30dfc4";
const strokeColor = "#0a2d27";

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

  // plan line
  let lineP_W = letterData["p_lineW"];
  let lineP_startX = letterData["p_startX"];
  let lineP_startY = letterData["p_startY"];
  let lineP_endX = letterData["p_endX"];
  let lineP_endY = letterData["p_endY"];

  // Square parameters
  let squareSize = letterData["size"];
  let squareDegree = letterData["degree"];
  let squareX = letterData["squareX"];
  let squareY = letterData["squareY"];
  // line 1
  let line1_W = letterData["1_lineW"];
  let line1_startX = letterData["1_startX"];
  let line1_startY = letterData["1_startY"];
  let line1_endX = letterData["1_endX"];
  let line1_endY = letterData["1_endY"];
  // line 2
  let line2_W = letterData["2_lineW"];
  let line2_startX = letterData["2_startX"];
  let line2_startY = letterData["2_startY"];
  let line2_endX = letterData["2_endX"];
  let line2_endY = letterData["2_endY"];
  // line 3
  let line3_W = letterData["3_lineW"];
  let line3_startX = letterData["3_startX"];
  let line3_startY = letterData["3_startY"];
  let line3_endX = letterData["3_endX"];
  let line3_endY = letterData["3_endY"];
  // line 4
  let line4_W = letterData["4_lineW"];
  let line4_startX = letterData["4_startX"];
  let line4_startY = letterData["4_startY"];
  let line4_endX = letterData["4_endX"];
  let line4_endY = letterData["4_endY"];


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
  // 1
  strokeWeight(line1_W);
  line(line1_startX, line1_startY, line1_endX, line1_endY);
  // 2
  strokeWeight(line2_W);
  line(line2_startX, line2_startY, line2_endX, line2_endY);
  // 3
  strokeWeight(line3_W);
  line(line3_startX, line3_startY, line3_endX, line3_endY);
  // 4
  strokeWeight(line4_W);
  line(line4_startX, line4_startY, line4_endX, line4_endY);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["1_endX"] = map(percent, 0, 100, oldObj["1_endX"], newObj["1_endX"]);
  new_letter["1_endY"] = map(percent, 0, 100, oldObj["1_endY"], newObj["1_endY"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
