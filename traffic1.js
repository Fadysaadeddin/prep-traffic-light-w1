//                                            traffic light  1 
"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 6) {
  const currentState = trafficLight.state;
  if(trafficLight.state === "green"){
    trafficLight.state = "orange";
  }else if ( trafficLight.state === "orange"){
    trafficLight.state = "red";
  }else {
    trafficLight.state = "green"
  }
 rotations++
  console.log("The traffic light is on", currentState);
  }
 

  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to rotations and turn it green


// /**
//  * The output should be:

// The traffic light is on green
// The traffic light is on orange
// The traffic light is on red
// The traffic light is on green
// The traffic light is on orange
// The traffic light is on red

// */
