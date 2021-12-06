var spiderMan, spiderManImage, spiderManFighting1, spiderManFighting2
var venom, venomImage
var building
var invisibleGround
var gameState = "swinging"

function preload()
{
spiderManImage = loadImage("Images/Spiderman.png")
spiderManFighting = loadImage("Images/Spiderman fighting2.png")
venomImage = loadImage("Images/Venom.png")
building = loadImage("Images/Buildings.jpeg")

}
function setup() 
{
  createCanvas(displayWidth - 50, displayHeight - 150);
  spiderMan = createSprite(150, 320);
  spiderMan.frameDelay = 0.2
  spiderMan.addImage(spiderManImage)
  spiderMan.scale = 0.2
  //spiderMan.debug = true
  spiderMan.setCollider("circle", 0,0,200)

  venom = createSprite(1200, 460)
  venom.addImage(venomImage)
  venom.scale = 0.3
  //venom.debug = true
  venom.setCollider("circle", 0,0,200)

  spiderMan.addAnimation("fighting", spiderManFighting)
}

function draw() {
  background(building);

  if(gameState === "swinging")
  {
    if(keyDown(UP_ARROW))
  {
    spiderMan.y = spiderMan.y - 5
  }

  if(keyDown(DOWN_ARROW))
  {
    spiderMan.y = spiderMan.y + 5
  }

  if(keyDown(LEFT_ARROW))
  {
    spiderMan.x = spiderMan.x - 5
  }

  if(keyDown(RIGHT_ARROW))
  {
    spiderMan.x = spiderMan.x + 5
  }

  if(spiderMan.isTouching(venom))
  {
    gameState = "fight"
  }
}

else if(gameState === "fight")
{
  spiderMan.collide(venom)
  var button = createImg("Images/SpidermanButton.png")
  button.position(displayWidth - 900, 50)
  button.size(200,200)
  button.mouseClicked(attack)
}

  drawSprites();
}

function attack()
{
  spiderMan.changeImage("fighting")
  console.log("fight")
  spiderMan.scale = 0.9
}