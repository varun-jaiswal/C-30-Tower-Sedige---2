const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon , polygon_img , block_img 
function preload(){
  polygon_img=loadImage("polygon.png");
  block_img=loadImage("block.png");
}
function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(490,300,250,10);
  stand2 = new Stand(850,200,200,10);
 
  //level one
  block1 = new Block(400,275,30,40);
  console.log(block1);
  block2 = new Block(430,275,30,40);
  block3 = new Block(460,275,30,40);
  block4 = new Block(490,275,30,40);
  block5 = new Block(520,275,30,40);
  block6 = new Block(550,275,30,40);
  block7 = new Block(580,275,30,40);
  //level two
  block8 = new Block(430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);
  //level three
  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);
  //top
  block16 = new Block(490,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(790,175,30,40);
  blocks2 = new Block(820,175,30,40);
  blocks3 = new Block(850,175,30,40);
  blocks4 = new Block(880,175,30,40);
  blocks5 = new Block(910,175,30,40);
  //level two
  blocks6 = new Block(820,135,30,40);
  blocks7 = new Block(850,135,30,40);
  blocks8 = new Block(880,135,30,40);
  //top
  blocks9 = new Block(850,95,30,40);

  polygon = new Polygon(150,200,30,30);

  launcher = new Slingshot(polygon.body,{x:150, y:250})

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");

  textSize(30);
  fill(1000,0,1000)
  textFont("ArialBlack")
  textStyle(BOLD)
  text("Press Space to get a second Chance to Play!!",30 ,120);
  textSize(35)
  fill("white")
  textFont("Algerian")
  textStyle(BOLDITALIC)
  text("Tower Seidge - 2",30,60)
  

  ground.display();
  stand1.display();
  stand2.display(); 
  
  
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  polygon.display();

  launcher.display();
  strokeWeight(2);
  stroke(15);
   blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
 

}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:250})
    launcher.attach(polygon.body);

  }

}
