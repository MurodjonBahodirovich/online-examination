import { styled } from "styled-components";

export const OverlayBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000ab;
  backdrop-filter: blur(2px);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;
`;

export const ModalBox = styled.div`
  width: 40rem;
  height: 70rem;
  padding: 1rem;
  background-color: #7777774e;
  border-radius: 5px;
  backdrop-filter: blur(5px);
  border: 1px solid #ccc;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 11;
`;

export const ModalBtn = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background-color: red;
  border-radius: 50%;
  box-shadow: 0px 0px 5px #fff;
  border: none;
  outline: none;
  position: relative;
  display: block;
  margin-bottom: 3rem;

  &::after {
    content: "-";
    color: #c9c9c9;
    font-size: 2rem;
    /* font-weight: bold; */
    opacity: 0;
    transition: all .1s;

    position: absolute;
    top: 40%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  &:hover&::after {
    opacity: 1;
  }
`;
