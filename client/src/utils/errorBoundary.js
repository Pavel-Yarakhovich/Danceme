import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { themes } from "../config/themes";
import Logo from "../assets/image/logo.png";

const ErrorWrap = styled.section`
  height: 100%;
  width: 1140px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: ${themes.regular.dark_violet};

  @media(max-width: 1200px) {
    width: 960px;
  }
  @media(max-width: 992px) {
      width: 720px;
  }
  @media(max-width: 768px) {
      width: 540px;
  }
  @media(max-width: 576px) {
      width: 100%;
  }
`;

const rotate = keyframes`
0 {
  transform:rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 2em;
  animation: ${rotate} 3s infinite linear;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12),
    0px 9px 12px rgba(0, 0, 0, 0.14);
`;

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorWrap>
          <h1>Что-то пошло не так</h1>
            <Image src={ Logo } />
          <h2>Пожалуйста, перезагрузите страницу</h2>
        </ErrorWrap>
      );
    }

    return this.props.children; 
  }
}