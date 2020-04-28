import styled from "styled-components";
import { themes } from "../../../config/themes";
import InstaLogo from "../../../assets/image/insta.png";

export const Address = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  padding: 8px 0 20px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    align-items: flex-end;
    justify-content: center;
  }

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const Note = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.02rem;
  color: ${themes.regular.black};
  margin: 5px 0;
  line-height: 1.3;
`;

export const Instagram = styled.div`
  display: flex;
  align-items: center;
`;

export const Insta = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url(${InstaLogo}) no-repeat center center;
  background-size: cover;
  margin-right: 8px;
`;

export const Link = styled.a`
  font-size: inherit;
  color: ${themes.regular.gold};
  text-decoration: none;
`;
