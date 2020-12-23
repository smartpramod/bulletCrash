var wall1, wall2,wall3,wall4;
var bullet1,bullet2,bullet3,bullet4
var boundary1,boundary2,boundary3
function setup() {
  createCanvas(1350,1000);
  
  //bullets;
  bullet1=createSprite(100,100,50,5);
  bullet1.shapeColor="grey";

  bullet2=createSprite(100,360,50,5);
  bullet2.shapeColor="grey";

  bullet3=createSprite(100,620,50,5);
  bullet3.shapeColor="grey";
  
  bullet4=createSprite(100,900,50,5);
  bullet4.shapeColor="grey";
  
  //walls;
  wall1=createSprite(1250,100,50,140);
  wall1.shapeColor="grey";

  wall2=createSprite(1250,360,50,140);
  wall2.shapeColor="grey";

  wall3=createSprite(1250,620,50,140);
  wall3.shapeColor="grey";
  
  wall4=createSprite(1250,900,50,140);
  wall4.shapeColor="grey";

  //boundaries;
  boundary1=createSprite(600,250,1500,10);
  boundary1.shapeColor="black";

  boundary2=createSprite(600,500,1500,10);
  boundary2.shapeColor="black";
  
  boundary3=createSprite(600,750,1500,10);
  boundary3.shapeColor="black";


}

function draw() {
  background("cyan");  
 bullet1.velocityX=7;
 bullet2.velocityX=7;
 bullet3.velocityX=7;
 bullet4.velocityX=7;

 if(bullet1&&bullet2&&bullet3&&bullet4.isTouching(wall1&&wall2&&wall3&&wall4))
 {
  wall1.shapeColor="red";
  wall2.shapeColor="red";
  wall3.shapeColor="red";
  wall4.shapeColor="red";
}
 
  bullet1.collide(wall1);
  bullet2.collide(wall2);
  bullet3.collide(wall3);
  bullet4.collide(wall4);


  drawSprites();
}
