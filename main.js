hms = "";
us = "";
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0 , 0, 600, 500);
}
function preload() {
    hms = loadSound("Hey-Mama(PagalWorld).mp3");
    us = loadSong("Unstoppable(PagalWorld).mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log('PoseNet Is Intialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + lwx + "leftWristY = "+ lwy);
    
    rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rwx + "rightWristY = "+ rwy);
    }
    }