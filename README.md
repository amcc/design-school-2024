# 🧨 Graduate Showcase 2024

## 🚀 a set of interactive ideas for the Design School Showcase.

This repo contains web based code, experimenting with different technology.

Folders are structured by the technology they use. Both mediaPipe and ml5js do similar things here. Both have the ability to track bodies with a system called poseNet. ml5js has more documentation for usage with p5js, however mediaPipe is much better at doing accurate tracking. Below the bezier example uses mediaPipe, its a bit more advanced, but worth it.

- mediapipe
  - mediaPipe starter with smoothing
    - [code](https://github.com/amcc/graduate-showcase-2024/blob/main/machine-learning/mediapipe/poseLandmarks/)
    - [web](https://lab.amcc.io/graduate-showcase-2024/machine-learning/mediapipe/poseLandmarks/)
  - mediaPipe with bezier curves
    - [code](https://github.com/amcc/graduate-showcase-2024/blob/main/machine-learning/mediapipe/poseLandmarks-hand-bezier/)
    - [web](https://lab.amcc.io/graduate-showcase-2024/machine-learning/mediapipe/poseLandmarks-hand-bezier/)
- ml5js
  - easyPoseNet - a highly simplified posenet example that only tracks one person
    - [code](https://github.com/amcc/graduate-showcase-2024/blob/main/machine-learning/ml5js/easyposenet/)
    - [web](https://lab.amcc.io/graduate-showcase-2024/machine-learning/ml5js/easyposenet/)
  - ml5js-posenet - a starting point for ml5js posenet with multiple people
    - [code](https://github.com/amcc/graduate-showcase-2024/blob/main/machine-learning/ml5js/ml5js-posenet/)
    - [web](https://lab.amcc.io/graduate-showcase-2024/machine-learning/ml5js/ml5js-posenet/)
  - baseic-ml5js-posenet - as above but without the loops to track multiple people
    - [code](https://github.com/amcc/graduate-showcase-2024/blob/main/machine-learning/ml5js/ml5js-posenet/)
    - [web](https://lab.amcc.io/graduate-showcase-2024/machine-learning/ml5js/ml5js-posenet/)

Machine Learning is the tecnology used to do most AI stuff these days. _ml5js_ amd _MediaPipe_ are 2 leading ways of using machine learning to play on the web.

We are interested in body tracking, this is called pose detection, or pose landmark detection. Both _ml5js_ and _mediaPipe_ have code examples on doing body tracking on the web.
_ml5js_ has _p5js_ examples so is easier to learn, however _mediaPipe_ is better! The code isn't much different.

## 👀 reference

- machine learning to track the body
  - [ml5js pose detection](https://learn.ml5js.org/#/reference/posenet)
  - [mediaPipe pose landmark detection](https://mediapipe-studio.webapps.google.com/demo/pose_landmarker)
  - [about machine learning for tracking](https://coding.amcc.io/#machine-learning)
