
  var fixedrect ,movingrect 
  
  
  
  
  function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600,400, 50, 50);
  fixedrect.shapecolour="green"
movingrect=creatSprite(400,200,80,30);
movingrect.shapecolour="green"


}

function draw() {
 background(255,255,255); 
 if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x <  fixedRect.width/2 + movingRect.width/2 &&
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  drawSprites();
}