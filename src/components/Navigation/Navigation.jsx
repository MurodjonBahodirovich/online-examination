import React from "react";
import { HeaderContainer, HeaderName, SubContainer } from "./Navigation.styles";
import { Link, Outlet } from "react-router-dom";
import headerLogo from "../../assets/img/favicon.png";

function Navigation() {
  const NavLinks = [
    {
      id: 1,
      linkTo: "/test",
      element: "Test",
    },
    {
      id: 2,
      linkTo: "/result",
      element: "Natija",
    },
    {
      id: 3,
      linkTo: "/profile",
      element: (
        <i
          style={{ fontSize: "2.5rem", color: "#000" }}
          className="fa-regular fa-circle-user"
        />
      ),
    },
  ];

  return (
    <>
      <HeaderContainer>
        <SubContainer>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={headerLogo} alt="header logo" style={{ width: "3rem" }} />
            <HeaderName>Elektron Imtihon</HeaderName>
          </Link>

          <nav style={{ display: "flex", alignItems: "center" }}>
            {NavLinks.map((link) => {
              return (
                <Link
                  to={link.linkTo}
                  key={link.id}
                  style={{
                    color: "#000",
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
    </>
  );
}

export default Navigation;
