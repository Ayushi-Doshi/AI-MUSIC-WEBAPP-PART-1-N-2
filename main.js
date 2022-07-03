hms = "";
us = "";

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
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
}