import React, { useEffect, useState } from "react";
import {
  AnswerBox,
  AnswerContainer,
  BackBtn,
  CircleBtnsContainer,
  QueCircleBtn,
  SubjectBox,
  TestText,
  TestsMainContainer,
} from "./Tests.styles";
import Loading from "../Loading/Loading";

function Tests({ data, currentSubject, currentSubjectFunc }) {
  const [activeSubject, setActiveSubject] = useState(
    localStorage.getItem("questions")
      ? JSON.parse(localStorage.getItem("questions"))
      : null
  );
  const [activeTest, setActiveTest] = useState(
    localStorage.getItem("activeTest")
      ? JSON.parse(localStorage.getItem("activeTest")) + 1
      : 0
  );
  const [selectedTest, setSelectedTest] = useState(
    localStorage.getItem("userAnswer") &&
      JSON.parse(localStorage.getItem("userAnswer")).map((answer) =>
        activeTest === answer.activeTest ? answer.index : null
      )
  );
  const [userAnswers, setUserAnswers] = useState(
    localStorage.getItem("userAnswer")
      ? JSON.parse(localStorage.getItem("userAnswer"))
      : []
  );

  const getUserAnswer = (i) => {
    setSelectedTest(i);
    setUserAnswers([
      ...userAnswers,
      {
        activeTestNum: activeTest,
        index: i,
      },
    ]);
  };

  useEffect(() => {
    userAnswers.length &&
      localStorage.setItem("userAnswer", JSON.stringify(userAnswers));
  }, [userAnswers]);

  const fetchingTests = async (subject) => {
    currentSubjectFunc(true);
    localStorage.setItem("questions", JSON.stringify(subject));
    localStorage.setItem("currentSubject", currentSubject);

    setActiveSubject(subject);
  };

  const changedTestFunc = (i) => {
    setActiveTest(i);
    selectedTest &&
      localStorage.setItem("activeTest", JSON.stringify(activeTest));
  };

  useEffect(() => {
    localStorage.getItem("userAnswer") &&
      JSON.parse(localStorage.getItem("userAnswer")).map(
        ({ activeTestNum, index }) =>
          activeTest === activeTestNum
            ? setSelectedTest(index)
            : setSelectedTest(null)
      );
  }, [activeTest]);

  const helperFunc = () => {
    currentSubjectFunc(false);
    localStorage.removeItem("currentSubject");
    setActiveTest(0);
  };

  return (
    <>
      {!currentSubject ? (
        data.map((test) => (
          <SubjectBox
            key={test.subject}
            onClick={() => fetchingTests(test[test.subject])}
          >
            {test.subject}
          </SubjectBox>
        ))
      ) : (
        <TestsMainContainer>
          <BackBtn onClick={() => helperFunc()}>← Orqaga</BackBtn>

          <CircleBtnsContainer>
            {activeSubject?.map((_, i) => (
              <QueCircleBtn
                key={i}
                activetest={activeTest}
                index={i}
                onClick={() => changedTestFunc(i)}
              >
                {i + 1}
              </QueCircleBtn>
            ))}
          </CircleBtnsContainer>

          <TestText>
            {activeSubject[activeTest]?.question &&
              `${activeSubject[activeTest]?.question}?`}
          </TestText>

          <AnswerContainer>
            {activeSubject[activeTest]?.answers.map((answer, i) => (
              <AnswerBox
                key={i}
                onClick={() => getUserAnswer(i)}
                selectedtest={selectedTest}
                index={i}
              >
                {answer}
              </AnswerBox>
            )) || <Loading />}
          </AnswerContainer>
        </TestsMainContainer>
      )}
    </>
  );
}

export default Tests;
