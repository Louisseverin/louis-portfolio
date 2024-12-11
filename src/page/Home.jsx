import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  gap: 3rem; /* Added gap for better spacing between text and image */
`;

const ImageWrapper = styled.div`
  margin-left: 2rem;
`;

const ProfileImage = styled.img`
  width: 35rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 10px rgba(0, 255, 255, 0.2); /* Outer and inner shadows for 3D effect */
  border-radius: 15px; /* Smooth, rounded corners for a polished look */
  border: 1px solid transparent; /* Invisible border to contain gradient effect */
  background: linear-gradient(
    145deg,
    var(--color-cyan-light),
    var(--color-purple-light)
  ); /* Gradient for a metallic-like edge */
  padding: 5px; /* Space for the gradient edge */
  background-clip: padding-box; /* Ensures gradient only applies to the border area */
  transition: box-shadow 0.3s ease-in-out; /* Smooth interaction on hover */

  &:hover {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4),
      inset 0 0 15px rgba(0, 255, 255, 0.3); /* Enhance the shadow on hover */
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 45%;
`;

const IntroductionText = styled.p`
  font-size: 5rem; /* Increased size for more emphasis */
  color: var(--color-cyan-light);
  font-weight: bold; /* Added bold to make the text stand out */
  line-height: 1.2; /* Adjusted line height for better appearance */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Subtle shadow for text depth */
`;

const NameText = styled.span`
  font-size: 5rem;
  font-weight: bold;
  color: var(--color-brand-200);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  width: 0; /* Start with no visible content */
  border-right: 2px solid var(--color-brand-200); /* Typing cursor */
  animation: typing 3s steps(20, end), blink 0.5s step-end infinite alternate;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%; /* The text will be fully revealed */
    }
  }

  @keyframes blink {
    from {
      border-color: transparent;
    }
    to {
      border-color: var(--color-brand-200);
    }
  }

  /* Ensure text stays visible after typing completes */
  animation-fill-mode: forwards; /* Keeps the final state after animation */
`;

const SubHeading = styled.h2`
  font-size: 1.6rem;
  color: var(--color-grey-300);
  font-weight: normal;
  line-height: 1.8;
`;

const Button = styled.a`
  padding: 0.8rem 1.6rem;
  font-size: 1.2rem;
  color: var(--color-cyan-light);
  background: var(--color-purple-dark);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

function Home() {
  const navigate = useNavigate();
  return (
    <Section id="home">
      <TextWrapper>
        <IntroductionText>
          Hello! I'm <NameText>Louis Severin</NameText>
        </IntroductionText>
        <SubHeading>
          A software developer passionate about building scalable and
          user-friendly web applications. Specializing in React.js and
          JavaScript.
        </SubHeading>
        <Button onClick={() => navigate(`/about`)}>View More</Button>
      </TextWrapper>
      <ImageWrapper>
        <ProfileImage src="images/louis3.png" alt="Profile" />
      </ImageWrapper>
    </Section>
  );
}

export default Home;
