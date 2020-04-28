import React from "react";
import * as Styled from "./styled";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

export default ({ burgerClicked }) => {
  const handleBurgerClick = (e) => {
    e.preventDefault();
    burgerClicked();
  };
  return (
    <Styled.BurgerButton onClick={handleBurgerClick}>
      <MenuRoundedIcon fontSize="large" />
    </Styled.BurgerButton>
  );
};
