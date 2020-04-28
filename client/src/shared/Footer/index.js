import React from "react";
import { Footer, Container, Title } from "./styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FooterLink from "./FooterLink";

export default () => {
  return (
    <Footer>
      <Container>
        <FooterLink type="delivery"><ShoppingCartIcon fontSize="large"/><Title>Доставка</Title></FooterLink>
        <FooterLink type="catalog"><StorefrontIcon fontSize="large"/><Title>Каталог</Title></FooterLink>
        <FooterLink type="feedbacks"><EmojiPeopleIcon fontSize="large"/><Title>Отзывы</Title></FooterLink>
        <FooterLink type="contacts"><EditLocationIcon fontSize="large"/><Title>Контакты</Title></FooterLink>
      </Container>
    </Footer>
  );
};
