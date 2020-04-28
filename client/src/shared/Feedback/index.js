import React from "react";
import styled from "styled-components";
import Placeholder from "../../assets/image/noavatar.png";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`;

const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
`;

const Customer = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  text-align: center;
`;

const Comment = styled.p`
  font-size: 1rem;
  letter-spacing: 0.03rem;
  line-height: 1.4;
  color: #444;
  text-align: center;
  font-style: italic;
`;

export default ({ image = Placeholder, name, comment }) => (
  <Container>
    <Photo src={image}/>
    <Customer>{name}</Customer>
    <Comment>{comment}</Comment>
  </Container>
)