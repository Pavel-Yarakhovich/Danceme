import styled from "styled-components";
import { themes } from "../../config/themes";

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  overflow: auto;
  height: calc(100vh - 150px);
  display: flex;
  flex-flow: column;
  font-size: 1rem;
  color: ${themes.regular.black};

  @media (max-width: 1400px) {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 54px);
  }
`;

export const Content = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 300px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  grid-template-areas:
    "terms payment warranty hits"
    "address map map map";

  @media (max-width: 1200px) {
    box-sizing: border-box;
    grid-template-rows: repeat(2, minmax(100px, max-content)) 300px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    grid-template-areas:
      "terms address"
      "warranty hits"
      "payment map";
  }

  @media (max-width: 550px) {
    padding: 0;
    box-sizing: border-box;
    grid-template-columns: 100vw;
    grid-template-rows: repeat(3, minmax(100px, max-content)) 300px 300px minmax(
        100px,
        max-content
      );
    grid-gap: 10px;
    grid-template-areas:
      "terms"
      "payment"
      "warranty"
      "hits"
      "address"
      "map";
  }
`;

export const Terms = styled.div`
  grid-area: terms;
  border-radius: 8px;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const Payment = styled.div`
  grid-area: payment;
  border-radius: 8px;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const Warranty = styled.div`
  grid-area: warranty;
  border-radius: 8px;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const Hits = styled.div`
  grid-area: hits;
  border-radius: 8px;
`;

export const Address = styled.div`
  grid-area: address;
  border-radius: 8px;
`;

export const Map = styled.div`
  grid-area: map;
  border-radius: 8px;
  overflow: hidden;
`;
