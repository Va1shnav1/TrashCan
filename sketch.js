
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var ballObj;
var world;
var score=0;

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,470,width,20);
	dustbinObj=new dustbin(800,450);
	ballObj= new Paper(200, 450, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  fill(0);
  textSize(20);
  text("Please clean up", 500, 250);
  if(score===1){
	  fill("white");
	  textSize(30);
	  stroke("darkgreen");
	  strokeWeight(5);
	  background("lightgreen");
	  text("Thank you for being tidy!", 500, 200);
  }
  groundObject.display();
  dustbinObj.display();
  ballObj.display();
  

}

function keyPressed(){
	if((keyCode===UP_ARROW)){
		Matter.Body.applyForce(ballObj.body, ballObj.body.position, {x:30, y:-25});
		score=score+1;
	}	
}