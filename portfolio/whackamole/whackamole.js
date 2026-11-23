var ballx = 300;
var bally = 300;
var ballSize = 80;
var score =0;
var gameState= "Title";
var img;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
soundFormats('mp3');
  bgMusic = loadSound('https://prodgreyy06.github.io/portfolio/funnel cake 157bpm @Greyy.mp3');
  img = loadImage('https://prodgreyy06.github.io/portfolio/gameimages/mole2.png');
    img2 = loadImage('https://prodgreyy06.github.io/portfolio/gameimages/guacamole.jpg');
      img3 = loadImage('https://prodgreyy06.github.io/portfolio/gameimages/mallet.png');
        img4 = loadImage('https://prodgreyy06.github.io/portfolio/gameimages/grass2.jpg');
        img5 = loadImage('https://prodgreyy06.github.io/portfolio/gameimages/mole3.png');
        img6 = loadImage('https://prodgreyy06.github.io/portfolio/gameimages/mole4.png');
 //   img = loadImage('https://dma-git.github.io/images/kitty.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  bgMusic.setVolume(0.5);
} // end setup


function draw() {
  background(img4);
  if (gameState=="Title"){
  titleScreen();
  } 
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
    if (gameState=="win"){
   winGame(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw

function titleScreen(){
  text("Welcome to Whack-A-Mole!! Whack the mole to begin!", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>0){
// call level 2
 // fill(random(255));
 gameState= "L1";
  }
  

  line(ballx, bally, mouseX, mouseY);
  image(img, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
   image(img3, mouseX -30, mouseY -30, 60, 60);
  
}


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  

  line(ballx, bally, mouseX, mouseY);
  image(img, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
   image(img3, mouseX -30, mouseY -30, 60, 60);
  
} // end level one

function levelTwo(){
  background(img4);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
image(img5, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  image(img3, mouseX -30, mouseY -30, 60, 60);
} // end level two

function levelThree(){
    background(img4);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>49){
// level 4
   gameState = "win";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
//  ellipse(ballx, bally, ballSize, ballSize);
  image(img6, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
    image(img3, mouseX -30, mouseY -30, 60, 60);
  
} // end level three

function winGame(){
background(img2);
  
    text(("You are a winner!! You won some g-whackamole!"), width/2, 60);
    
} // end winGame  
