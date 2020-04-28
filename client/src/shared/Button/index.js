import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../../config/themes";

const Button = styled.button`
  height: 40px;
  width: 100%;
  border: 1px solid transparent;
  // border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  background: none;
  white-space: nowrap;
  transition: all 250ms ease;

  :hover {
    cursor: pointer;
    outline: none;
  }

  :focus {
    outline: none;
  }

  ${(props) =>
    props.type === "details" &&
    css`
      border-color: ${themes.regular.violet};
      color: ${themes.regular.dark_violet};
      font-weight: 400;
      letter-spacing: .2rem;
    `}

    ${(props) =>
      props.type === "hit-details" &&
      css`
        width: auto;
        border-color: ${themes.regular.gold};
        border-radius: 8px;
        color: ${themes.regular.gold};
        background: ${themes.regular.white};
        align-self: flex-end;
      `}

  ${(props) =>
    props.type === "contact" &&
    css`
      border-color: ${themes.regular.violet};
      background: linear-gradient(30deg, ${themes.regular.dark_violet}, ${themes.regular.violet});
      color: ${themes.regular.white};
    `}

    ${(props) =>
      props.type === "submit" &&
      css`
        border-color: ${themes.regular.violet};
        background: ${themes.regular.violet};
        color: ${themes.regular.white};

        ${(props =
          props.disabled &&
          css`
            opacity: .2;
            color: ${themes.regular.shadow};
            cursor: none;
          `)}
      `}

  ${(props) =>
    props.type === "side-select" &&
    css`
      border-color: transparent;
      border-width: 1px;
      background: transparent;
      text-align: left;
      text-transform: lowercase;
      font-weight: normal;
      letter-spacing: 0.1em;
      color: ${themes.regular.white};
      margin: 4px;

      :hover {
        cursor: pointer;
        border-color: ${themes.regular.white};
      }

      ${(props) =>
        props.selected &&
        css`
          border-color: ${themes.regular.white};
          text-align: left;
          text-transform: uppercase;
          color: ${themes.regular.white};
        `}
    `}

    ${(props) =>
      props.type === "select" &&
      css`
        border-color: transparent;
        border-width: 1px;
        background: transparent;
        text-align: right;
        text-transform: lowercase;
        font-weight: normal;
        letter-spacing: 0.1em;
        color: ${themes.regular.dark_violet};
        margin: 4px;

        :hover {
          cursor: pointer;
          border-color: ${themes.regular.gold};
        }

        ${(props) =>
          props.selected &&
          css`
            border-color: ${themes.regular.dark_violet};
            text-align: right;
            text-transform: uppercase;
            color: ${themes.regular.gold};
          `}
      `}
`;

export default ({ type, children, clicked, name, isActive, disabled }) => (
  <Button
    type={type}
    onClick={clicked}
    name={name}
    selected={isActive}
    disabled={disabled}
  >
    {children}
  </Button>
);
