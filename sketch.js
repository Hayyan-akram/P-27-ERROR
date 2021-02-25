
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1= new Bob(150,600,50,50);
	bobObj2= new Bob(250,600,50,50);
	bobObj3= new Bob(350,600,50,50);
	bobObj4= new Bob(450,600,50,50);
	bobObj5= new Bob(550,600,50,50);
	bobObj6= new Bob(650,600,50,50);

	roof= new Roof(400,200,800,20)

	rope1=new Rope(bobObj1.body,roof.body,-bobDiameter*2,0)
	rope2=new Rope(bobObj2.body,roof.body,-bobDiameter*2,0)
	rope3=new Rope(bobObj3.body,roof.body,-bobDiameter*2,0)
	rope4=new Rope(bobObj4.body,roof.body,-bobDiameter*2,0)
	rope5=new Rope(bobObj5.body,roof.body,-bobDiameter*2,0)
	rope6=new Rope(bobObj6.body,roof.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  bobObj6.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope1.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();

  drawSprites();
 
}



