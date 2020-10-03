
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob1 = createSprite(340,300,20,20);
    Bob1.shapeColor = "purple";
	Bob2 = createSprite(370,300,20,20);
	Bob2.shapeColor = "purple";
	Bob3 = createSprite(400,300,20,20);
	Bob3.shapeColor = "purple";
	Bob4 = createSprite(430,300,20,20);
	Bob4.shapeColor = "purple";
	Bob5 = createSprite(460,300,20,20);
	Bob5.shapeColor = "purple";
	 
	roof = createSprite(400,655,800,10);
	roof.shapeColor = "black"; 
	
	rec1 = createSprite(400,200,200,20);
	rec1.shapeColor = "black"

	rope1 = createSprite(340,250,5,80);
	rope2 = createSprite(370,250,5,80);
	rope3 = createSprite(400,250,5,80);
	rope4 = createSprite(430,250,5,80);
	rope5 = createSprite(460,250,5,80);


	Engine.run(engine);
  
} 


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paperObject.body,paperObject.body.positon,{x:85,y:-85}) 
	} 
}