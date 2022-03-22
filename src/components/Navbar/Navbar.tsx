import React from "react";
import {
  NavbarWrapper,
  NavButtons,
  NavItem,
  Title,
  TitleWrapper,
} from "./Navbar.style";
import leaf from "./../../assets/leaf-head.svg";
import home from "./../../assets/home.svg";
import doc from "./../../assets/paper.svg";
import about from "./../../assets/about.svg";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isPaper = location.pathname === "/paper";
  const isAbout = location.pathname === "/about";
  return (
    <>
      <NavbarWrapper>
        <TitleWrapper>
          <img src={leaf} alt='plant disease'></img>
          <Title>
            <h1>Plant Disease</h1>
            <p>detection via AI</p>
          </Title>
        </TitleWrapper>
        <NavButtons>
          <Link to='/'>
            <NavItem src={home} alt='home' title='home' active={isHome} />
          </Link>
          <Link to='/paper'>
            <NavItem src={about} alt='about' title='about' active={isPaper} />
          </Link>
          <Link to='/about'>
            <NavItem src={doc} alt='doc' title='term paper' active={isAbout} />
          </Link>
        </NavButtons>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
