const canvasWidth = 960;
const canvasHeight = 500;
//const squareSize = 120;


/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 0,
  "startX": 0,
  "startY": -90,
  "offsetx": 0,
  "offsety": 0
}

const letterB = {
  "size": 100,
  "startX": -80,
  "startY": -80,
  "offsetx": 80,
  "offsety": -10
}

const letterC = {
  "size": 100,
  "startX": -90,
  "startY": 0,
  "offsetx": 90,
  "offsety": -90
}

const backgroundColor  = "#acf2e7";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  rectMode(CENTER);
  stroke(strokeColor);
  strokeWeight(4);
  strokeCap(PROJECT);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let squareSize = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let lineStartx = letterData["startX"];
  let lineStartY = letterData["startY"];

  // draw letters
  strokeWeight(4);
  fill(darkGreen);
  square(posx, posy, squareSize);
  fill(lightGreen);
  strokeWeight(10);
  line(posx+lineStartx, posy+lineStartY, pos2x, pos2y+90);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
