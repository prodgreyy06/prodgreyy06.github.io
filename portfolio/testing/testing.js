function setup() {
createCanvas(600, 600);
background(60);
}



function draw() {
  //hair
   fill(0, 0, 0);
ellipse(278, 200, 300, 150);

//head
 fill(125, 85, 45);
ellipse(278, 300, 250, 300);
fill(0, 0, 0);

//eyes
triangle(200, 250, 250, 250, 250, 275)
ellipse(330, 265, 40, 40);


//nose
line(278, 300, 300, 325);
line(278, 350, 300, 325);

//mouth
ellipse(278, 400, 100, 50);

//body
  // Add vertices.
  vertex(200, 450);
  vertex(150,490);
  vertex(125,550);
  vertex(110,600);
    vertex(460,600);
  vertex(445, 550);
  vertex(420,490);
  vertex(360,450);
   // Stop drawing the shape.
  endShape(CLOSE);
    // Add vertices.
 

  

  
 
   
   // Stop drawing the shape.
  endShape(CLOSE);
}
