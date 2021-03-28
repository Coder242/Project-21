var wall,bullet;
var speed,weight;
var damage;
var thickness;
var gamestate = "null";

function setup() {
  createCanvas(1300,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  damage = Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness))

  bullet = createSprite(200, 200, 100, 20);
  wall = createSprite(1200, 200, thickness, height/2);

  bullet.shapeColor = "white";
  wall.shapeColor = "yellow";

}

function draw() {

  background("black");  

  bullet.velocityX = speed;

    if(bullet.x - wall.x < wall.width/2 + bullet.width/2 &&
       wall.x - bullet.x < wall.width/2 + bullet.width/2 &&
       bullet.y - wall.y < wall.height/2 + bullet.height/2 &&
       wall.y - bullet.y < wall.height/2 + bullet.height/2 &&
       damage < 10)
       {
        
        gamestate = "green";

    }
  
    else if( (bullet.x - wall.x < wall.width/2 + bullet.width/2 &&
      wall.x - bullet.x < wall.width/2 + bullet.width/2 &&
      bullet.y - wall.y < wall.height/2 + bullet.height/2 &&
      wall.y - bullet.y < wall.height/2 + bullet.height/2) &&
       (damage === 10 || damage > 10) )
       {
        
        gamestate = "red";
        
    }

    if(gamestate === "green"){

      bullet.velocityX = 0;
      bullet.velocityY = 0;
      wall.shapeColor="green";

    }

    if(gamestate === "red"){

      bullet.velocityX = 0;
      bullet.velocityY = 0;
      wall.shapeColor="red";
      
    }

    drawSprites();

    textSize(20);
    stroke('white');
    noFill();
    text("Damage: "+damage, 100, 50)

}