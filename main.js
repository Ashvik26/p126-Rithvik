song1="";
song2="";
function preload(){
song1=loadSound("song1.mp3");
song2=loadSound("song2.mp3");
}
function setup(){
canvas=createCanvas(600,600);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotResult);
}
function draw(){
image(video, 0,0,600,600);
}
function modelLoaded(){
console.log("poseNet is initalized");
}
function gotResult(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWrist="+leftWristX+"leftWrist="+leftWristY);

}
}