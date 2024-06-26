import { styled } from "styled-components";

export const ParentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ClassesContainer = styled.div`
  width: 22%;
  height: 90%;
  background-color: #001b51;
  border-radius: 10px;
  padding: 1rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TestsContainer = styled.div`
  width: 77%;
  height: 90%;
  background-color: #ffffffad;
  border: 2px solid #001b51;
  padding: 1rem;
  border-radius: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  position: relative;
`;

export const ClassContainer = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  border-radius: 5px;
  display: flex;
  transition: all 0.3s;
  background-color: ${({ classelected, clas }) =>
    classelected === clas ? "#d1cee3" : ""};

  &:not(:first-child) {
    margin-top: 1rem;
  }

  &:hover {
    background-color: #d1cee3;
    cursor: pointer;
  }

  &:hover div p,
  &:hover div i {
    color: #001b51 !important;
  }
`;

export const ClassText = styled.p`
  font-size: 2rem;
  font-family: "Reem Kufi Fun", monospace;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  user-select: none;
  color: ${({ classelected, clas, colortext }) =>
    `${classelected === clas ? colortext : "#fff"}`};
`;

export const NoTestingTimeText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  user-select: none;

  position: absolute;
  top: 40%;

  transform: translate(0, -60%);
`;