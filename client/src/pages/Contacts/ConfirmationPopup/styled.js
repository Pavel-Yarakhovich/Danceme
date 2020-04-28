import styled from "styled-components";
import { themes } from "../../../config/themes";

export const Container = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin: 8px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 12px;
  color: ${themes.regular.white};
  font-weight: 600;
  background: ${themes.regular.gold};
  box-shadow: -4px -2px 10px ${themes.regular.shadow};
  text-align: center;
`;
