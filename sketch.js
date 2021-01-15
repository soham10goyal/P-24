
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var bin1,bin2,bin3;
var bg;

function preload() {
	bg = loadImage("clean.jpg");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball = new paperBall();

	ground = Bodies.rectangle(width/2,600,800,20,{isStatic: true});
	World.add(world,ground);

	bin1 = new dustbin(700,580,100,20);
	bin2 = new dustbin(640,540,20,100);
	bin3 = new dustbin(760,540,20,100);

	Engine.run(engine);
	//console.log(ball);
}


function draw() {
	rectMode(CENTER);
	background(0);

	if(ball.body.position.x>630 && ball.body.position.y>490) {
		textSize(30);
		fill(0);
		textStyle(BOLD);
		background(bg);

		text("YAY! Now you know how to keep your city clean!",50,350);
	}
	
	ball.display();
	
	fill(255);
	rect(ground.position.x,ground.position.y,800,20);

	bin1.display();
	bin2.display();
	bin3.display();

	drawSprites();

	if(keyDown(UP_ARROW) && ball.body.position.y>570) {
		Body.applyForce(ball.body,ball.body.position,{x:60,y:-60})
	}

	Engine.update(engine);
}

