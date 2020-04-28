import styled, { css } from "styled-components";
import { themes } from "../../config/themes";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${themes.regular.white};
  justify-content: center;
  background-size: cover;

  @media (max-width: 600px) {
    padding: 0 8px;
    box-sizing: border-box;
  }
`;

export const Motto = styled.p`
  font-size: 1.2rem;
  color: ${themes.regular.main_text};
  margin: 0.6rem 0 1rem;
  text-align: center;
  // width: 300px;

  ${(props) =>
    props.h1 &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0.8rem;
    `}
`;

export const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  box-sizing: border-box;
  padding: 1.25rem 0.6rem;
  border: 1px solid ${themes.regular.dark_violet};
  border-radius: 4px;
  background: transparent;
  color: ${themes.regular.main_text};
  font-size: 1rem;
  transition: all 300ms ease;

  :focus {
    border-left-color: ${themes.regular.gold};
    box-shadow: inset 5px 0 0 ${themes.regular.gold};
    color: ${themes.regular.dark_violet};
    letter-spacing: 0.1rem;
    outline: none;
  }

  ::placeholder {
    color: ${themes.regular.dark_violet};
  }

  ${(props) =>
    props.error &&
    css`
      border-color: ${themes.regular.error};
      ::placeholder {
        color: ${themes.regular.error};
      }
    `}

  @media (max-width: 550px) {
    padding: 1rem 0.5rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: .5rem 0 1rem;
  box-sizing: border-box;
  padding: 1.25rem 0.6rem;
  border: 1px solid ${themes.regular.dark_violet};
  border-radius: 4px;
  background: transparent;
  color: ${themes.regular.main_text};
  font-size: 1rem;
  transition: all 300ms ease;

  :focus {
    border-left-color: ${themes.regular.gold};
    box-shadow: inset 5px 0 0 ${themes.regular.gold};
    color: ${themes.regular.dark_violet};
    letter-spacing: 0.1rem;
    outline: none;
  }

  ::placeholder {
    color: ${themes.regular.dark_violet};
  }

  ${(props) =>
    props.error &&
    css`
      border-color: ${themes.regular.error};
      ::placeholder {
        color: ${themes.regular.error};
      }
    `}

  @media (max-width: 550px) {
    padding: 1rem 0.5rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;

  @media (min-width: 616px) {
    width: 600px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export const Label = styled.p`
  font-size: 1em;
  font-weight: 600;
  color: ${themes.regular.medium_grey};
  margin: 0 0 0.5em;
  position: relative;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

export const UploadImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UploadInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  overflow: hidden;
  opacity: 0;
`;

export const UploadGroup = styled(InputGroup)`
  margin: 15px 0;
`;

export const UploadedImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 15px;
  border: 1px solid ${themes.regular.gold};
  margin-right: 15px;
  object-fit: cover;
  object-position: center center;
`;

export const ImageInfo = styled.span`
  font-size: 1em;
  margin: 0;
  padding: 0 10px;
  color: ${themes.regular.medium_grey};
`;

export const UploadLabel = styled.label`
  border: 1px solid ${themes.regular.dark_violet};
  border-radius: 4px;
  background: transparent;
  color: ${themes.regular.dark_violet};
  height: 38px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0;
  text-align: center;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 5px ${themes.regular.light_grey};
  }
`;