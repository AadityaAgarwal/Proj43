var hr,min,sec;

var scAngle,hrAngle,minAngle;

function setup() {
  createCanvas(1000,800);
  
 
  }

function draw() {
  background(0); 
  angleMode(DEGREES);

  

  hr=hour();
  min=minute();
  sec=second();

  secAngle=map(sec,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr % 12, 0,12,0,360);

  rotate(-90);
  translate(200,200);
  
  //sec hand
  push();
  rotate(secAngle);
 
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 
  //min hand
  push();
  rotate(minAngle);
 
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //hr angle
  push();
  rotate(hrAngle);
 
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);
  
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
  
  //drawSprites();
}