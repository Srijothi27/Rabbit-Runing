var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf1,leafImg;
var orange,orangeImg;

  
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

rabbit.velocityX=5;

//creating apple


}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;

  drawSprites();
var select=Math.round(random(1,3))
if (frameCount % 80===0){
  if (select===1){
    apple1();
  }else if(select===2){
    leaf();
  }else{
    orangeLeaf();
  }
}
}
function apple1(){
  apple = createSprite(random(50, 350), 40, 10, 10);
apple.scale =0.1;
apple.addImage(appleImg);
apple.velocityY=3;
apple.lifetime=150;
}
function leaf(){
leaf1 = createSprite(random(50, 350), 40, 10, 10);
leaf1.scale =0.1;
leaf1.addImage(leafImg);
leaf1.velocityY=3;
leaf1.lifetime=150;
}
function orangeLeaf(){
orange = createSprite(random(50, 350), 40, 10, 10);
orange.scale =0.1;
orange.addImage(orangeImg);
orange.velocityY=3;
orange.lifetime=150;
}