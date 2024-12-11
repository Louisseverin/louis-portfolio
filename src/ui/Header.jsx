import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom"; // Import NavLink from React Router
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalSylyes";

// Styled Components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2%;
  padding-left: 10%;
  padding-right: 10%;
  position: fixed;
  width: 100%;
  z-index: 10;
  flex-direction: row;
  gap: 17rem;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Logo = styled.img`
  height: 5rem;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 0.8rem;
  background-color: var(--color-dark);
  border-radius: 2.5rem;
  border: 2px solid var(--color-grey-300);
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const NavItem = styled.li``;

const NavLink = styled(RouterNavLink)`
  // Styled NavLink for React Router
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--color-grey-50);
  transition: color 0.3s, border-bottom 0.3s;

  &.active {
    color: var(--color-cyan);
    border-bottom: 2px solid var(--color-cyan);
  }

  &:hover {
    color: var(--color-cyan);
  }
`;

function Header() {
  return (
    <>
      <GlobalStyles />
      <HeaderWrapper>
        <LogoContainer>
          <Logo src="images/cheers-svgrepo-com.svg" alt="Logo" />
        </LogoContainer>

        <NavContainer>
          <NavList>
            {[
              { label: "Home", to: "/home" },
              { label: "About", to: "/about" },
              { label: "Skills", to: "/skills" },
              { label: "Projects", to: "/projects" },
              { label: "Contact", to: "/contact" },
            ].map(({ to, label }) => (
              <NavItem key={to}>
                <NavLink to={to} activeClassName="active">
                  {label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavContainer>
      </HeaderWrapper>
    </>
  );
}

export default Header;
