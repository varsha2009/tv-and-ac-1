var img ="";
var status = "";
object = [];
function preload(){
    img = loadImage("tv and ac.jpg"); 
};
function setup(){
    canvas = createCanvas(500,450);
    canvas.position(450,100)

    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "detectingObjects";
}
function modelLoaded(){
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img,getResult);
}
function getResult(error,result){
    if (error){
        console.log(error);
    }else{
        console.log(result);
        object =result;
    }
}
function draw(){
    image(img,0,0,500,450);
    if(status != ""){
        for(var i=0 ; i<object.length ; i++){
            document.getElementById("status").innerHTML = "status = Object detected"
            fill("red");
            textSize(20);  
            percent = floor(object[i].confidence*100);
            text(object[i].label + "  " + percent + "%" , object[i].x , object[i].y-10)
            noFill();
            rect(object[i].x,object[i].y,object[i].width,object[i].height) 
        }
    }
}