const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  var canvas = createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250,790,500,10);

 for(var k = 10; k <= width; k = k + 80){
  divisions.push(new Division(k, height - divisionHeight+145, 5, divisionHeight));
}

for(var p = 25; p <= width; p = p + 50){
  plinkos.push(new Plinko(p, 270, 10));
}

for(var f = 50; f <= width-20; f = f + 50){
  plinkos.push(new Plinko(f, 200, 10));
}

for(var a = 25; a <= width; a = a + 50){
  plinkos.push(new Plinko(a, 410, 10));
}

for(var b = 50; b <= width-20; b = b + 50){
  plinkos.push(new Plinko(b, 340, 10));
}



 
}
function draw() {
  background("black");

  Engine.update(engine);

  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  
  }
  
 
 for(var i = 0; i<divisions.length; i++){
   divisions[i].display();
 }

 for(var l = 0; l<plinkos.length; l++){
  plinkos[l].display();
}

for(var u = 0; u<plinkos.length; u++){
  plinkos[u].display();
}

for(var o = 0; o<plinkos.length; o++){
  plinkos[o].display();
}

for(var g = 0; g<plinkos.length; g++){
  plinkos[g].display();
}

for(var v = 0; v<particles.length; v++){
  particles[v].display();
}



  }
 
