let x = 200;
let y = 200;
let extraCanvas;
let centerX = 600;
let centerY = 400;

let radius1 = 100;
let radius2 = 200;
let radius3 = 250;

let angle1 = 0;
let angle2 = 0;
let angle3 = 0;

let speed1 = 0.05;
let speed2 = 0.07;
let speed3 = 0.09;

let a = 10;

let xoff1 = 0;
let xoff2 = 10000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();
  background(0);
}

function draw() {
  background(0);
	
  let x = map(noise(xoff1), 0, 1, 0, width)
  let y = map(noise(xoff2), 0, 1, 0, height)

  xoff1 += 0.01;
  xoff2 += 0.01;

    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    let starX = random(width);
    let starY = random(height);
    extraCanvas.ellipse(starX, starY, 10, 10);
  

  image(extraCanvas, 0, 0);
  fill(255, 204, 0);
  stroke(255);
  star(x, y, 30, 70, 5);

  spaceship(a, 50, 100);
  a ++;

fill(255,252,88);
ellipse(centerX, centerY, 100, 100);	

let x1 = centerX + radius1 * cos(angle1);
let y1 = centerY + radius1 * sin(angle1);

let x2 = centerX + radius2 * cos(angle2);
let y2 = centerY + radius2 * sin(angle2);

let x3 = centerX + radius3 * cos(angle3);
let y3 = centerY + radius3 * sin(angle3);

noStroke();
fill("orange");
ellipse(x1, y1, 10, 10);

fill("red");
ellipse(x2, y2, 20, 20);

fill("green");
ellipse(x3, y3, 50, 50);

angle1 = angle1 + speed1;
angle2 = angle2 + speed2;
angle3 = angle3 + speed3;

if (y > height) {
    y = centerY;
		}
if (y < 0) {
    y = centerY;
		}
if (x > width) {
    x = centerX;
	}
if (x < 0) {
    x = centerX;
	}
if (a > width) {
    a = 10;
	}
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function spaceship(a, b, size) {
  fill("white");
  stroke("white")
	triangle(a, b - size/4, a + size, b + size/4, a, b + size * 3/4);
  fill("red");
	ellipse(a + size, b + size/4, size, size/2);
  fill("black");
  rect(a, b, size, size/2);
  fill("blue");
	ellipse(a + size/3, b + size/4, size/4);
	ellipse(a + size * 2 / 3, b + size/4, size/4);
}

function keyPressed() {
  if( key === 's' ) {
    a += 40; 
    triangle();
  }
}