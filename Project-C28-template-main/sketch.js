
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy,elas;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(990,110,30);
	mango3=new mango(1170,120,30);
	mango4=new mango(1200,200,30);
	mango5=new mango(1100,200,30);
	mango6=new mango(920,200,30);
	mango7=new mango(980,200,30);

  stoneObj=new stone(240,376,20);

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);

  elasticObj = new Elastic(stoneObj.body,{x:240, y:430});

	
	Engine.run(engine);

}

function draw() {

  background(230);

  text("Press Space To Get A Second Chance To PLAY!!",60,50)
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stoneObj.display();

  groundObject.display();

  elasticObj.display();

  collision(stoneObj,mango1);
  collision(stoneObj,mango2);
  collision(stoneObj,mango3);
  collision(stoneObj,mango4);
  collision(stoneObj,mango5);
  collision(stoneObj,mango6);
  collision(stoneObj,mango7);
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  elasticObj.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body, {x:240, y:430});
      elasticObj.attach(stoneObj.body);
  }
}


function collision(lstone,lmango){
     mangoBodyPosition=lmango.body.position
     stoneBodyPosition=lstone.body.position

     var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

     if(distance<=lmango.r+lstone.r){
       Matter.Body.setStatic(lmango.body,false)
     }

}

