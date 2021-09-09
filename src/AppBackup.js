// App working with light changing at different intervals

import React, { useState, useEffect } from "react";

import { Container, TrafficBox, Light } from "./styles";

const App = () => {
  const [red, setRed] = useState(true);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);

  useEffect(() => {
    let time;

    if (red) {
      time = 15000;
    }

    if (yellow) {
      time = 3000;
    }

    if (green) {
      time = 10000;
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
  });

  return (
    <Container>
      <TrafficBox>
        <Light on={red ? "red" : "white"} />
        <Light on={yellow ? "yellow" : "white"} />
        <Light on={green ? "green" : "white"} />
      </TrafficBox>
    </Container>
  );
};

export default App;
