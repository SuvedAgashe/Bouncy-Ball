const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
function setup() {
  createCanvas(800,400);
  myEngine= Engine.create()
  myWorld =myEngine.world;
  var options= {
    isStatic :true
  }
  ground= Bodies.rectangle(200,380,800,20,options)
  World.add(myWorld,ground)
  console.log(ground)
  var boptions= {   //JSON  JavaScript Object Notation
    restitution:0.8
  }
  ball = Bodies.circle(100,100,30,boptions);
  World.add(myWorld,ball)
box =Bodies.rectangle(200,200,40,40)
World.add(myWorld,box)

}

function draw() {
  Engine.update(myEngine)
  background(0);  
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,30,30)
  rectMode(CENTER)
  rect(box.position.x,box.position.y,40,40)
  drawSprites();
}