var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect.velocityY = +5;

  gameObject1 = createSprite(200,200,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200,400,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(200,600,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(200,800,50,50);
  gameObject4.shapeColor = "green";

  gameObject2.velocityY = 5;
}

function draw() {
  background(0,0,0); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } 

 bounceOff(movingRect,fixedRect);

  drawSprites();
}

