# 🧨 Graduate Showcase 2024

## 🚀 a set of interactive ideas for the Design School Showcase.

This repo contains web based code, experimenting with different technology.

Folders are structured by tecnology and then by the code system used. For instance:

- machine learning
  - ml5js
    - easyPoseNet - a highly simplified posenet example that only tracks one person
      - [code](/machine-learning/ml5js/easyposenet/)
      - [web](https://lab.amcc.io/graduate-showcase-2024/machine-learning/ml5js/easyposenet/)
    - ml5js-posenet - a starting point for ml5js posenet with multiple people
      - [code](/machine-learning/ml5js/ml5js-posenet/)
      - [web](https://lab.amcc.io/graduate-showcase-2024/machine-learning/ml5js/ml5js-posenet/)
    - baseic-ml5js-posenet - as above but without the loops to track multiple people
      - [code](/machine-learning/ml5js/ml5js-posenet/)
      - [web](https://lab.amcc.io/graduate-showcase-2024/machine-learning/ml5js/ml5js-posenet/)
  - mediapipe
    - mediaPipe starter with smoothing -[code](/machine-learning/mediapipe/poseLandmarks/) -[web](https://lab.amcc.io/graduate-showcase-2024/machine-learning/mediapipe/poseLandmarks/)
    - mediaPipe with bezier curves
      - [code](/machine-learning/mediapipe/poseLandmarks-hand-bezier/)
      - [web](https://lab.amcc.io/graduate-showcase-2024/machine-learning/mediapipe/poseLandmarks-hand-bezier/)

Machine Learning is the tecnology used to do most AI stuff these days. _ml5js_ amd _MediaPipe_ are 2 leading ways of using machine learning to play on the web.

We are interested in body tracking, this is called pose detection, or pose landmark detection. Both _ml5js_ and _mediaPipe_ have code examples on doing body tracking on the web.
_ml5js_ has _p5js_ examples so is easier to learn, however _mediaPipe_ is better! The code isn't much different.

## 👀 reference

- machine learning to track the body
  - [ml5js pose detection](https://learn.ml5js.org/#/reference/posenet)
  - [mediaPipe pose landmark detection](https://mediapipe-studio.webapps.google.com/demo/pose_landmarker)
  - [about machine learning for tracking](https://coding.amcc.io/#machine-learning)
