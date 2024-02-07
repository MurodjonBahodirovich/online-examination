import React from "react";
import { HeaderContainer, HeaderName, SubContainer } from "./Header.styles";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <SubContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HeaderName>Elektron Imtihon</HeaderName>
        </Link>
      </SubContainer>
    </HeaderContainer>
  );
}

export default Header;
