class Menu {
  constructor(background) {
    this.backgroundImage = background;
  }

  startButtonHover() {
    if (teksefer === 0&&!gameStarted) {
      song.play();
    }
    startButton.html(`
      <div>
        <img src="Image/start_button_hover.png" style="position: relative; top: 0px; left: 5px;" width="60px" height="60px" disabled/>
        <span style="position: relative; top: -5px; left:0px;  font-size: 20px; font-weight: normal;font-family:Impact ">BAŞLA</span>
      </div>
    `);
    teksefer = 1;
  }

  startButtonNormal() {
    startButton.html(`
      <div>
        <img src="Image/start_button_normal.png" style="position: relative; top: 0px; left: 5px;" width="60px" height="60px"/>
        <span style="position: relative; top: -5px; left:0px;  font-size: 20px; font-weight: bold;font-family:Impact">BAŞLA</span>
      </div>
    `);
    teksefer = 0;
  }

  girisekran() {
    background(this.backgroundImage);
   fill("#000000");
    textSize(30);
    textAlign(LEFT);
    textFont('Impact')
    text("Kemankeş: " + username, 450, 490);
  
    fill("#524e46");
    textSize(25);
     textAlign(CENTER);
     textFont('Impact')
     text("Selçuklu’nun İhtişamı ve Yayı ile Efsanevi Bir Macera",400,380);
    return;
  }

  girisekransetup() {
    archer.setFrame(archer.numFrames() - 1);
    archerX = 0;
    arrowX = 0;
    arrowY = height / 2;
    tahtaY = height / 2;

    usernameInput = createInput();
    usernameInput.position(600, 465);
    usernameInput.size(150, 20);
    usernameInput.style("border-radius", "10px");
    usernameInput.style("border", "2px solid #000000");
    usernameInput.style("padding", "4px 10px");
    usernameInput.style("font-size", "20px");

    let noButton = createButton("");
    noButton.position(625, 500);
    noButton.size(100, 100);
    noButton.style("background-color", "transparent");
    noButton.style("border-radius", "20px");
    noButton.style("border", "none");
    noButton.style("z-index", "100");

    startButton = createButton("Start");
    startButton.position(625, 500);
    startButton.size(100, 100);
    startButton.style("background-color", "transparent");
    startButton.style("border-radius", "20px");
    startButton.style("border", "none");
    startButton.html(`
      <div>
        <img src="Image/start_button_normal.png" style="position: relative; top: 0px; left: 5px;" width="60px" height="60px" disabled/>
        <span style="position: relative; top: -5px; left:0px;  font-size: 20px; font-weight: bold;font-family:Impact">BAŞLA</span>
      </div>
    `);

    noButton.mousePressed(startGame);
    noButton.mouseOver(this.startButtonHover);
    noButton.mouseOut(this.startButtonNormal);
  }
}
