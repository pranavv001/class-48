const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box;
var ground, ground2, ground3, ground4, obstacle, obstacle2, obstacles;
var c1, c2, c3;
var level = 1
var ball
var goal
var level1,level2,level3,level4
var coinImg,coin
var score = 0
var isVertical = true
var resetbutton
var jumpsound, coinsound

var engine, world, body;
var canJump;

var charges;

function preload() {
  coinImg = loadImage("coin.png")
  jumpsound = loadSound("jump.wav")
  coinsound = loadSound("coin.wav")

}

function setup() {
  //create the canvas
  createCanvas(1200,250);
  resetbutton = createImg("reset.png")
  resetbutton.position(60,35)
  resetbutton.size(90,90)
  resetbutton.mouseClicked(reload)
  //setup
  engine = Engine.create();
  world = engine.world;
 
  //create boxes
  ball = new Ball(100, 225, 25, 25);
  coin = createSprite(1100,185)
  coin.addImage(coinImg)
  coin.scale = 0.3

  //create the floor
  wall1 = new Ground(600, 240, 1200,20);
  wall2 = new Ground(600, 10, 1200,20);
  wall3 = new Ground(10, 125, 20,400);
  wall4 = new Ground(1190, 125, 20,400);
  goal = new Goal(1100,230)
  level1 = new Level1()
  
  }



function draw() {
  //set the background
  background(50,50,55);  

  //update the engine
  Engine.update(engine);
  textSize(25)
  fill("white")
  text("score: "+score,1050,50)
  //display ground
console.log(level)
  if (level === 1) {
    level1.display()
    level1.checkCollision()
    if (dist(ball.body.position.x,ball.body.position.y,coin.x,coin.y)<40) {
      level2 = new Level2()
      level = 2
      Matter.Body.setPosition(ball.body,{x:100,y:225})
      goal.rePosition(1100,150)
      level1.remove()
      coin.y=100
      score = score+1
      coinsound.play()
    }
    
    }
    if (level === 2) {
      level2.display()
      console.log("level2")
      level2.checkCollision2()
      if (dist(ball.body.position.x,ball.body.position.y,coin.x,coin.y)<40) {
        level3 = new Level3()
        level = 3
        Matter.Body.setPosition(ball.body,{x:100,y:225})
        goal.rePosition(1100,height-50)
        level2.remove()
        coin.y=150
        score = score+1
        coinsound.play()
          }      
        }
      if (level === 3){
        level3.display()
        level3.checkCollision()
        if (dist(ball.body.position.x,ball.body.position.y,coin.x,coin.y)<40) {
          level4 = new Level4()
          level = 4
          Matter.Body.setPosition(ball.body,{x:100,y:225})
          goal.rePosition(1100,height-100)
          level3.remove()
          coin.y=100
          score = score+1
          coinsound.play()
            }  
      }
    if (level === 4) {
      level4.display()
      level4.checkCollision()
      if (dist(ball.body.position.x,ball.body.position.y,coin.x,coin.y)<40) {
        level5 = new Level5()
        level = 5
        Matter.Body.setPosition(ball.body,{x:100,y:225})
        goal.rePosition(1100,height-100)
        level4.remove()
        coin.y=100
        score = score+1
        coinsound.play()
          }  
    }
    if (level === 5) {
      level5.display()
      level5.checkCollision()
      if (dist(ball.body.position.x,ball.body.position.y,coin.x,coin.y)<40) {
        level5.remove()
        ball.remove()
        coin.destroy()
        goal.remove()
        level = 6
        score = score+1
        coinsound.play()
          }  
    }
if (level<=5) {
wall1.display()
wall2.display()
wall3.display()
wall4.display()
ball.display()
goal.display()
drawSprites()
}
if (level===6) {
  textSize(75)
  fill("red")
  text("YOU WIN!!",width/2-200,height/2)


}
}

function keyPressed(){
  jumpsound.play()
 if(keyCode === 39 ){
  ball.flingForward();
 
 }
 if(keyCode === 38 ){
  ball.flingUp();
 
 }
 if(keyCode === 37 ){
  ball.flingBack();
 
 }
 
}
function reload() {
  location.reload()
}
