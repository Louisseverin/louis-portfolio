import React from "react";
import styled from "styled-components";

// Styled Components
const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background-color: var(--color-grey-900);
  border-top: 2px solid var(--color-grey-700);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-50);
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

const CopyrightText = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-400);
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;

const SocialLink = styled.li`
  font-size: 1.6rem;

  a {
    color: var(--color-cyan-light);
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-cyan);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>
          &copy; 2024 Louis Severin Iyodusenga. All Rights Reserved.
        </CopyrightText>
        <SocialLinks>
          <SocialLink>
            <a
              href="https://www.linkedin.com/in/louis-50a655292"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </SocialLink>
          {/* You can add more social links here */}
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
