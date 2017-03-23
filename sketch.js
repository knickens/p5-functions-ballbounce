var x = 300;
var y = 200;
var speedx = 8;
var speedy = 6;
var kiaraRed = 50;
var kiaraGreen = 255;
var kiaraBlue = 50;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    display();
    move();
    bounce();
}    
   

function display(){
   //display ball
    stroke(255);
    strokeWeight(4);
    fill(kiaraRed,kiaraGreen,kiaraBlue);
    ellipse(x, y, 50, 50);
}

function move(){
   //make ball move
    y = y + speedy;
    x = x + speedx;  
}

function bounce(){
  //ball changes direction when it hits wall
    if(x>600 || x<0){
        speedx = -speedx;
        kiaraRed = random(0,255);
        kiaraGreen = random(0,255);
        kiaraBlue = random(0,255);
    }
     if(y>400 || y<0){
        speedy = -speedy;
    }
}   
