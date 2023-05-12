mustacheX = 0
mustacheY = 0

function preload() {
clown_mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

// function setup () {
//     canvas = createCanvas(300,300)
//     canvas.center();
// }

function setup () {
    canvas = createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw () {
image(0, 0, 300, 300);
image(clown_mustache, mustacheX, mustacheY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png')
}

function gotPoses (results)
{
    if(results.length > 0 )
    {
        console.log(results);
        noseX = results[0].pose.nose.x -15; 
        noseY = results[0].pose.nose.y -15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
     
    }
}