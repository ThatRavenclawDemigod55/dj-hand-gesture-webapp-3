song1 = "" ;
song2 = "" ;
rightWristX = 0;
rightWristY = 0 ;
leftWristY = 0 ;
leftWristX = 0 ;

function preload() {
    song1 = loadSound("03 Spice Girls - Wannabe.mp3") ;
    song2 = loadSound("06 Queen - Another One Bites The Dust.mp3") ;


}


function setup() {
    canvas = createCanvas(500, 600) ;
    canvas.center() ;

    video = createCapture(VIDEO) ;
    video.hide() ;

    poseNet = ml5.poseNet(video, modelLoaded) ;
    poseNet.on("pose", gotPoses) ;
}

function modelLoaded() {
    console.log("poseNet is initialised") ;
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results) ;
    }

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = "+leftWristX+" and leftWristY = "+leftWristY) ;

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = "+rightWristX+" and rightWristY = "+rightWristY) ;
}


function draw() {
    image(video, 0, 0, 500, 600) ;
}

