import React from "react";
import { Transition } from "react-transition-group";
import { connect } from "react-redux";

import * as Styled from "./styled";

const duration = 300;
const defaultStyle = {
  opacity: 0,
  transition: `all ${duration}ms ease`
};
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
};

const defaultContainer = {
  transform: "translate(-50%, -50%)",
  opacity: 0,
  transition: "all 300ms ease"
};
const transitionContainer = {
  entering: { transform: "translate(-50%, -250%)",  opacity: 0 },
  entered: { transform: "translate(-50%, -50%)",  opacity: 1 },
  exiting: { transform: "translate(-50%, -50%)",  opacity: 1 },
  exited: { transform: "translate(-50%, -250%)",  opacity: 1 }
};

const PopupContainer = ({ isShown, content }) => (
    <Transition in={isShown} timeout={duration} mountOnEnter unmountOnExit>
      {state => (
        <Styled.Backdrop
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          <Styled.Container
            style={{
              ...defaultContainer,
              ...transitionContainer[state]
            }}
          >
            {content}
          </Styled.Container>
          )}
        </Styled.Backdrop>
      )}
    </Transition>
  );

const mapStateToProps = state => {
  return {
    isShown: state.isPopupShown,
    content: state.popupContent
  };
};

export default connect(mapStateToProps)(PopupContainer);
