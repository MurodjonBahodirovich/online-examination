import styled from "styled-components";
import LoadingImg from "../../assets/img/loading-png.png";

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

  &:hover {
    cursor: progress;
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;