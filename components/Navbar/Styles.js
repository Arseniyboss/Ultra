import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: ${({ theme }) =>
    theme === "dark" ? "var(--dark-theme)" : "var(--light-theme)"};
  box-shadow: ${({ theme }) =>
    theme === "light"
      ? "0px 0px 10px rgba(0, 0, 0, 0.3)"
      : "0px 0px 10px rgba(0, 0, 0, 1)"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  z-index: 999;
  top: 0;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)`
  color: ${({ theme }) =>
    theme === "dark" ? "var(--light-theme)" : "var(--dark-theme)"};
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) =>
      theme === "dark" ? "var(--light-theme)" : "var(--dark-theme)"};
  }
`;

export const NavMenuContainer = styled.div`
  display: flex;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme }) =>
      theme === "dark" ? "var(--dark-theme)" : "var(--light-theme)"};
  }
`;

export const NavMenuLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  &:hover,
  &.active {
    opacity: 0.6;
    transition: all 0.3s ease;
  }
`;

const slideRight = () => {
  return keyframes`
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
  `;
};

export const NavItem = styled.li`
  color: ${({ theme }) =>
    theme === "dark" ? "var(--light-theme)" : "var(--dark-theme)"};
  padding: 1rem;

  @media screen and (max-width: 960px) {
    opacity: 0;
    animation: ${({ click }) => click && slideRight} 0.5s ease-in-out forwards;
    padding: 2rem;
    width: 100%;
    display: table;
  }

  @media screen and (max-height: 430px) {
    padding: 1.8rem;
  }

  @media screen and (max-height: 400px) {
    padding: 1.6rem;
  }

  @media screen and (max-height: 380px) {
    padding: 1.4rem;
  }

  @media screen and (max-height: 360px) {
    padding: 1.2rem;
  }

  @media screen and (max-height: 340px) {
    padding: 1rem;
  }

  @media screen and (max-height: 320px) {
    padding: 0.8rem;
  }

  @media screen and (max-height: 300px) {
    padding: 0.6rem;
  }

  /* &:hover {
    opacity: 0.6;
    transition: all 0.3s ease;
  } */
`;

export const ThemeIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${({ theme }) =>
    theme === "dark" ? "var(--light-theme)" : "var(--dark-theme)"};

  @media screen and (max-width: 960px) {
    margin-right: 3rem;
  }
`;
