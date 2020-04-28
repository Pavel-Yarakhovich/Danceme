import styled from "styled-components";
import { themes } from "../../config/themes";

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  height: calc(100vh - 150px);
  overflow: auto;
  display: flex;
  flex-flow: column;
  font-size: 1rem;
  color: ${themes.regular.white};

  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    height: calc(100vh - 54px);
  }
`;

export const FeedBacks = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;