import React, { useState, useEffect } from "react";

import {
  Container,
  TrafficBox,
  Light,
  PedestrianBox,
  PedestrianInsideBox,
  Walk,
  Wait,
  Stop
} from "./styles";

const App = () => {
  const [red, setRed] = useState(true);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);
  const [timer, setTimer] = useState(0);

  // This effect handles the main traffic lights and sets the times for the pedestrian lights
  useEffect(() => {
    // Empty variable to store the time for each colour
    let time;
    // Simple destructuring to allow easy change of times
    const [redTime, yellowTime, greenTime] = [15, 5, 10];

    if (red) {
      time = redTime * 1000;
      setTimer(redTime);
    }

    if (yellow) {
      time = yellowTime * 1000;
    }

    if (green) {
      time = greenTime * 1000;
      setTimer(yellowTime + greenTime);
    }

    const trafficInterval = setInterval(() => {
      if (red) {
        setRed(!red);
        setGreen(!green);
      }

      if (yellow) {
        setYellow(!yellow);
        setRed(!red);
      }

      if (green) {
        setGreen(!green);
        setYellow(!yellow);
      }
    }, time);

    return () => {
      clearInterval(trafficInterval);
    };
  }, [green, red, yellow]);

  // This effect handles the pedestrian timer
  useEffect(() => {
    if (!timer) return;

    const timerInterval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer]);

  return (
    <Container>
      <TrafficBox>
        <Light on={red ? "red" : "black"} />
        <Light on={yellow ? "yellow" : "black"} />
        <Light on={green ? "green" : "black"} />
      </TrafficBox>
      <PedestrianBox>
        <PedestrianInsideBox>
          {red && <Stop />}
          {yellow && <Wait />}
          {green && <Walk />}
        </PedestrianInsideBox>
        <PedestrianInsideBox>{timer}</PedestrianInsideBox>
      </PedestrianBox>
    </Container>
  );
};

export default App;
