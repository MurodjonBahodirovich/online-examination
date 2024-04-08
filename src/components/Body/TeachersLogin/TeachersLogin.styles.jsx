import { styled } from "styled-components";

export const TeachersLoginContainer = styled.div`
  width: 50%;
  height: 70vh;
  /* background-color: orange; */
  margin-top: 15rem;
  margin-left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginBoxLabel = styled.p`
  font-size: 4rem;
  font-family: "Reem Kufi Fun", monospace;
  font-weight: bold;
  color: #001b51;
`;

export const LoginBox = styled.div`
  width: 40rem;
  height: 25rem;
  border: 1px solid #000;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  padding: 1rem 2rem;
  border: 1px solid #777;
  outline: none;
  color: blue;
  margin-top: 3rem;
`;

export const Button = styled.button`
  width: 15rem;
  padding: 0.7rem 1rem;
  background: #001b51;
  border: 2px solid #fff;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  margin-top: 3rem;
`;
