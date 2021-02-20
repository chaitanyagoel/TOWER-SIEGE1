const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,block1,block3,block5,block7,block9,block11,rope;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,40);
    ground1 = new Ground(450,248,280,12);
    ground3 = new Ground(840,148,160,12);
 
block=new Block(440,220,30,45);
block1=new Block(410,220,30,45);
block3=new Block(470,220,30,45);
block5=new Block(500,220,30,45);
block7=new Block(530,220,30,45);
block9=new Block(380,220,30,45);
block11=new Block(350,220,30,45);


block13=new Block(440,175,30,45);
block15=new Block(470,175,30,45);
block17=new Block(380,175,30,45);
block19=new Block(500,175,30,45);
block21=new Block(410,175,30,45);


block23=new Block(440,130,30,45);
block25=new Block(470,130,30,45);
block27=new Block(410,130,30,45);

block29=new Block(440,85,30,45);

block31=new Block(800,120,30,45);
block33=new Block(830,120,30,45);
block35=new Block(860,120,30,45);
block37=new Block(890,120,30,45);

block39=new Block(860,75,30,45);
block41=new Block(830,75,30,45);

block43=new Block(845,30,30,45);

polygon=new Polygon(200,250);


rope= new Rope(polygon.body,{x: 200, y: 200});


}
function draw(){
  
 Engine.update(engine) ;
   
background("brown")
ground.display();
ground1.display();
ground3.display();

fill("violet");
block.display();
block1.display();
block3.display();
block5.display();
block7.display();
block11.display();
block9.display();
block33.display();
block35.display();
block37.display();
block31.display();
block43.display();
fill("blue");

block13.display();
block15.display();
block17.display();
block19.display();
block21.display();
fill("green");

block23.display();
block25.display();
block27.display();
fill("pink");

block29.display();
block39.display();
block41.display();

rope.display();
polygon.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX , y:mouseY});
}


function mouseReleased(){
    rope.fly();
}