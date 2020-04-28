import styled, { css } from "styled-components";
import { themes } from "../../../config/themes";
import { Link } from "react-router-dom";

export const Anchor = styled(Link)`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLink = styled.div`
  display: flex;
  align-items: center;
  color: ${themes.regular.white};
  ${(props) =>
    props.isActive &&
    css`
      color: ${themes.regular.gold};
    `}
`;
