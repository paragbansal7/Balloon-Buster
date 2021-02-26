var bowImage, backImage, blueImage, greenImage, arrowImage, pinkImage, redImage;

var background, bow, arrow;

var score, selectBalloon, blueBalloon, greenBalloon, pinkBalloon, redBalloon;

var arrowg,blueg, greeng, pink, redg;

function preload() {
  //load your images here 

  bowImage = loadImage("bow0.png");
  backImage = loadImage("back.png", "background0.png");
  blueImage = loadImage("blue_balloon0.png")
  greenImage = loadImage("green_balloon0.png")
  arrowImage = loadImage("arrow0.png")
  pinkImage = loadImage("pink_balloon0.png")
  redImage = loadImage("red_balloon0.png")
}

function setup() {
  createCanvas(600, 600);

  //add code here

  backGround = createSprite(0, 0, 10, 10);
  backGround.addImage("abc", backImage);
  backGround.scale = 2.7;

  bow = createSprite(520, 300, 15, 15);
  bow.addImage("arrow0.png", bowImage);

  arrow = createSprite(520, 300, 15, 15);
  arrow.addImage("abc", arrowImage);
  arrow.scale = 0.3;
  
  score = 0;

  arrowg = new Group();
  blueg = new Group();
  greeng = new Group();
  pinkg = new Group();
  redg = new Group();
  
}

function draw() {
  
  greeng.debug=true;

  //add code here

  backGround.velocityX = -3;

  bow.y = World.mouseY;
  arrow.y = bow.y;

  if (backGround.x < 0) {
    backGround.x = backGround.width / 2;
  }

  if (keyWentDown("space")) {
    arrow.x = arrow.x + 15;
  }

  if (keyWentUp("space")) {
    arrow.velocityX = -6;
    drawArrow();
  }

  spawnBalloons();
  
  destroyB();
  destroyG();
  destroyP();
  destroyR();

  drawSprites();

  
  
  textSize(20);
  text("Score :" + score, 450, 20);


}

function drawArrow() {
  arrow = createSprite(520, bow.y, 15, 15);
  arrow.addAnimation("abc", arrowImage);
  arrow.scale = 0.3;
  arrow.lifetime = 100;
  arrowg.add(arrow);
}

function spawnBalloons() {

  selectBalloon = Math.round(random(1,4))

  if (frameCount % 80 === 0) {
    if (selectBalloon === 1) {
      spawnBlueBalloon();
    } else if (selectBalloon === 2) {
      spawnGreenBalloon();
    } else if (selectBalloon === 3) {
      spawnPinkBalloon();
    } else if (selectBalloon === 4) {
      spawnRedBalloon();
    }

  }
  
}

  function spawnBlueBalloon() {
    blueBalloon = createSprite(-30, Math.round(random(20, 580)), 10, 10);
    blueBalloon.addImage("abc", blueImage);
    blueBalloon.scale = 0.1;
    blueBalloon.velocityX = 3;
    blueBalloon.lifetime = 210;
    blueg.add(blueBalloon);
  }


  function spawnGreenBalloon() {
    greenBalloon = createSprite(-30, Math.round(random(20, 580)), 10, 10);
    greenBalloon.addImage("abc", greenImage)
    greenBalloon.scale = 0.1;
    greenBalloon.velocityX = 3;
    greenBalloon.lifetime = 210;
    greeng.add(greenBalloon);
  }

  function spawnPinkBalloon() {
    pinkBalloon = createSprite(-30, Math.round(random(20, 580)), 10, 10);
    pinkBalloon.addImage("abc", pinkImage)
    pinkBalloon.scale = 1.3;
    pinkBalloon.velocityX = 3;
    pinkBalloon.lifetime = 210;
    pinkg.add(pinkBalloon);
  }

  function spawnRedBalloon() {
    redBalloon = createSprite(-30, Math.round(random(20, 580)), 10, 10);
    redBalloon.addImage("abc", redImage)
    redBalloon.scale = 0.1;
    redBalloon.velocityX = 3;
    redBalloon.lifetime = 210;
    redg.add(redBalloon);
  }

function destroyB() {
  if(arrowg.isTouching(blueg)){
    arrowg.destroyEach();
    blueg.destroyEach();
    score=score+1;
  }
  
}

function destroyG() {
  if(arrowg.isTouching(greeng)){
    arrowg.destroyEach();
    greeng.destroyEach();
    score=score+2;
  }
  
}

function destroyP() {
  if(arrowg.isTouching(pinkg)){
    arrowg.destroyEach();
    pinkg.destroyEach();
    score=score+3;
  }
  
}

function destroyR() {
  if(arrowg.isTouching(redg)){
    arrowg.destroyEach();
    redg.destroyEach();
    score=score+4;
  }
  
}