import { styled } from "styled-components";
import backgroundImage from "../../../assets/img/bg-test.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 5rem;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  align-items: end;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HomePageText = styled.p`
  color: #fbff00;
  font-size: 3.5rem;
  font-weight: 800;
  font-family: "Reem Kufi Fun", monospace;
  margin-bottom: 3rem;
  text-shadow: 0 0 10px #000;
  text-align: center;
  user-select: none;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #001b51;
`;

export const HomePageContentParent = styled.div`
  border-radius: 10px;
  border: 1px solid #fff;
  display: flex;
  padding: 3rem;
  backdrop-filter: blur(0.3rem);
`;
