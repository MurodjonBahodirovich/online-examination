import React, { useEffect, useReducer } from "react";
import {
  AnswerBox,
  AnswerContainer,
  BackBtn,
  CircleBtnsContainer,
  EndTestingBtn,
  QueCircleBtn,
  SubjectBox,
  TestText,
  TestsMainContainer,
} from "./Tests.styles";
import Loading from "../Loading/Loading";
import { produce } from "immer";

const ACTION_TYPES = {
  activeSubject: "ACTIVE_SUBJECT",
  activeTest: "ACTIVE_TEST",
  userAnswers: "USER_ANSWERS",
  selectedTest: "SELECTED_TEST",
};

const INITIAL_VALUE = {
  activeSubject: localStorage.getItem("questions")
    ? JSON.parse(localStorage.getItem("questions"))
    : null,
  activeTest: localStorage.getItem("answer")
    ? Object.keys(JSON.parse(localStorage.getItem("answer"))).length
    : 0,
  userAnswers: localStorage.getItem("answer")
    ? JSON.parse(localStorage.getItem("answer"))
    : {},
  selectedTest: null,
};

const testReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.activeSubject:
      state.activeSubject = action.payload;
      break;
    case ACTION_TYPES.activeTest:
      state.activeTest = action.payload;
      break;
    case ACTION_TYPES.userAnswers:
      state.userAnswers[action.payload[0]] = action.payload[1];
      localStorage.setItem("answer", JSON.stringify(state.userAnswers));
      break;
    case ACTION_TYPES.selectedTest:
      state.selectedTest = action.payload;
      break;
    default:
      return;
  }
};

function Tests({ data, currentSubject, currentSubjectFunc }) {
  const [state, dispatch] = useReducer(produce(testReducer), INITIAL_VALUE);

  const getUserAnswer = (i) => {
    dispatch({
      type: ACTION_TYPES.selectedTest,
      payload: i,
    });

    dispatch({
      type: ACTION_TYPES.userAnswers,
      payload: [state.activeTest, i],
    });
  };

  useEffect(() => {
    state.userAnswers?.length &&
      localStorage.setItem("userAnswer", JSON.stringify(state.userAnswers));
  }, [state.userAnswers]);

  const fetchingTests = async (subject) => {
    currentSubjectFunc({
      type: "CURRENT_SUBJECT",
      payload: true,
    });
    localStorage.setItem("questions", JSON.stringify(subject));
    localStorage.setItem("currentSubject", currentSubject);

    dispatch({
      type: ACTION_TYPES.activeSubject,
      payload: subject,
    });
  };

  const changedTestFunc = (i) => {
    dispatch({
      type: ACTION_TYPES.activeTest,
      payload: i,
    });
    localStorage.setItem("activeTest", i);
    dispatch({
      type: ACTION_TYPES.selectedTest,
      payload: JSON.parse(localStorage.getItem("answer"))
        ? JSON.parse(localStorage.getItem("answer"))[
            localStorage.getItem("activeTest")
          ]
        : null,
    });
  };

  const helperFunc = () => {
    localStorage.removeItem("answer");
    localStorage.removeItem("activeTest");
    localStorage.removeItem("questions");
    currentSubjectFunc({
      type: "CURRENT_SUBJECT",
      payload: false,
    });
    localStorage.removeItem("currentSubject");
    dispatch({
      type: ACTION_TYPES.activeTest,
      payload: 0,
    });
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
          <EndTestingBtn
            onClick={() =>
              alert(
                "Sayt test rejimida ishlayotganligi sababli hozircha testingizni yakunlay olmaysiz!"
              )
            }
          >
            Yakunlash ✓
          </EndTestingBtn>

          <CircleBtnsContainer>
            {state.activeSubject?.map((_, i) => (
              <QueCircleBtn
                key={i}
                activetest={state.activeTest}
                index={i}
                onClick={() => changedTestFunc(i)}
              >
                {i + 1}
              </QueCircleBtn>
            ))}
          </CircleBtnsContainer>

          <TestText>
            {state.activeSubject[state.activeTest]?.question &&
              `${state.activeSubject[state.activeTest]?.question}?`}
          </TestText>

          <AnswerContainer>
            {state.activeSubject[state.activeTest]?.answers.map((answer, i) => (
              <AnswerBox
                key={i}
                onClick={() => getUserAnswer(i)}
                selectedtest={state.selectedTest}
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
