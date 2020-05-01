import React from "react";
import { Menu, Container, Title } from "./styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FooterLink from "./FooterLink";
import { Transition } from "react-transition-group";

const defaultStyle = {
  height: 0,
  overflow: "hidden",
  transition: "all 250ms ease-in-out",
};
const transitionStyles = {
  enetring: { height: 0 },
  entered: { height: 80 },
  exiting: { height: 0 },
  exited: { height: 0 },
};

export default ({ showMenu, menuClicked }) => {
  return (
    <Transition 
      in={showMenu} 
      timeout={{
        appear: 0,
        enter: 0,
        exit: 250
      }} 
      mountOnEnter 
      unmountOnExit
    >
      {(state) => (
        <Menu
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          <Container onClick={menuClicked}>
            <FooterLink type="delivery">
              <ShoppingCartIcon fontSize="large" />
              <Title>Доставка</Title>
            </FooterLink>
            <FooterLink type="catalog">
              <StorefrontIcon fontSize="large" />
              <Title>Каталог</Title>
            </FooterLink>
            <FooterLink type="feedbacks">
              <EmojiPeopleIcon fontSize="large" />
              <Title>Отзывы</Title>
            </FooterLink>
            <FooterLink type="contacts">
              <EditLocationIcon fontSize="large" />
              <Title>Контакты</Title>
            </FooterLink>
          </Container>
        </Menu>
      )}
    </Transition>
  );
};
