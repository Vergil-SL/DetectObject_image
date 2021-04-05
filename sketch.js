let img;
let objectDetector;

function preload() {
  img = loadImage('images/puppy.jpg');
}

function gotDetections(error, results){
  console.log(results);
  
  for(let i = 0; i < results.length; i++){
    let object = results[i];
    
    //box
    stroke(0, 255, 0);
    strokeWeight(5);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    
    //label
    noStroke();
    fill(0, 255, 0);
    textSize(30);
    text(object.label, object.x, object.y-20);
  }
}


function setup() {
  createCanvas(800, 800);
  objectDetector = ml5.objectDetector('cocossd');
  //console.log('setup completed');
  img.resize(400,400);
  image(img, 0, 0);

  objectDetector.detect(img, gotDetections);
}