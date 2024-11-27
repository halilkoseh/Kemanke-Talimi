class Game {
  constructor(background) {
    this.backgroundImage = background;
  }

  oyun() {
    background(this.backgroundImage);

    push();
    translate(width - 50, tahtaY);
    rotate(radians(-20));
    fill(150);
    push();
    rotate(radians(-10));
    rect(-20, 0, 10, 90);
    pop();
    rotate(radians(45));
    rect(-20, 0, 10, 103);

    fill("white");
    ellipse(-20, 0, 110, 110);
    fill("white");
    ellipse(-20, 0, 100, 100);
    fill("black");
    ellipse(-20, 0, 90, 90);
    fill("black");
    ellipse(-20, 0, 80, 80);
    fill("blue");
    ellipse(-20, 0, 70, 70);
    fill("blue");
    ellipse(-20, 0, 60, 60);
    fill("red");
    ellipse(-20, 0, 50, 50);
    fill("red");
    ellipse(-20, 0, 40, 40);
    fill("yellow");
    ellipse(-20, 0, 20, 20);

    if (
      arrowY <= tahtaY + 40 &&
      arrowY >= tahtaY - 65 &&
      arrowX >= 625 &&
      arrowX < 650
    ) {
      score++;
    
      if (atma) {
        arrowX += 25;
        if (arrowX > width - 150) {
          atma = false;
        }
      } else {
        arrowX = archerX + 65;
        arrowY = archerY + 50;
      }
    }
    tahtaY = tahtaY + hareketYonu * hiz;
    if (tahtaY === 600) {
      hareketYonu = -1;
    }

    if (tahtaY === 70) {
      hareketYonu = 1;
    }

    pop();
    archerY = mouseY;
    archerY = constrain(archerY, 0, height - 135);

    if (atma) {
      arrowX += 25;

      if (arrowX > width) {
        
        atma = false;
      }
    } else {
      arrowX = archerX + 65;
      arrowY = archerY + 50;
    }

    image(archer, archerX, archerY);
    rect(arrowX + 7, arrowY + 5, 50, 1);
    okAtma();

    if (score == 10) {
    noLoop();
    textAlign(CENTER);
    textSize(40);
    
    fill("#E91E63");
    text("Artık Kemankeş Olmaya Hazırsın " + username + "!", 400, 350);
  }

  // Skoru göster
  fill("black");
  textSize(20);
  textAlign(RIGHT);
  text("SKOR: " + score, width - 20, 30);

  // Kullanılabilir ok sayısını göster
  fill("black");
  textSize(20);
  textAlign(RIGHT);
  text("OK SAYISI: " + arrowsShot, width - 20, 60);
  
  fill("black");
  textSize(20);
  textAlign(LEFT);
  text("KEMANKEŞ ADAYI: "+username, 15, 30);
} }
