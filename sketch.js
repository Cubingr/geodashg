var cube,cubeImg
var ground,groundImg
var obstacles
var surfaces 
var bkground
function preload(){
cubeImg = loadImage("cube.png")
groundImg = loadImage("background.png")
}

function setup() {
 createCanvas(windowWidth, windowHeight)
 bkground=createSprite(200,200)
 bkground.addImage(groundImg)
 bkground.x=bkground.width/2
 bkground.scale=5
 bkground.velocityX=-3
    cube = createSprite(width/17,height/2.1,50,50)
    cube.x=500
    cube.addImage(cubeImg)
    cube.scale=0.2
    ground = createSprite(50,500,10000,10)
    console.log(ground.x)

}

function draw() {
 background(0)
 if(bkground.x<0){
     bkground.x=bkground.width/2
 }
 if(keyDown("space")){console.log("spacebar")
    cube.velocityY=-10
cube.rotate+=10
 }
 cube.velocityY+=0.8
 cube.collide(ground)
 drawSprites()
}