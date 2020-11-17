var bullet,wall
var speed,weight,thickness
function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50, 200, 150, 30);
  wall=createSprite(1200,200,thickness,height/2)
  bullet.shapeColor=color(255,255,255)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0,0,0);  
  bullet.velocityX=speed
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness
   if(damage>10){
      wall.shapeColor="red"
    }
   else{
     wall.shapeColor="green"
   }
  }
  drawSprites();
}

function hasCollided(){
  bulletRightEdge=bullet.x+bullet.width
  wallLeftEdge=wall.x+wall.height
  if(bulletRightEdge>=wallLeftEdge ){
    return true
  }
    else{
      return false
    }
   
    
  
}