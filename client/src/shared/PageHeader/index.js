import React from "react";
import { themes } from "../../config/themes";
import styled from "styled-components";

const Header = styled.h1`
  padding: 0 15px;
  font-size: 1.9rem;
  letter-spacing: 0.04rem;
  color: ${themes.regular.main_text};

  @media (max-width: 600px) {
    text-align: right;
  }
`;

export default ({ title }) => (
  <Header>{title}</Header>
)