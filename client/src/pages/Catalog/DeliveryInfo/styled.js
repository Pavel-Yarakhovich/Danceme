import styled from "styled-components";
import { themes } from "../../../config/themes";
import { Link } from "react-router-dom";

export const Details = styled(Link)`
font-size: 1.2rem;
letter-spacing: 0.08rem;
color: ${themes.regular.dark_violet};
opacity: .7;
margin:0;
text-decoration: none;
padding-left: 15px;
text-transform: uppercase;
font-weight: 600;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 30% 1 1;
  padding: 8px;
  box-sizing: border-box;
`;

export const Feature_Logo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${themes.regular.dark_violet};
  opacity: 0.6;
  color: ${themes.regular.white};
`;
