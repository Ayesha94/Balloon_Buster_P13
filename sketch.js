



function preload(){
 //load your images here 
 bgImg= loadImage("background0.png");
 blueImg=loadImage("blue_balloon0.png")
 redImg=loadImage("red_balloon0.png")
 pinkImg=loadImage("pink_balloon0.png")
 greenImg=loadImage("green_balloon0.png")
  bowImg=loadImage("bow0.png")
  arrowImage=loadImage("arrow0.png")
  whoosh=loadSound("whoosh.wav")
}

function setup() {
  createCanvas(600, 600);
  bgSprite=createSprite(width/2, height/2)
  bgSprite.addImage(bgImg);
  bgSprite.scale=3;
  bgSprite.velocityX=-2
  
  score=0;

//bow sprite
bow=createSprite(width-50, height/2)
bow.addImage(bowImg)
bow.scale=1.3

arrowGroup=createGroup();
blueGroup=createGroup();
greenGroup=createGroup();
pinkGroup=createGroup();
redGroup=createGroup();

}

function draw() {
  background(0);
  drawSprites();
  bow.y=mouseY;

  if(bgSprite.x<0)
   bgSprite.x=bgSprite.width/2;
  //add code here
  if(keyDown("space"))
  {
    var temp_arrow=createArrow();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y=bow.y;
    whoosh.play();
  }
  var select_balloon=Math.round(random(1,4));

  if(frameCount%50==0)
  {
    if(select_balloon==1)
      redB();
    else if(select_balloon==2)
      pinkB();
    else if(select_balloon==3)
      greenB();
    else
      blueB();
  }
  if(arrowGroup.isTouching(redGroup))
  {
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score+=1;
  }
  if(arrowGroup.isTouching(pinkGroup))
  {
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score+=2;
  }
  if(arrowGroup.isTouching(greenGroup))
  {
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score+=3;
  }
  if(arrowGroup.isTouching(blueGroup))
  {
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score+=4;
  }
  fill("yellow")
  textSize(20)
  text("Score:"+score, width-100,20)
  
}
function pinkB()
{
  
  pinkBal=createSprite(0, Math.round(random(20, height-20)));
  pinkBal.addImage(pinkImg);
  pinkBal.scale=1.3
  pinkBal.velocityX=4;
  pinkBal.lifetime=200;
  pinkGroup.add(pinkBal)
}
function redB()
{
  redBal=createSprite(0, Math.round(random(20, height-20)));
  redBal.addImage(redImg);
  redBal.scale=0.1;
  redBal.velocityX=4;
  redBal.lifetime=200;
  redGroup.add(redBal)
}
function blueB()
{
    blueBal=createSprite(0, Math.round(random(20, height-20)));
    blueBal.addImage(blueImg);
    blueBal.scale=0.1
    blueBal.velocityX=4;
    blueBal.lifetime=200;
    blueGroup.add(blueBal)
}
function greenB()
{
  
    greenBal=createSprite(0, Math.round(random(20, height-20)));
    greenBal.addImage(greenImg);
    greenBal.scale=0.08
    greenBal.velocityX=4;
    greenBal.lifetime=200;
    greenGroup.add(greenBal)
}
function createArrow()
{
  arrow=createSprite(width-50, 100)
  arrow.velocityX=-6;
  arrow.scale=0.3;
  arrow.lifetime=200;
  arrowGroup.add(arrow);
  return arrow;
}