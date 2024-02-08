import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #ffffff63;
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
`;

export const SubContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderName = styled.p`
  font-size: 2.2rem;
  color: #000;
  font-weight: bold;
  display: inline-block;
  margin-left: 1rem;
`;
