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

  // Square parameters
  let squareSize = letterData["size"];
  let squareDegree = letterData["degree"];
  let squareX = letterData["squareX"];
  let squareY = letterData["squareY"];
  // line 1
  let line1_W = letterData["1_lineW"];
  let line1_startX = letterData["1_startX"];
  let line1_startY = letterData["1_startY"];
  let line1_endX = letterData["1_endX"];//
  let line1_endY = letterData["1_endY"];//
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
  // square
  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["degree"] = map(percent, 0, 100, oldObj["degree"], newObj["degree"]);
  new_letter["squareX"] = map(percent, 0, 100, oldObj["squareX"], newObj["squareX"]);
  new_letter["squareY"] = map(percent, 0, 100, oldObj["squareY"], newObj["squareY"]);
  // line 1
  new_letter["1_lineW"] = map(percent, 0, 100, oldObj["1_lineW"], newObj["1_lineW"]);
  new_letter["1_startX"] = map(percent, 0, 100, oldObj["1_startX"], newObj["1_startX"]);
  new_letter["1_startY"] = map(percent, 0, 100, oldObj["1_startY"], newObj["1_startY"]);
  new_letter["1_endX"] = map(percent, 0, 100, oldObj["1_endX"], newObj["1_endX"]);
  new_letter["1_endY"] = map(percent, 0, 100, oldObj["1_endY"], newObj["1_endY"]);
  // line 2
  new_letter["2_lineW"] = map(percent, 0, 100, oldObj["2_lineW"], newObj["2_lineW"]);
  new_letter["2_startX"] = map(percent, 0, 100, oldObj["2_startX"], newObj["2_startX"]);
  new_letter["2_startY"] = map(percent, 0, 100, oldObj["2_startY"], newObj["2_startY"]);
  new_letter["2_endX"] = map(percent, 0, 100, oldObj["2_endX"], newObj["2_endX"]);
  new_letter["2_endY"] = map(percent, 0, 100, oldObj["2_endY"], newObj["2_endY"]);
  // line 3
  new_letter["3_lineW"] = map(percent, 0, 100, oldObj["3_lineW"], newObj["3_lineW"]);
  new_letter["3_startX"] = map(percent, 0, 100, oldObj["3_startX"], newObj["3_startX"]);
  new_letter["3_startY"] = map(percent, 0, 100, oldObj["3_startY"], newObj["3_startY"]);
  new_letter["3_endX"] = map(percent, 0, 100, oldObj["3_endX"], newObj["3_endX"]);
  new_letter["3_endY"] = map(percent, 0, 100, oldObj["3_endY"], newObj["3_endY"]);
  // line 4
  new_letter["4_lineW"] = map(percent, 0, 100, oldObj["4_lineW"], newObj["4_lineW"]);
  new_letter["4_startX"] = map(percent, 0, 100, oldObj["4_startX"], newObj["4_startX"]);
  new_letter["4_startY"] = map(percent, 0, 100, oldObj["4_startY"], newObj["4_startY"]);
  new_letter["4_endX"] = map(percent, 0, 100, oldObj["4_endX"], newObj["4_endX"]);
  new_letter["4_endY"] = map(percent, 0, 100, oldObj["4_endY"], newObj["4_endY"]);
  



  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
