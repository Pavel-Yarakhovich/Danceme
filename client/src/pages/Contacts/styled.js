import styled, { css } from "styled-components";
import { themes } from "../../config/themes";

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${themes.regular.white};
  justify-content: center;
  background-size: cover;

  @media (max-width: 1400px) {
    width: 100%;
  }
  
  @media (nax-width: 767px) {
    max-height: calc(100vh - 54px);
  }

  @media (max-width: 550px) {
    padding: 0 8px;
    box-sizing: border-box;
    overflow-X: auto;
  }
`;

export const Motto = styled.p`
  font-size: 1.2rem;
  color: ${themes.regular.main_text};
  margin: 0.6rem 0 1rem;
  text-align: center;
  width: 300px;

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
