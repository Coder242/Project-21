var wall,bullet;
var speed,weight;
var damage;
var thickness;

function setup() {
  createCanvas(1300,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);

  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall.shapeColor = "yellow";

}

function draw() {

  background("black");  

    if(bullet.x - wall.x < wall.width/2 + bullet.width/2 &&
       wall.x - bullet.x < wall.width/2 + bullet.width/2 &&
       bullet.y - wall.y < wall.height/2 + bullet.height/2 &&
       wall.y - bullet.y < wall.height/2 + bullet.height/2 &&
       damage < 10)
       {
        
        bullet.velocityX = 0;
        wall.shapeColor="green";

    }
  
    if(bullet.x - wall.x < wall.width/2 + bullet.width/2 &&
      wall.x - bullet.x < wall.width/2 + bullet.width/2 &&
      bullet.y - wall.y < wall.height/2 + bullet.height/2 &&
      wall.y - bullet.y < wall.height/2 + bullet.height/2 &&
       damage === 10 || damage > 10)
       {
        
        bullet.velocityX = 0;
        wall.shapeColor="red";
        
    }

    drawSprites();

}