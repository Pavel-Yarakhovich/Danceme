import React from "react";
import { Transition } from "react-transition-group";
import { ErrorContainer } from "./styled";

const defaultError = {
  fontSize: 0,
  transition: "all 200ms ease",
};

const transitionError = {
  entering: { fontSize: 0 },
  entered: { fontSize: "0.8em" },
  exiting: { fontSize: 0 },
  exited: { fontSize: 0 },
};

export default ({ error, errorMessage }) => {
  return (
    <Transition in={error} timeout={200} mountOnEnter unmountOnExit>
      {(state) => (
        <ErrorContainer
          style={{
            ...defaultError,
            ...transitionError[state],
          }}
        >
          {errorMessage}
        </ErrorContainer>
      )}
    </Transition>
  );
};
