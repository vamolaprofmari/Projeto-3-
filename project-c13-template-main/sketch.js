var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

rabbit.x = World.mouseX;

function createApples()
{
apple = createSprite (ramdom(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY =3;
apple.lifetime = 150;
}

function createOrange()
{
orangeL = createSprite (ramdom(50,350),40,10,10);
orangeL.addImage(appleImg);
orangeL.scale=0.08;
orangeL.velocityY =3;
orangeL.lifetime = 150;
}

function createRed()
{
redL = createSprite (ramdom(50,350),40,10,10);
redL.addImage(appleImg);
redL.scale=0.06;
redL.velocityY =3;
redL.lifetime = 150;
}


var select_ballon = Math.round (ramdom(1,4));
  
  if (World.frameCount % 80 == 0) 
  {
   if(select_sprites == 1)
   {
   createApples();
  }
  
  else if (select_sprites == 2) 
  {
    createOrange();
  }
  
  else
  {
    createRed();
  }

  }




function draw() 
{
  
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);


  drawSprites();
  
}
