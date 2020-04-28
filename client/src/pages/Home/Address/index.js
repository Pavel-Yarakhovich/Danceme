import React from "react";
import * as Styled from "./styled";

export default () => {
  return (
    <Styled.Address>
      <Styled.Note>
        г. Минск
      </Styled.Note>
      <Styled.Note>
        ул. Скрыганова, 4а
      </Styled.Note>
      <Styled.Note>
        тел. <Styled.Link href="tel:80445421964">+375 44 542-19-64</Styled.Link>
      </Styled.Note>
      <Styled.Instagram>
        <Styled.Insta href="https://www.instagram.com/danceme_official_minsk/" target="_blank" />
        <Styled.Link href="https://www.instagram.com/danceme_official_minsk/" target="_blank" >@danceme_official_minsk</Styled.Link>
      </Styled.Instagram>
    </Styled.Address>
  );
};
