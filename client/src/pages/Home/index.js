import React from "react";
import * as Styled from "./styled";
import Logo from "../../assets/image/logo.png";
import Adress from "./Address";
import Delivery from "../../assets/image/delivery.jpg";
import Catalog from "../../assets/image/catalog.jpeg";
import Feedbacks from "../../assets/image/feedback.jpg";
import Contacts from "../../assets/image/contacts.png";

export default () => {
  return (
    <Styled.Container>
      <Styled.Logo src={Logo} />
      <Styled.Links>
        <Styled.Row>
          <Styled.Wrapper>
            <Styled.PageLink to="/delivery" image={Delivery} link="Доставка" />
          </Styled.Wrapper>
          <Styled.Wrapper>
            <Styled.PageLink to="/catalog" image={Catalog} link="Каталог" />
          </Styled.Wrapper>
        </Styled.Row>
        <Styled.Row>
          <Styled.Wrapper>
            <Styled.PageLink to="/feedbacks" image={Feedbacks} link="Отзывы" />
          </Styled.Wrapper>
          <Styled.Wrapper>
            <Styled.PageLink to="/contacts" image={Contacts} link="Контакты" />
          </Styled.Wrapper>
        </Styled.Row>
      </Styled.Links>
      <Adress />
    </Styled.Container>
  );
};
