// You could have multiple flags like: start, launch to indicate the state of the game.
const { Engine, World, Bodies, Body, Mouse, MouseConstraint,
     Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var ground;
var semiCircle, string;
var base, base2, base3;
var barrel;
var ball;
/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function preload(){
    backgroundImg = loadImage("bg.png");
}

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Floor(400,380,400,40);
    
    semiCircle = new Bob(400,215,40);
    
    base = new Floor(400,350,135,20);
    base2 = new Floor(400,315,100,50);
    base3 = new Floor(400,270,80,40);

    barrel = new Base(180,10,30,100);
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(backgroundImg);
    Engine.update(engine);

      if(this.barrel.y > 200){
    Matter.Body.setPosition(barrel.body,{x:180,y:10});
  }

    ground.display();
    base.display();
    base2.display();
    base3.display();
    semiCircle.display();
    barrel.display();
    
    angleMode(DEGREES); 
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  translate(width / 2, height / 2);
  push();
  rotate(a);
  rect(20, 5, 100, 30);
  pop();



  console.log(this.barrel.y);
}

function keyPressed(){
    if(keyCode === 32){
       var ball = new canonBall(200,10,40);
       ball.display();
    }
}