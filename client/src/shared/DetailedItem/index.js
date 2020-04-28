import React from "react";
import * as Styled from "./styled";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";
import CallIcon from "@material-ui/icons/Call";

const Content = ({ src, text, size, manufacturer, closePopup }) => {
  return (
    <Styled.Container>
      <Styled.Close fontSize="large" onClick={closePopup} />
      <Styled.ImageWrapper>
        <Styled.Image src={src} />
      </Styled.ImageWrapper>
      <Styled.Description>
        <Styled.InfoTitle>Описание товара</Styled.InfoTitle>
        <Styled.InfoContent>{text}</Styled.InfoContent>
      </Styled.Description>
      <Styled.MoreInfo>
        <Styled.InfoBlock>
          <Styled.InfoTitle>Размеры</Styled.InfoTitle>
          <Styled.InfoContent>{size}</Styled.InfoContent>
        </Styled.InfoBlock>
        <Styled.InfoBlock>
          <Styled.InfoTitle>Материал</Styled.InfoTitle>
          <Styled.InfoContent>{manufacturer}</Styled.InfoContent>
        </Styled.InfoBlock>
        <Styled.CallLink href="tel:80445421964">
          <CallIcon fontSize="large" />
          Заказать
        </Styled.CallLink>
      </Styled.MoreInfo>
    </Styled.Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    closePopup: () => dispatch({ type: actionTypes.POPUP.CLOSE }),
  };
};

export default connect(null, mapDispatchToProps)(Content);
