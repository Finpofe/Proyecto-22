var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairySound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	fairySound = loadSound("JoyMusic.mp3");

	fairy = createSprite(100,550);
	fairy.addAnimation("hada",fairyImg);
	fairy.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairy.velocityX = 0;

  if(keyDown("RIGHT_ARROW")){
	fairy.velocityX = 5;
}

if(keyDown("LEFT_ARROW")){
	fairy.velocityX = -5;
}

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

if(star.y > 550 && starBody.position.y > 550){
Matter.Body.setStatic(starBody,true);
}
	
	drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	
}
