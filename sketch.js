
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;

var ground, tree, boy, boyImg, stone, mango1, mango2, mango3, mango4, silngShot;

function preload(){
	boyImg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200, 400, 100, 200);
	boy.addImage(boyImg);
	boy.scale = 0.15;
	
	//Create the Bodies Here.
	ground = new Ground(500, 490, 1000, 20);
	tree = new Tree(800, 290, 300, 400);
	stone = new Stone(100, 300, 30, 30);
	mango1 = new Mango(800, 250, 30);
	mango2 = new Mango(750, 200, 30);
	mango3 = new Mango(850, 200, 30);
	mango4 = new Mango(810, 175, 30);
	slingShot = new SlingShot(stone.body, {x: 100, y: 300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  slingShot.display();

  isTouching(stone, mango1);
  isTouching(stone, mango2);
  isTouching(stone, mango3);
  isTouching(stone, mango4);

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
  }
  function mouseReleased(){
	slingShot.fly();
  }
  function isTouching(obj1, obj2){
	if(obj1.x - obj2.x < obj2.width/2 + obj1.width/2 &&
	  obj2.x - obj1.x < obj2.width/2 + obj1.width/2 &&
	  obj2.y - obj1.y < obj1.height/2 + obj2.height/2 &&
	  obj1.y - obj2.y < obj1.height/2 + obj2.height/2){
	  
		Body.setStatic(obj2.body, false)
	}
	else{
	  return false;
	}
  }
  function keyPressed(){
	if(keyCode === 32){
		Body.setPosition(stone.body, {x: 100, y: 300});
		slingShot.attach(stone.body);
	}
  }