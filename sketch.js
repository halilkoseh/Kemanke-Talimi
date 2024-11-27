let teksefer = 0;
let arrowsShot = 30;
let atma = false;
let archer;
let archerX, archerY;
let arrowX, arrowY;
let tahtaY;
let hareketYonu = 1;
let hiz = 5;
let score = 0;

let backgroundImage;
let backgroundImage2;
let song;

let usernameInput;
let startButton;
let gameStarted = false;
let username = "";
let startButtonImageNormal;
let startButtonImageHover;

let game; // Game instance
let menu; // Menu instance

function preload() {
  archer = loadImage("Image/archer.gif");
  backgroundImage = loadImage("Image/tasarim.png");
  backgroundImage2 = loadImage("Image/arkaplan.png");
  startButtonImageNormal = loadImage("Image/start_button_normal.png");
  startButtonImageHover = loadImage("Image/start_button_hover.png");
  song = loadSound("Sound/oksesi.mp3");
}

function setup() {
  createCanvas(800, 700);
  game = new Game(backgroundImage); 
  menu = new Menu(backgroundImage2); 
  menu.girisekransetup(); 
}

function draw() {
  if (!gameStarted) {
    menu.girisekran(); 
  } else if (gameStarted) {
    game.oyun();
  }
}

function mouseClicked() {
  
  if (!atma && gameStarted) {
    arrowsShot--;
    if (arrowsShot === 0) {
      noLoop();
    }
    atma = true;
    if (typeof song !== "undefined") {
      song.play();
    }
  }
}

function okAtma() {
  if (atma) {
    archer.setFrame(0);
  } else if (!atma) {
    archer.setFrame(archer.numFrames() - 1);
  }
}

function startGame() {
  if (usernameInput.value() !== "") {
    gameStarted = true;
    username = usernameInput.value();
    usernameInput.hide();
    startButton.hide();
    atma=true;
  }
}
