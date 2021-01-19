var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 50, 100);
  fixedRect.shapeColor = "purple";

  movingRect = createSprite(500,200,100,50);
  movingRect.shapeColor = "purple";


}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2&&
    fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2&&
    movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2&&
    fixedRect.y-movingRect.y <  movingRect.height/2 + fixedRect.height/2){
fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "purple";
movingRect.shapeColor = "purple";
  }
  drawSprites();
}