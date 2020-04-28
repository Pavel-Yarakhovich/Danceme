import styled from "styled-components";
import { themes } from "../../../config/themes";

export const Menu = styled.div`
  position: absolute;
  z-index: 1000;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  height: 80px;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(16, 0, 18, 0.5), rgba(44, 0, 49, 0.85));
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid ${themes.regular.black};
  box-sizing: border-box;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: stretch;

  @media (min-width: 600px) {
    width: 575px;
  }
  @media (min-width: 900px) {
    width: 768px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const Title = styled.span`
  font-size: 1.1rem;
  margin: 0;
  padding-left: 10px;

  @media (max-width: 900px) {
    display: none;
  }
`;

