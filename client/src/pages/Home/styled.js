import styled, { keyframes } from "styled-components";
import { themes } from "../../config/themes";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: ${themes.regular.white};
  background: linear-gradient(${themes.regular.black} 100px, transparent 400px);
`;

const crown = keyframes`
 0%, 100% {
   box-shadow: 0 0 15px ${themes.regular.white};
 }
 20% {
  box-shadow: 5px 3px 25px ${themes.regular.white};
}
40% {
  box-shadow: 2px 8px 20px ${themes.regular.white};
}
60% {
  box-shadow: -6px 0 15px ${themes.regular.white};
}

60% {
  box-shadow: -2px -4 25px ${themes.regular.white};
}
`;

export const Logo = styled.img`
  margin: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  animation: ${crown} 2s infinite linear;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-basis: 50%;
`;

export const Wrapper = styled.div`
  padding: 6px;
  box-sizing: border-box;
  width: 50%;
  border-radius: 2rem;
  overflow: hidden;
  min-height: 140px;
`

export const PageLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  color: ${themes.regular.black};
  font-size: 1.6rem;
  text-decoration: none;
  font-weight: 900;

  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  position: relative;

  :before {
    display: block;
    content: "";
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .5);
  }

  :after {
    display: flex;
    align-items: center;
    justify-content: center;
    content: "${props => props.link}";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`
