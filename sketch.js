// clockp5v2

let dow = ['sun','mon','tue','wed','thu','fri','sat'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.body.style.overflow = "hidden";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  let [canvas_W, canvas_H] = [windowWidth, windowHeight];
  let clock_X = canvas_W / 2;
  let clock_Y = canvas_H / 2;
  let clock_font_size = (canvas_W + canvas_H) / 20;
  let background_RGB = [20, 20 ,20];
  let now = new Date();

  background(background_RGB[0], background_RGB[1], background_RGB[2]);
  set_game_title(canvas_W, canvas_H);
  set_clock(clock_X, clock_Y, now, clock_font_size);
}

function set_clock(clock_X, clock_Y, now, clock_font_size) {
  push();
  textSize(clock_font_size);
  textFont("Crimson Text");
  textAlign(CENTER, CENTER);
  noStroke();
  fill(200);
  text(nf(now.getHours(), 2) + " : " + nf(now.getMinutes(), 2) + " : " + nf(now.getSeconds(), 2), clock_X, clock_Y);

  textSize(clock_font_size / 2);
  text(nf(now.getFullYear(), 4) + "/" + nf(now.getMonth(), 2) + "/" + nf(now.getDate(), 2) + " " + dow[now.getDay()], clock_X, clock_Y * 7 / 10);
  pop();
}

function set_game_title(canvas_W, canvas_H) {
  let game_title = "* clockp5v2 * c1.0"
  push();
  textSize(10);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  noStroke();
  fill(200);
  text(game_title, canvas_W * 9 / 10, canvas_H -20);
  text("canvas_W : " + nf(canvas_W, 1, 1), canvas_W * 9 / 10, canvas_H -30);
  text("canvas_H : " + nf(canvas_H ,1, 1), canvas_W * 9 / 10, canvas_H -40);
  pop();
}
