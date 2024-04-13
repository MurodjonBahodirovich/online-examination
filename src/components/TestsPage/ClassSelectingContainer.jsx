import React, { Fragment } from "react";
import { ClassesContainer, TestsContainer } from "./TestPage.styles";

function ClassSelectingContainer() {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ClassesContainer></ClassesContainer>
        <TestsContainer></TestsContainer>
      </div>
    </Fragment>
  );
}

export default ClassSelectingContainer;
