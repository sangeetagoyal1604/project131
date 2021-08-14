function preload() {
    picture1=loadImage('almirah.jpg');
    picture2=loadImage('bed.jpg');
    picture3=loadImage('chair.jpg');
    picture4=loadImage('slippers.jpg');
    picture5=loadImage('tv.jpg');


}
function setup() {
  canvas=  createCanvas(500,350);
canvas.center();
}
function draw() {
    image(picture1,0,0,500,350); 
    fill("red");
text("almirah",70,100);
noFill();
stroke("orange");
rect(100,100,350,250);

image(picture2,0,0,500,450); 
    fill("red");
text("bed",70,100);
noFill();
stroke("orange");
rect(100,100,350,250);

image(picture3,0,0,500,450); 
    fill("red");
text("chair",70,100);
noFill();
stroke("orange");
rect(100,100,350,250);

image(picture4,0,0,500,450); 
    fill("red");
text("slippers",70,100);
noFill();
stroke("orange");
rect(100,100,350,250);

image(picture5,0,0,500,450); 
    fill("red");
text("televison",70,100);
noFill();
stroke("orange");
rect(100,100,350,250);
}

function almirah() {
 window.location('almirah');
}
