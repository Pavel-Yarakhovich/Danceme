import styled from "styled-components";
import { themes } from "../../config/themes";

export const Container = styled.div`
  width: 20%;
  height: auto;
  padding: 8px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 25%;
  }

  @media (max-width: 900px) {
    width: 33%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 2px 3px 8px ${themes.regular.shadow};
  background: ${themes.regular.white};
  // border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  // height: 90px;
  justify-content: space-between;
  align-self: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center center;
  margin-bottom: 15px;

  @media (max-width: 1200px) {
    height: 150px;
  }

  @media (max-width: 550px) {
    height: 220px;
  }
`;

export const Description = styled.div`
  font-size: 0.8rem;
  flex-grow: 1;
  color: ${themes.regular.main_text};
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 15px;
  letter-spacing: .2rem;
  // height: 125px;
`;
