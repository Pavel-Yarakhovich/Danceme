import React from "react";
import * as Styled from "./styled";
import WaveBg from "../shared/WaveBg";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { withRouter } from "react-router-dom";
import Routing from "./routing";
import { ErrorBoundary } from "../utils/errorBoundary";
import PopupContainer from "../shared/PopUpContainer";

const client = new ApolloClient({
  uri: "/graphql",
});

function App({ location }) {
  return (
    <ApolloProvider client={client}>
      <Styled.GlobalStyle />
      <ErrorBoundary>
        <Styled.App>
          <Styled.ContentWrapper
            start={location.pathname === "/" ? "true" : undefined}
          >
            <Routing />
          </Styled.ContentWrapper>
          <WaveBg />
        </Styled.App>
        <PopupContainer />
      </ErrorBoundary>
    </ApolloProvider>
  );
}

export default withRouter(App);
