import React, { Fragment } from "react";
import { Container, HomePageContentParent, HomePageText } from "./Home.styles";
import { Link } from "react-router-dom";

function Home() {
  localStorage.clear();
  const btnStyle = {
    padding: "1rem 3rem",
    borderRadius: "10px",
    color: "#333",
    fontFamily: "Reem Kufi Fun",
    textDecoration: "none",
    backgroundColor: "#f6ff00",
    fontSize: "2rem",
    cursor: "pointer",
    userSelect: "none",
  };

  return (
    <Fragment>
      <Container>
        <HomePageContentParent>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HomePageText>
              Salom aziz o'quvchi. <br />
              Keling birga savol-javob qilamiz!
            </HomePageText>
            <Link style={btnStyle} to="/test">
              Testni Boshlash →
            </Link>
          </div>
        </HomePageContentParent>
      </Container>
    </Fragment>
  );
}

export default Home;
