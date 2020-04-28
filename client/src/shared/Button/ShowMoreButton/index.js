import React from "react";
import styled, {css} from "styled-components";
import { themes } from "../../../config/themes";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Button = styled.button`
  height: 70px;
  padding: 0 12px;
  box-sizing: border-box;
  border: none;
  border-radius: 35px 0 0 35px;
  // border: 1px solid ${themes.regular.dark_violet};
  background: rgba(44, 0, 49, 0.3);
  font-size: 1rem;
  color: ${themes.regular.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  transition: all 250ms ease;
  text-transform: lowercase;
  letter-spacing: .1em;
  :focus {
    outline: none;
  }

  ${props => props.expanded === true && css`
    background: linear-gradient(25deg, transparent 40%, rgba(44, 0, 49, 0.3));
    color: ${themes.regular.gold};
  `}

  @media (min-width: 550px) {
    display: none;
  }
`;

const Arrow = styled(ArrowDropDownIcon)`
color: ${themes.regular.white};
transition: all 250ms ease;
${props => props.expanded === true && css`
  transform: rotate(180deg);
  color: ${themes.regular.gold};
`}
`;

export default ({ children, expanded, clicked }) => {
  return (
    <Button onClick={clicked} expanded={expanded}>
      <Arrow fontSize="large" expanded={expanded}/>
      {children}
    </Button>
  );
};
