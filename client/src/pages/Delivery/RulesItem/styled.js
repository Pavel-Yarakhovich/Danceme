import styled, { css } from "styled-components";
import { themes } from "../../../config/themes";

export const Feature = styled.div`
  display: flex;
  flex: 30% 1 1;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 550px) {
    width: 100%;
    border-right: transparent;
    border-radius: 51px 0 0 51px;
    margin-left: 10px;
    box-shadow: inset 1px 0 0 ${themes.regular.dark_violet};
    transition: all 250ms ease;

    ${props => props.expanded && css`
      box-shadow: inset 1px 1px 0 ${themes.regular.gold};
    `}
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  overflow: hidden;

  @media (max-width: 550px) {
    justify-content: space-between;
    margin: 15px 0 15px 15px;
  }
`;

export const Feature_Logo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${themes.regular.dark_violet};
  opacity: 0.6;
  color: ${themes.regular.white};
  transition: all 250ms ease;

  ${(props) =>
    props.expanded &&
    css`
      background: ${themes.regular.gold};
      opacity: 0.9;
      // color: ${themes.regular.black};
    `}
`;

export const Feature_Description = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  line-height: 1.3;
  color: ${themes.regular.black};
  align-self: flex-start;
  margin: 5px 0;

  @media (max-width: 550px) {
    text-align: right;
  }
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  justify-content: center;

  @media (max-width: 550px) {
    padding: 0 10px 10px 40px;
  }
`;
