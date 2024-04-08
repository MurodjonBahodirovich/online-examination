import React, { Fragment } from "react";
import { Container, HomePageContentParent, HomePageText } from "./Home.styles";
import HomeLogo from "../../../assets/img/hi-logo.png";
import { Link } from "react-router-dom";

function Home() {
  const btnStyle = {
    padding: "1rem 3rem",
    borderRadius: "10px",
    color: "#333",
    fontFamily: "monospace",
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
          {/* <img
            src={HomeLogo}
            alt=""
            style={{
              width: "75rem",
              height: "50rem",
              marginTop: "10rem",
              marginLeft: "2rem",
            }}
          /> */}

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
