import styled from "styled-components";
import {themes} from "../../../config/themes";

export const BurgerButton = styled.button`
  padding: 5px;
  border: none;
  background: none;
  color: ${themes.regular.white};
  display: flex;
  align-items: center;

  :focus {
    outline: none;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;