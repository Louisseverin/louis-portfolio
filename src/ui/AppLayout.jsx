import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

// Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7rem;
  min-height: 100vh;
  /* Overall background color */
`;

const MainContent = styled.main`
  flex: 1;
  color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  background-color: var(--color-grey-900);
  align-items: center;

  box-shadow: 0 10px 10px var(--color-grey-800);
  /* Subtle shadow for the whole main content */

  /* Pseudo-elements for gradient borders */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    /* width: 12px; Thickness of the gradient border */
    background: linear-gradient(
      to bottom,
      var(--color-cyan),
      var(--color-purple-light),
      var(--color-cyan)
    ); /* Gradient effect */
    box-shadow: 0 10px 10px var(--color-grey-800); /* Subtle shadow to enhance the border effect */
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    box-shadow: 0 -2px 6px var(--color-grey-800);
  }
`;

const ContentWrapper = styled.div`
  width: 100%; /* Restrict content width to 70% */
  @media (max-width: 768px) {
    width: 90%; /* Adjust to 90% on smaller screens */
  }
`;

const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-dark); /* Fixed header background */
  color: var(--color-cyan-light);
  z-index: 1000; /* Ensure header stays on top */
  box-shadow: var(--shadow-lg); /* Add subtle shadow to make header stand out */
`;

function AppLayout() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainContent>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </MainContent>
      <Footer />
    </Wrapper>
  );
}

export default AppLayout;
