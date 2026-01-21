nosex = 0;
nosey = 0;
leftwrist = 0;
rightwrist = 0;
difference = 0;

function setup(){
    canvas= createCanvas(500,500);
    canvas.position(650,150);
    video = createCapture(VIDEO);
    video.position(5,150);
    posenet = ml5.poseNet(video, Modelloaded);
    posenet.on('pose', gotPoses);
}

function Modelloaded(){
    console.log("Modelloaded yay!");
}

function draw(){
    background('black');
    fill('white');
    textSize(difference);
    text('AI', 50, 400);
    document.getElementById("span_tag").innerHTML = "height and width of square = " + difference + " px";
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    leftwrist = results[0].pose.leftWrist.x;
    rightwrist = results[0].pose.rightWrist.x;
    difference = floor(leftwrist-rightwrist);
    }

    }

