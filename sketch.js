//nameSpace
const Engine = Matter.Engine; //universe
const World = Matter.World;//earth
const Bodies = Matter.Bodies;//any living or non living thing(object)

var myengine,myworld
var box
var ground
var ball

function setup() {
  createCanvas(800,600);
  //created the engine , created the world using the engine
  myengine = Engine.create()
  myworld = myengine.world

  //made an BODIES object and added it to the world
//options to add extra properties to the box  
var options = {
    isStatic : false,
    restitution : 1
  }
  box = Bodies.rectangle(200,200,50,50,options)
  World.add(myworld,box)

  console.log(box)
  console.log(box.position)
  console.log(box.position.x)
//ground

var Goption={
   isStatic:true                                                        
}

ground=Bodies.rectangle(width/2,height-20,width,20,Goption)
World.add(myworld,ground)

//ball

var boption={
  isStatic:false,
restitution:1.4
}
ball=Bodies.circle(400,200,50,boption)
World.add(myworld,ball)
}

function draw() {
  background("lightgreen");  
//to update the engine as everything in world is changine
  Engine.update(myengine)


  rectMode(CENTER)
  //representation of the physice object
  rect(box.position.x,box.position.y,50,50)
  rect(ground.position.x,ground.position.y,width,20)
   
  ellipseMode(RADIUS)
   ellipse(ball.position.x,ball.position.y,50,50)
}





//https://brm.io/matter-js/docs/classes/World.html
//https://brm.io/matter-js/docs/classes/Bodies.html
//https://brm.io/matter-js/docs/classes/Engine.html