import styled from "styled-components";
import LoadingImg from "../../assets/img/loading-png.png";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: progress;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const LoadingAnimation = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: url(${LoadingImg}) no-repeat;
  background-size: cover;
  animation-name: loading;
  animation-iteration-count: infinite;
  animation-duration: 1s;

  position: absolute;
  top: 40%;
  left: 50%;

  transform: translate(-60%, -60%);

  @keyframes loading {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const LoadingText = styled.p`
  width: 11rem;
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  user-select: none;
  margin-top: 15rem;

  position: absolute;

  &::after {
    content: "";
    animation-name: loadingText;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    @keyframes loadingText {
      25% {
        content: ".";
      }

      50% {
        content: "..";
      }

      100% {
        content: "...";
      }
    }
  }
`;
