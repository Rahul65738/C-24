const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world, ground;
var box1, box2, box3,box4, box5;
var pig1, pig2;
var log1,log2, log3, log4;
var bird;

function setup() {
  createCanvas(1200,400);

 engine = Engine.create();
 world = engine.world;

 ground = new Ground(600, 390, 1200, 20);

box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
box3 = new Box(700,240, 70, 70);
box4 = new Box(920, 240, 70, 70);
box5 =new Box(810, 160, 70, 70);

pig1 = new Pig(810, 320);
pig2 = new Pig(810, 220);


log1 = new Log(810, 260, 290, PI/2);
log2 = new Log(810, 180, 290, PI/2);
log3 = new Log(760, 120, 150, PI/7);
log4 = new Log(870, 120, 150, -PI/7);

bird = new Bird(100, 100);

 console.log(ground);
}

function draw() {
  background("blue");  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  log1.display();
  pig2.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
}