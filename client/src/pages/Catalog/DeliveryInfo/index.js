import React from "react";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import * as Styled from "./styled";

export default () => {
  return (
    <Styled.Container>
      <Styled.Feature>
        <Styled.Feature_Logo>
          <EmojiTransportationIcon />
        </Styled.Feature_Logo>
        <Styled.Details to="/delivery">Доставка</Styled.Details>
      </Styled.Feature>
      <Styled.Feature>
        <Styled.Feature_Logo>
          <AccountBalanceWalletIcon />
        </Styled.Feature_Logo>
        <Styled.Details to="/delivery">Оплата</Styled.Details>
      </Styled.Feature>
      <Styled.Feature>
        <Styled.Feature_Logo>
          <VerifiedUserIcon />
        </Styled.Feature_Logo>
        <Styled.Details to="/delivery">Гарантии</Styled.Details>
      </Styled.Feature>
    </Styled.Container>
  );
};
