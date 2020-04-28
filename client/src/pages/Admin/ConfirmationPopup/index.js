import React from "react";
import { Transition } from "react-transition-group";
import * as Styled from "./styled";

export default ({ message, showMessage }) => {
  const defaultStyle = {
    transform: "scale(0) translateX(-50%)",
    transformOrigin: "right bottom",
    transition: "all 250ms ease",
  };
  const transitionStyles = {
    enetering: { transform: "scale(0) translateX(-50%)" },
    entered: { transform: "scale(1) translateX(-50%)" },
    exiting: { transform: "scale(0) translateX(-50%)" },
    exited: { transform: "scale(0) translateX(-50%)" }
  }

  return(
    <Transition
      in={showMessage}
      timeout={250}
      mountOnEnter
      unmountOnExit
    >
      {state => (
        <Styled.Container
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          {message}
        </Styled.Container>
      )}
    </Transition>
  )
}