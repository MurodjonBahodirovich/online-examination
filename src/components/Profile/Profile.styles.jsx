import { styled } from "styled-components";

export const UserImgInput = styled.input`
  display: none;
`;

export const UserImgLabel = styled.label`
  width: 30rem;
  height: 30rem;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0 0 10px #00ff15;
  border: 2px solid #00ff15;
  color: #ccc;
  margin-left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  overflow: hidden;
`;

export const UserIcon = styled.i`
  font-size: 20rem;
  margin: 50% 50%;
  transform: translate(-50%, -50%);
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
`;
