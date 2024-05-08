import React, { useState } from "react";
import { HeaderContainer, HeaderName, SubContainer } from "./Navigation.styles";
import { Link, Outlet } from "react-router-dom";
import headerLogo from "../../assets/img/favicon.png";
import Profile from "../Profile/Profile";
import Marquee from "../Marquee/Marquee";

function Navigation() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const NavLinks = [
    {
      id: 1,
      linkTo: "/test",
      element: "Test",
      title: "Testni Boshlash",
    },
    {
      id: 2,
      linkTo: "/teacher-section",
      element: "O'qituvchi",
      title: "O'qituvchi Bo'limi",
    },
    {
      id: 3,
      title: "Profil",
      element:
        (
          <i
            style={{ fontSize: "2.5rem", color: "#fff" }}
            className="fa-regular fa-circle-user"
          />
        ),
    },
  ];

  return (
    <>
      <Marquee text="Sayt test rejimida ishlamoqda!" />

      <HeaderContainer>
        <SubContainer>
          <Link
            to="/"
            title="Bosh sahifa"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={headerLogo} alt="ei logo" style={{ width: "3rem" }} />
            <HeaderName>Elektron Imtihon</HeaderName>
          </Link>

          <nav style={{ display: "flex", alignItems: "center" }}>
            {NavLinks.map((link) => {
              return (
                <Link
                  title={link?.title}
                  to={link?.linkTo}
                  key={link.id}
                  onClick={link.id === 3 ? () => setIsOpenModal(true) : null}
                  style={{
                    color: "#fff",
                    marginLeft: "2rem",
                    fontSize: "2rem",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  {link.element}
                </Link>
              );
            })}
          </nav>
        </SubContainer>
      </HeaderContainer>
      <Outlet />
      {isOpenModal && <Profile closeModal={() => setIsOpenModal(false)} />}
    </>
  );
}

export default Navigation;
