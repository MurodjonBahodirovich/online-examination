import { styled } from "styled-components";

export const TeachersLoginContainer = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 15rem;
  margin-left: 50%;
  padding: 2rem;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginBoxLabel = styled.p`
  text-align: center;
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
  background-color: #266bcb2f;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Input = styled.input`
  width: 80%;
  padding: 1rem 2rem;
  border: 1px solid #777;
  outline: none;
  color: blue;
  margin-top: 3rem;
  font-size: 1.7rem;
  letter-spacing: 1.7px;
`;

export const InputLabel = styled.label`
  font-size: 2rem;
  cursor: pointer;
  user-select: none;

  position: absolute;
  top: 50%;
  right: 1rem;

  transform: translate(-130%);
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
