import styled from "styled-components";
import { themes } from "../../config/themes";
import CloseIcon from "@material-ui/icons/Close";

export const Container = styled.div`
  position: relative;
  width: 800px;
  height: 90vh;
  background: ${themes.regular.white};
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "image info"
    "description info";

  @media (max-width: 820px) {
    width: 90vw;
  }

  @media (max-width: 550px) {
    padding: 0;
    width: 95vw;
    height: 85vh;
    overflow: auto;
    grid-template-columns: 100%;
    grid-template-rows: 1fr max-content max-content;
    grid-template-areas:
      "image"
      "description"
      "info";
  }
`;

export const ImageWrapper = styled.div`
  padding: 8px;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center center;
  grid-area: image;
`;

export const Description = styled.div`
  grid-area: description;
  padding: 12px;
  box-sizing: border-box;

  @media (max-width: 550px) {
    padding: 0;
    margin: 10px 0;
  }
`;

export const MoreInfo = styled.div`
  grid-area: info;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    margin-bottom: 80px;
  }
`;

export const Close = styled(CloseIcon)`
  color: ${themes.regular.gold};
  position: absolute;
  top: 8px;
  right: 8px;

  :hover {
    cursor: pointer;
    color: ${themes.regular.dark_violet};
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 550px) {
    margin: 0;
    padding: 0;
  }
`;

export const InfoTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${themes.regular.dark_violet};
  margin: 0;

  @media (max-width: 550px) {
    display: block;
    width: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
    border-top: 1px solid ${themes.regular.dark_violet};
    border-bottom: 1px solid ${themes.regular.dark_violet};
  }
`;

export const InfoContent = styled.p`
  font-size: 1rem;
  color: ${themes.regular.main_text};
  margin: 0;

  @media (max-width: 550px) {
    padding: 8px;
    box-sizing: border-box;
  }
`;

export const CallLink = styled.a`
  max-width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0.6px solid ${themes.regular.main_text};
  color: ${themes.regular.dark_violet};
  display: flex;
  text-align: center;
  flex-flow: column;
  align-items: center;
  white-space: normal;
  text-decoration: none;

  @media (max-width: 550px) {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    padding: 5px 25px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 0;
    border: none;
    opacity: .95;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12),
    0px 9px 12px rgba(0, 0, 0, 0.14);
    color: ${themes.regular.black};
    background: ${themes.regular.white};
  }
`;
