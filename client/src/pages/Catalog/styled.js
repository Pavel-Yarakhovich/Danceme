import styled from "styled-components";
import { themes } from "../../config/themes";
import Slider from "react-slick";

export const Container = styled.div`
  position: relative;
  width: 1400px;
  margin: 0 auto;
  height: calc(100vh - 140px);
  background: transparent;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "title delivery "
    "filter gallery";

  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 1200px) {
    grid-gap: 10px;
    grid-template-columns: 100%;
    grid-template-rows: 50px 50px 1fr;
    grid-template-areas:
      "title"
      "filter"
      "gallery";
  }

  @media (max-width: 900px) {
    grid-gap: 0;
    grid-template-columns: 100%;
    grid-template-rows: 50px 100%;
    grid-template-areas: 
    "title"
    "gallery";
  }

  @media (max-width: 767px) {
    height: calc(100vh - 54px);
  }
`;

export const PageTitle = styled.div`
  grid-area: title;
`

export const Filter = styled.div`
  align-self: flex-end;
  grid-area: filter;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media (max-width: 1200px) {
    flex-flow: row;
  }

  @media (max-width: 900px) {
    display: none;
`;

export const Display = styled.div`
  max-height: 100%;
  align-self: flex-start;
  // flex-grow: 1;
  grid-area: gallery;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;

  scrollbar-color: ${themes.regular.violet} transparent;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(103, 4, 100, .5);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${themes.regular.violet};
  }

  @media (max-width: 900px) {
    padding-top: 10px;
    max-height: calc(100% - 50px);
  }

  @media (max-width: 768px) {
    padding-top: 10px;
    max-height: calc(100% - 60px);
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  height: 90px;
  justify-content: space-between;
  margin-top: 10px;
  align-self: center;
  align-items: center;
`;

export const Test = styled.div`
  width: 100%;
  height: 100%;
  background: salmon;
  border: 1px solid red;
`;

export const SliderContainer = styled(Slider)`
  height: 100%;
`;
