import React, { useState } from "react";
import Logo from "../../assets/image/logo.png";
import BurgerMenu from "./BurgerMenu";
import DropMenu from "./DropMenu";

import * as Styled from "./styled";

export default () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const hideMenu = () => setShowMenu(false);
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.AdminLink to="/admin">
          <Styled.Logo src={Logo} />
        </Styled.AdminLink>
        {/* <Styled.Insta
          href="https://www.instagram.com/danceme_official_minsk/"
          target="_blank"
        /> */}
        <Styled.ContactWrapper>
          <Styled.Call fontSize="large" />
          <Styled.Contact href="tel:80445421964">
            +375 44 542-19-64
          </Styled.Contact>
        </Styled.ContactWrapper>
        <BurgerMenu burgerClicked={toggleMenu} />
      </Styled.Container>

      <DropMenu showMenu={showMenu} menuClicked={hideMenu}/>
    </Styled.Header>
  );
};
