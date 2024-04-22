import styled from "styled-components";

export const SubjectBox = styled.div`
  padding: 1.5rem 3.5rem;
  margin-top: 2rem;
  margin-left: 2rem;
  border-radius: 10px;
  background: #266bcb2f;
  border: 2px solid #266bcbaa;
  font-size: 2.7rem;
  text-align: center;
  text-transform: capitalize;
  display: inline-block;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: #2d77df51;
  }
`;

export const TestsMainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackBtn = styled.div`
  width: 10rem;
  height: 4rem;
  border-radius: 5px;
  background: #03367d;
  font-size: 1.8rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;

  position: fixed;
  z-index: 10;
`;

export const CircleBtnsContainer = styled.div`
  width: 100%;
  padding: 2rem 7rem;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QueCircleBtn = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ activetest, index }) =>
    activetest === index ? "#1c63c68d" : "#1c63c625"};
  color: ${({ activetest, index }) => (activetest === index ? "#fff" : "#000")};
  border: 1px solid
    ${({ activetest, index }) => (activetest === index ? "#03367d" : "none")};
  transition: all 0.2s;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  margin-top: 1.5rem;

  &:not(:first-child) {
    margin-left: 2rem;
  }

  &:hover {
    cursor: pointer;
    background-color: #1c63c68d;
    border: 1px solid #03367d;
    color: #fff;
  }
`;

export const TestText = styled.p`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const AnswerBox = styled.div`
  width: 50%;
  padding: 2rem 5rem;
  border-radius: 10px;
  background: ${({selectedtest, index}) => selectedtest === index ? "#00ff0449" : "#1c63c628"};
  border: 1px solid ${({selectedtest, index}) => selectedtest === index ? "#00ac03" : "#03367d"};
  color: ${({selectedtest, index}) => selectedtest === index ? "#008502" : "#545454"};
  font-size: 3rem;
  margin-bottom: 2rem;
  user-select: none;
  cursor: pointer;
`;
