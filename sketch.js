var fixedRect, movingRect;


function setup() {
  createCanvas(1200, 800);
  
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

}

function draw() {
  background("yellow");  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    ){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";

  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  drawSprites();


}