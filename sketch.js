const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var stone,iron,rubber;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

  stone=new Stone(300,580,60,70);
rubber=new Rubber(600,380,40);
iron=new Iron(900,580,70,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();

    
 
}