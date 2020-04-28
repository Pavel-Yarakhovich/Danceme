import styled, { keyframes } from "styled-components";
import { themes } from "../../config/themes";

const bounce = keyframes`
0%, 100% { 
  transform: scale(0.0);
  opacity: .4;
  -webkit-transform: scale(0.0);
} 50% { 
  transform: scale(1.0);
  opacity: 1;
  -webkit-transform: scale(1.0);
}
`;

const rotate = keyframes`
100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }
`;

export const Spinner = styled.div`
  margin: 100px auto;
  width: 100px;
  height: 100px;
  position: relative;
  text-align: center;

  -webkit-animation: sk-rotate 2s infinite linear;
  animation: ${rotate} 2s infinite linear;
`;

export const DotOne = styled.div`
  width: 50%;
  height: 50%;
  display: inline-block;
  position: absolute;
  top: 0;
  border: 1px solid ${themes.regular.violet};
  border-radius: 100%;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: ${bounce} 2s infinite ease-in-out;
`;

export const DotTwo = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  border: 1px solid ${themes.regular.gold};
  border-radius: 100%;
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: ${bounce} 2s infinite ease-in-out;
`;

// @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}

// @-webkit-keyframes sk-bounce {
//   0%, 100% { -webkit-transform: scale(0.0) }
//   50% { -webkit-transform: scale(1.0) }
// }
