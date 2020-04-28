import React from "react";
import * as Styled from "./styled";
import PageHeader from "../../shared/PageHeader";
import Map from "../../shared/GoogleMapComponent";
import Hit from "./Hit";
import Address from "./Address";
import RulesItem from "./RulesItem";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

export default () => {
  return (
    <>
    <Header />
    <Styled.Container>
      <PageHeader title="Доставка" />
      <Styled.Content>
        <Styled.Terms>
          <RulesItem
            logo={<EmojiTransportationIcon fontSize="large" />}
            description={[
              "Бесплатная доставка и примерка* по всей территории Минска.",
              "Доставка осуществляется в день заказа при оформлении заказа до 12.00, либо на следующий после заказ день.",
              "*примерка вещей осуществляется бесплатно в случае приобретения как минимум одного товара из списка заказанных для примерки.",
            ]}
          />
        </Styled.Terms>
        <Styled.Payment>
          <RulesItem
            logo={<AccountBalanceWalletIcon fontSize="large" />}
            description={[
              "Вы можете оплатить покупки не только наличными, но и банковской картой. Предоплата не обязательна, вы всегда можете заказать понравившуюся вещь сейчас, а оплатить в момент доставки.",
            ]}
          />
        </Styled.Payment>
        <Styled.Warranty>
          <RulesItem
            logo={<VerifiedUserIcon fontSize="large" />}
            description={[
              "Danceme гарантирует качество и подлинность каждой вещи, которую вы у нас купите. Если вещь вам не подойдет, у Вас есть 14 дней на возврат со 100% возмещением денег.",
            ]}
          />
        </Styled.Warranty>
        <Styled.Hits>
          <Hit />
        </Styled.Hits>
        <Styled.Address>
          <Address />
        </Styled.Address>
        <Styled.Map>
          <Map isMarkerShown={true} marker={{ lat: 53.91, lng: 27.518 }} />
        </Styled.Map>
      </Styled.Content>
    </Styled.Container>
    <Footer />
    </>
  );
};
