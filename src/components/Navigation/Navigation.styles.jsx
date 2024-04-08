import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 1rem;
  /* background-color: #ffffff47; */
  background-color: #001b51;
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: center;

  position: fixed;
  top: 1.7rem;
  left: 0;

  z-index: 999;
`;

export const SubContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderName = styled.p`
  font-size: 2.2rem;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  margin-left: 1rem;
`;
