import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
const ProjectsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1920px;
  padding: 2rem;
  background: linear-gradient(135deg, var(--color-grey-900));
`;

const Heading = styled(motion.div)`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: var(--color-cyan-light);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two items per row by default */
  gap: 2rem;
  place-items: center;
  justify-items: center; /* Horizontally center the items */
  align-items: center; /* Vertically center the items */
  width: 100%;
  max-width: 900px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* One item per row on smaller screens */
  }
`;

const ProjectCardContainer = styled.a`
  position: relative;
  height: 300px;
  width: 400px;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

const ProjectImage = styled.div`
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;

  ${ProjectCardContainer}:hover & {
    opacity: 1;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    260deg,
    rgba(0, 0, 0, 0) 0%,
    var(--color-cyan-light) 100%
  );
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${ProjectCardContainer}:hover & {
    opacity: 1;
  }
`;

const ProjectName = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: var(--color-grey-600);
`;

const ProjectDesc = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 1rem;
  color: var(--color-grey-600);
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: var(--color-cyan);
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: var(--color-cyan-dark);
  }
`;

function Projects() {
  const projectData = [
    {
      imageSrc: "images/fastreact.png",
      projectName: "Fast React Pizza",
      projectDesc:
        "This is a small web application built with tailwind css in reactjs for odering pizza, It includes the use of Redux and advanced react router.",
      link: "https://fast-reacct-pizza.vercel.app/",
    },
    {
      imageSrc: "images/thewildoasis.png",
      projectName: "The Wild Oasis",
      projectDesc:
        "This is a stunning web application built with styled components. It's an applicaiton for a hotel called The Wild Oasis to manage the bookings, cabins and guests.",
      link: "https://the-wild-oasis-seven-jet.vercel.app/",
    },
    {
      imageSrc: "images/pr3.jpg",
      projectName: "GRAPHIC DESIGN",
      projectDesc:
        "The portfolio features a creative layout with dynamic grid arrangements, interactive elements, and high-resolution images of design projects.",
      link: "https://example.com/project3",
    },
    {
      imageSrc: "images/pr4.webp",
      projectName: "TRAVEL",
      projectDesc:
        "The website includes stunning travel photography, engaging travel stories, and an interactive map highlighting travel destinations.",
      link: "https://example.com/project4",
    },
  ];

  return (
    <ProjectsSection id="project">
      <Heading
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        PROJECTS
      </Heading>
      <ProjectsGrid>
        {projectData.map((project, index) => (
          <ProjectCardContainer
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectImage imageSrc={project.imageSrc} />
            <ProjectOverlay>
              <ProjectName>{project.projectName}</ProjectName>
              <ProjectDesc>{project.projectDesc}</ProjectDesc>
              <Button
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Button>
            </ProjectOverlay>
          </ProjectCardContainer>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;
