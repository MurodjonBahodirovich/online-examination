import { styled } from "styled-components";
import backgroundImage from "../../../assets/img/background.png";

export const Container = styled.div`
  width: 100%;
  height: 91vh;
  margin-top: 6.7rem;
  margin-left: 50%;
  padding-bottom: 5rem;
  transform: translate(-50%);
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: "Dancing Script", monospace;
  display: flex;
  align-items: end;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: cover;

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
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: #001b51;
`;

export const HomePageContentParent = styled.div`
  border-radius: 10px;
  border: 1px solid #fff;
  display: flex;
  padding: 3rem;
  backdrop-filter: blur(0.3rem);
`;
