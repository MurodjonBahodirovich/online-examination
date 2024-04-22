import React, { Fragment, useEffect, useState } from "react";
import {
  ClassContainer,
  ClassText,
  ClassesContainer,
  ParentDiv,
  TestsContainer,
} from "./TestPage.styles";
import TestingSection from "./TestingSection";

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

  const [data, setData] = useState(null);
  const [classSelected, setClassSelected] = useState(
    localStorage.getItem("selectedClass")
      ? localStorage.getItem("selectedClass")
      : null
  );
  const [isActiveColor, setIsActiveColor] = useState(
    localStorage.getItem("activeColor")
      ? localStorage.getItem("activeColor")
      : "#fff"
  );
  const [currentSubject, setCurrentSubject] = useState(
    localStorage.getItem("currentSubject")
      ? localStorage.getItem("currentSubject")
      : false
  );

  const helperFunc = (classNum = "") => {
    setCurrentSubject(false);
    setClassSelected(classNum);
    setIsActiveColor("#001b51");
    localStorage.removeItem("currentSubject");
    localStorage.setItem("selectedClass", classNum);
    localStorage.setItem("activeColor", "#001b51");
  };

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `http://localhost:8000/${
          localStorage.getItem("selectedClass")
            ? localStorage.getItem("selectedClass")
            : classSelected
        }`
      );
      const res = await data.json();
      setData(res);
    })();
  }, [classSelected]);

  return (
    <Fragment>
      <ParentDiv>
        <ClassesContainer>
          {classNums.map((clas) => (
            <ClassContainer
              key={clas}
              onClick={() => helperFunc(clas)}
              classelected={classSelected}
              clas={clas}
            >
              <div style={{ width: "90%" }}>
                <ClassText
                  classelected={classSelected}
                  clas={clas}
                  colortext={isActiveColor}
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
                <i
                  className="fa-solid fa-file-import"
                  style={{
                    fontSize: "2rem",
                    color: `${classSelected === clas ? isActiveColor : "#fff"}`,
                  }}
                ></i>
              </div>
            </ClassContainer>
          ))}
        </ClassesContainer>
        <TestsContainer>
          <TestingSection
            data={data}
            classSelected={classSelected}
            currentSubject={currentSubject}
            currentSubjectFunc={setCurrentSubject}
          />
        </TestsContainer>
      </ParentDiv>
    </Fragment>
  );
}

export default ClassSelectingContainer;
