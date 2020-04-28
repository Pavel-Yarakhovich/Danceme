import styled from "styled-components";
import { themes } from "../../config/themes";

export const Footer = styled.div`
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  background: linear-gradient(150deg, ${themes.regular.violet} 5%, ${themes.regular.dark_violet} 30%, ${themes.regular.black});
  display: flex;
  align-items: center;
  border-top: 4px solid ${themes.regular.white};

  @media (max-width: 768px) {
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

