let video;
let poseNet;
let poses = [];

// check ml5js is installed and print its version
// console.log("ml5 version:", ml5.version);

function setup() {
  createCanvas(640, 480);

  // capture the webcam and store it in 'video'
  video = createCapture(VIDEO);
  video.size(width, height);
  //hide the html video element
  video.hide();

  // detect poses with posenet
  poseNet = ml5.poseNet(video, modelReady);
  // every time new poses are detected store them in 'poses'
  poseNet.on("pose", function (results) {
    poses = results;
  });
}

function modelReady() {
  console.log("model ready");
}

function draw() {
  background(220);
  image(video, 0, 0, width, height);

  // check we have at least one pose
  // i.e. one person detected
  if (poses.length > 0) {
    for (let i = 0; i < poses.length; i++) {
      let pose = poses[i].pose;

      // each pose is one person, now you can target a specific body part like this:
      // let nose = pose.nose;

      // or you could draw the keypoints, which is an array of every part like this:
      for (let j = 0; j < pose.keypoints.length; j++) {
        let keypoint = pose.keypoints[j];
        if (keypoint.score > 0.2) {
          fill(255, 0, 0);
          noStroke();
          circle(keypoint.position.x, keypoint.position.y, 10);
        }
      }
    }
  }
}
