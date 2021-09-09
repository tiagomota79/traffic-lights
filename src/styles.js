import styled, { css, keyframes } from "styled-components";
import { Walking, HandPaper } from "@styled-icons/fa-solid";

export const Container = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 2vh;
  height: 100vh;
`;

const BoxCommon = css`
  display: grid;
  place-items: center;
  border-radius: 5vh;
  background-color: #919191;
`;

export const TrafficBox = styled.div`
  ${BoxCommon}
  width: 25vh;
  height: 65vh;
`;

export const Light = styled.div`
  display: grid;
  place-items: center;
  height: 17vh;
  width: 17vh;
  border-radius: 9vh;
  background-color: ${(props) => props.on};
`;

export const PedestrianBox = styled.div`
  ${BoxCommon}
  grid-template-columns: auto auto;
  width: 50vh;
  height: 25vh;
  font-family: Arial, Helvetica, sans-serif;
`;

export const PedestrianInsideBox = styled.div`
  display: grid;
  place-items: center;
  height: 18vh;
  width: 18vh;
  background-color: black;
  color: white;
  border-radius: 2vh;
  font-size: 15vh;
`;

export const Blinking = keyframes`
  50% {opacity: 0;}
`;

export const Walk = styled(Walking)`
  height: 15vh;
  color: green;
`;

export const Wait = styled(HandPaper)`
  animation: ${Blinking} 1s linear infinite;
  height: 15vh;
  color: red;
`;

export const Stop = styled(HandPaper)`
  height: 15vh;
  color: red;
`;
