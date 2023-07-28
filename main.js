LWristX = 0;
RWristX = 0;
Difference = 0;
textSample='And so I realized, I was consumed by the darkness of revenge, While me goal inside couldnt shine "All for one!, you say that we are the same, even so, we always have just one different, I have a burning desire TO SAVE!"';

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(60,50)
    //Created Video Capture
    canvas = createCanvas(550,450);
    canvas.position(750,75);
    //PoseNet Functions \/
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has been initialized");
}

function draw(){
 background('#cfcfcf');
 fill("#000000")
 text(textSample, 20, 30,500,450);
 textSize(floor((Difference)/2.5))
}

function gotPoses(results){
    if(results.length > 0){
        LWristX = results[0].pose.leftWrist.x;
        RWristX = results[0].pose.rightWrist.x;
        Difference = floor((LWristX-RWristX)/2);
        console.log("LeftWristX= "+LWristX+"  RightWristX= "+RWristX+"  Difference of Wrist X Coordinates = "+ Difference);
    console.log(results);
    }
    else{
        console.error("Naw hell no");
    }
}