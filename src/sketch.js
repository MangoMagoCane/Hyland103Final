let gStateMachine;
let keysPressed = {};
let bg = 'gray';

function preload() {
  
  // loadJSON('https://api.nasa.gov/planetary/apod?api_key=', loadBackground);
  loadJSON('https://api.nasa.gov/EPIC/api/natural/images?api_key=', loadBackground);
  
}

function loadBackground(imgObj) {
  bg = loadImage(imgObj.image);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  gStateMachine = new StateMachine({
    'start': new StartState(),
    'play': new PlayState()
  });
  gStateMachine.change('start', {});

}

function update() {
  gStateMachine.update();
  keysPressed = {};
}

function draw() {
  update();

  background(bg);
  gStateMachine.render();
}

function keyPressed() {
  keysPressed[key] = true;
}
