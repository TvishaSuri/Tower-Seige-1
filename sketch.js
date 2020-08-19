const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
paper=new Paper(200,450,40)
ground= new Ground(800,670,1600,20)
	//Create the Bodies Here.
block1=new block(300,235,30,40)
block2=new block(360,230,30,40)
block3=new block(390,250,30,40)
block4=new block(420,250,30,40)
dustbin3= new Dustbin(1100,580,30,180)
	Engine.run(engine);
	slingshot = new SlingShot(paper.body,{x:200, y:300});
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("white");
  
  ground.display();
  paper.display();
  dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 slingshot.display();
 image(dustbinImage, 1000,580,200,75)
}


function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

