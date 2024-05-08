import React, { Fragment, useEffect, useReducer } from "react";
import {
  ClassContainer,
  ClassText,
  ClassesContainer,
  ParentDiv,
  TestsContainer,
} from "./TestPage.styles";
import TestingSection from "./TestingSection";
import { produce } from "immer";

const ACTION_TYPES = {
  data: "DATA",
  selectedClass: "SELECTED_CLASS",
  activeColor: "IS_ACTIVE_COLOR",
  currentSubject: "CURRENT_SUBJECT",
};

const classReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.data:
      state.data = action.payload;
      break;
    case ACTION_TYPES.selectedClass:
      state.selectedClass = action.payload;
      break;
    case ACTION_TYPES.activeColor:
      state.isActiveColor = action.payload;
      break;
    case ACTION_TYPES.currentSubject:
      state.currentSubject = action.payload;
      break;
    default:
      return;
  }
};

const INITIAL_VALUE = {
  data: null,
  selectedClass: localStorage.getItem("selectedClass")
    ? localStorage.getItem("selectedClass")
    : null,
  isActiveColor: localStorage.getItem("activeColor")
    ? localStorage.getItem("activeColor")
    : "#fff",
  currentSubject: localStorage.getItem("currentSubject")
    ? localStorage.getItem("currentSubject")
    : false,
};

function ClassSelectingContainer() {
  const classNums = [
    "1-sinf",
    "2-sinf",
    "3-sinf",
    "4-sinf",
    "5-sinf",
    "6-sinf",
    "7-sinf",
    "8-sinf",
    "9-sinf",
    "10-sinf",
    "11-sinf",
  ];

  const [state, dispatch] = useReducer(produce(classReducer), INITIAL_VALUE);

  const helperFunc = (classNum) => {
    dispatch({
      type: ACTION_TYPES.currentSubject,
      payload: false,
    });
    dispatch({
      type: ACTION_TYPES.selectedClass,
      payload: classNum,
    });
    dispatch({
      type: ACTION_TYPES.activeColor,
      payload: "#001b51",
    });
    localStorage.removeItem("currentSubject");
    localStorage.setItem("selectedClass", classNum);
    localStorage.setItem("activeColor", "#001b51");
  };

  useEffect(() => {
    state.selectedClass &&
      (async () => {
        const data = await fetch(
          `http://localhost:8000/${
            localStorage.getItem("selectedClass")
              ? localStorage.getItem("selectedClass")
              : state.selectedClass
          }`
        );
        const res = await data.json();
        dispatch({
          type: ACTION_TYPES.data,
          payload: res,
        });
      })();
  }, [state.selectedClass]);

  return (
    <Fragment>
      <ParentDiv>
        <ClassesContainer>
          {classNums.map((clas) => (
            <ClassContainer
              key={clas}
              onClick={() => helperFunc(clas)}
              classelected={state.selectedClass}
              clas={clas}
            >
              <div style={{ width: "90%" }}>
                <ClassText
                  classelected={state.selectedClass}
                  clas={clas}
                  colortext={state.isActiveColor}
                >
                  ☑️ {clas}
                </ClassText>
              </div>
              <div
                style={{
                  width: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {
                  <i
                    className="fa-solid fa-file-import"
                    style={{
                      fontSize: "2rem",
                      color: `${
                        state.selectedClass === clas
                          ? `${state.isActiveColor}`
                          : "#fff"
                      }`,
                    }}
                  ></i>
                }
              </div>
            </ClassContainer>
          ))}
        </ClassesContainer>
        <TestsContainer>
          <TestingSection
            data={state.data}
            selectedClass={state.selectedClass}
            currentSubject={state.currentSubject}
            currentSubjectFunc={dispatch}
          />
        </TestsContainer>
      </ParentDiv>
    </Fragment>
  );
}

export default ClassSelectingContainer;
