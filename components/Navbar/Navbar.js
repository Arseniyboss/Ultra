import { useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { ImSun } from "react-icons/im";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenuContainer,
  NavMenu,
  NavMenuLink,
  NavItem,
  ThemeIcons,
} from "./Styles";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const { theme, toggleTheme } = useThemeContext();

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <Nav theme={theme}>
      <NavbarContainer>
        <NavLogo
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={closeMobileMenu}
          theme={theme}
        >
          ULTRA
        </NavLogo>
        <MobileIcon onClick={handleClick} theme={theme}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenuContainer>
          <NavMenu click={click} theme={theme}>
            <NavMenuLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
            >
              <NavItem
                theme={theme}
                click={click}
                style={{ animationDelay: "var(--animation-delay)" }}
              >
                Home
              </NavItem>
            </NavMenuLink>
            <NavMenuLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
            >
              <NavItem
                theme={theme}
                click={click}
                style={{
                  animationDelay: "calc(var(--animation-delay) * 2)",
                }}
              >
                About
              </NavItem>
            </NavMenuLink>
            <NavMenuLink
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
            >
              <NavItem
                theme={theme}
                click={click}
                style={{
                  animationDelay: "calc(var(--animation-delay) * 3)",
                }}
              >
                Services
              </NavItem>
            </NavMenuLink>
            <NavMenuLink
              to="signup"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
            >
              <NavItem
                theme={theme}
                click={click}
                style={{
                  animationDelay: "calc(var(--animation-delay) * 4)",
                }}
              >
                Sign Up
              </NavItem>
            </NavMenuLink>
          </NavMenu>
          <ThemeIcons onClick={toggleTheme} theme={theme}>
            {theme === "dark" ? <ImSun /> : <FaMoon />}
          </ThemeIcons>
        </NavMenuContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
