
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;

var roof;
var rope,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   fill ("red"); 
   bob1= new Bob(200,500,50);
  
    bob2 = new Bob(300,500,50);

    bob3 = new Bob(400,500,50);
    bob4 = new Bob(500,500,50);
    bob5 = new Bob(600,500,50);
    
    roof=createSprite(400,200,500,50);
     roofBody=Bodies.rectangle(400,200,500,50);
     
    
     rope=new Rope(bob1.body,roofBody);
     rope2=new Rope(bob2.body,roofBody);
     rope3=new Rope(bob3.body,roofBody);
     rope4=new Rope(bob4.body,roofBody);
     rope5=new Rope(bob5.body,roofBody);
  Engine.run(engine);
  // rope= new Rope()
  
}


function draw() {
  
  background(255);
  // rope.display();
  Engine.update(engine);
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-22,y:22})
  }
}


