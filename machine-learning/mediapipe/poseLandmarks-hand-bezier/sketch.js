// HOW TO USE
// predictWebcam(video) will start predicting mediaPipe.landmarks

// pass a video MediaElement using createCapture
// make sure to call predictWebcam as a callback to createCapture
// this ensures the video is ready

// parts index:
// https://developers.google.com/mediapipe/solutions/vision/pose_landmarker/index

let capture;
let confidence = 0.0;
let yOff = 0;

// lerping (i.e. smoothing the landmarks)
let lerpRate = 0.3;
let madeClone = false;
let lerpLandmarks;

function setup() {
  createCanvas(windowWidth, windowHeight);
  captureWebcam();
}

function draw() {
  background(255);
  lerpPositions();

  // draw the webcam
  // flip the webcam image so it looks like a mirror
  push();
  scale(-1, 1); // mirror webcam

  image(capture, -capture.width, 0); // draw webcam
  scale(-1, 1); // unset mirror
  pop();

  // mediaPipe.landmarks contains an array of people
  if (mediaPipe.landmarks.length > 0) {
    // l[start].x = simpLerp(l[start].x, p[start].x, lerpRate);
    mediaPipe.landmarks.forEach((person, personIndex) => {
      // sometimes we don't have a person for a bit, if not then return
      // each person contains an array of positions of each body part

      const lPerson = lerpLandmarks[personIndex];
      // make beziers
      noFill();

      let strokeWeightVal = height / 6;
      let lineStart = [strokeWeightVal, height / 2];
      let lineEnd = [width - strokeWeightVal, height / 2];

      stroke("black");
      strokeWeight(strokeWeightVal);

      // the ... spreads the arary into individual arguments
      // i.e. ...lineStart is the same as: lineStart[0], lineStart[1]
      bezier(
        ...lineStart,
        lPerson[19].x,
        lPerson[19].y,
        lPerson[20].x,
        lPerson[20].y,
        ...lineEnd
      );

      stroke("cyan");
      strokeWeight(3);

      circle(lPerson[19].x, lPerson[19].y, 20);
      circle(lPerson[20].x, lPerson[20].y, 20);

      line(...lineStart, lPerson[19].x, lPerson[19].y);
      line(...lineEnd, lPerson[20].x, lPerson[20].y);

      bezier(
        ...lineStart,
        lPerson[19].x,
        lPerson[19].y,
        lPerson[20].x,
        lPerson[20].y,
        ...lineEnd
      );

      person.forEach((part, partIndex) => {
        // get the lerped position for detected body parts
        const x = lerpLandmarks[personIndex][partIndex].x;
        const y = lerpLandmarks[personIndex][partIndex].y;

        // optionally draw the circles on every part
        circle(x, y, 10);
      });
    });
  }
}

// create and set lerp positions
// this function creates a deep clone of the mediaPipe.landmarks if it doesn't exist already
// then it lerps the positions of the landmarks
// lerp works by moving a percentage of the way from one position to another
function lerpPositions(options = { realPostions: true, flipped: true }) {
  // check we're getting landmarks
  // we're probably already checking, but just in case...
  if (mediaPipe.landmarks.length > 0) {
    if (!madeClone) {
      // deep clone the mediaPipe.landmarks
      lerpLandmarks = JSON.parse(JSON.stringify(mediaPipe.landmarks));
      madeClone = true;
    }
  }

  // realpositions variable controls whether we set the capture width and height or not
  // by default we make landmarks relative to the capture width and height
  // if false it will be 0 to 1

  let lerpWidth = options.realPostions ? capture.width : 1;
  let lerpHeight = options.realPostions ? capture.height : 1;

  mediaPipe.landmarks.forEach((person, personIndex) => {
    let p = mediaPipe.landmarks[personIndex];
    let l = lerpLandmarks[personIndex];
    // sometimes we don't have a person for a bit, if not then return
    if (!l || !p) return;
    // each person contains an array of positions of each body part
    person.forEach((part, partIndex) => {
      // get the lerped position for detected body parts
      if (options.flipped) {
        l[partIndex].x = lerp(
          l[partIndex].x,
          capture.width - part.x * lerpWidth,
          lerpRate
        );
      } else {
        l[partIndex].x = lerp(l[partIndex].x, part.x * lerpWidth, lerpRate);
      }
      l[partIndex].y = lerp(l[partIndex].y, part.y * lerpHeight, lerpRate);
      // draw a circle on each body part
    });
  });
}

// this function helps to captuer the webcam in a way that ensure video is loaded
// before we start predicting mediaPipe.landmarks. Createcapture has a callback which is
// only called when the video is correctly loaded. At that point we set the dimensions
// and start predicting mediaPipe.landmarks

// N.B. the video is flipped horizontally in the CSS

function captureWebcam() {
  capture = createCapture(
    {
      audio: false,
      video: {
        facingMode: "user",
      },
    },
    function (e) {
      captureEvent = e;
      // do things when video ready
      // until then, the video element will have no dimensions, or default 640x480
      setCameraDimensions();
      mediaPipe.predictWebcam(capture);
    }
  );
  capture.elt.setAttribute("playsinline", "");
  capture.hide();
}

// this function sets the dimensions of the video element to match the
// dimensions of the camera. This is important because the camera may have
// different dimensions than the default video element
function setCameraDimensions() {
  // resize the capture to fit the canvas depending on whether
  // the camera is landscape or portrait

  if (capture.width > capture.height) {
    capture.size(width, (capture.height * width) / capture.width);
  } else {
    capture.size((capture.height * height) / capture.height, height);
  }
}

// resize the canvas when the window is resized
// also reset the camera dimensions
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setCameraDimensions();
}
