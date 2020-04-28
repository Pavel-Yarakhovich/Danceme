import styled, { keyframes } from "styled-components";
import { themes } from "../../config/themes";
import CallIcon from "@material-ui/icons/Call";
import InstaLogo from "../../assets/image/insta.png";
import { Link } from "react-router-dom";

export const Header = styled.div`
  width: 100%;
  height: 65px;
  background: linear-gradient(150deg, ${themes.regular.black} 5%, ${themes.regular.dark_violet} 30%, ${themes.regular.violet});
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${themes.regular.white};
  position: relative;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;

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

export const Logo = styled.img`
  position: absolute;
  z-index: 1110;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${themes.regular.violet};
  border: 4px solid ${themes.regular.white};

  @media (max-width: 900px) {
    left: 0;
    top: -8px;
    transform: translateY(0);
  }
`;

export const Contact = styled.a`
  color: ${themes.regular.white};
  font-size: 1.6rem;
  font-weight: 600;
  padding: 0 10px;
  text-decoration: none;
  text-shadow: 0 1px 15px black;
`;

const shake = keyframes`
  0%, 20%, 40%, 60%, 80% { 
    transform: rotate(10deg);
  } 
  10%, 30%, 50%, 70%, 90% { 
    transform: rotate(-10deg);
  50% {
    transform: rotate(-15deg) scale(1.4);
    color: ${themes.regular.gold};
  }
`;

export const Call = styled(CallIcon)`
  color: ${themes.regular.white};
  animation: ${shake} 2s infinite linear;
`;

export const Insta = styled.a`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themes.regular.white};
  background: url(${InstaLogo}) no-repeat center center;
  background-size: cover;
`;

export const AdminLink = styled(Link)``;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
`;
