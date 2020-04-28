import React from "react";
import StyledButton from "../../shared/Button";
import * as Styled from "./styled";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import DetailedItem from "../DetailedItem";
import { withRouter } from "react-router-dom";

const Item = withRouter(
  ({ history, src, description, size, manufacturer, showPopup }) => {
    const handleShowDetails = () => {
      showPopup(
        <DetailedItem
          src={src}
          text={description}
          size={size}
          manufacturer={manufacturer}
        />
      );
    };

    return (
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Image src={src} />
          <Styled.Description>
            {description.substr(0, 50)} ...
          </Styled.Description>
          <Styled.Buttons>
            <StyledButton type="details" clicked={handleShowDetails}>
              Подробнее
            </StyledButton>
          </Styled.Buttons>
        </Styled.Wrapper>
      </Styled.Container>
    );
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    showPopup: (content) => dispatch(actions.showPopup(content)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
