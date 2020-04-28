import styled from "styled-components";
import { themes } from "../../../config/themes";

export const Feature = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${themes.regular.gold};
  background-color: ${themes.regular.white};
  position: relative;
  overflow: hidden;

  @media (max-width: 550px) {
    margin-top: 15px;
    border-radius: 0;
    border-color: transparent;
    box-shadow: 0 0 8px ${themes.regular.dark_violet};
  }
`;

export const HitItem = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    background-size: contain;
  }
`;

export const HitMark = styled.div`
  position: absolute;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${themes.regular.gold};
  top: 10px;
  left: 10px;
  color: ${themes.regular.gold};
  background: ${themes.regular.white};
  box-shadow: 0 0 10px ${themes.regular.white};
`;
