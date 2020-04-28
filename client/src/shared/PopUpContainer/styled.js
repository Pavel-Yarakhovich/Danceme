import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  position: absolute;
  z-index: 1100;
  top: 50%;
  left: 50%;
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2), 
                0px 3px 16px rgba(0, 0, 0, 0.12),
                0px 9px 12px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-flow: column;
`;