import React from "react";
import { withRouter } from "react-router-dom";
import * as Styled from "./styled";

export default withRouter(({ location, type, children }) => {
  return (
    <Styled.Anchor to={`/${type}`}>
      <Styled.MenuLink
        type={type}
        isActive={location.pathname === `/${type}`}
      >
        {children}
      </Styled.MenuLink>
    </Styled.Anchor>
  );
});
