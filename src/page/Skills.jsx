import React from "react";
import styled from "styled-components";
import { FaReact, FaNode, FaGit } from "react-icons/fa"; // React-icons for the icons
import { SiCsharp, SiJavascript, SiMongodb } from "react-icons/si"; // Additional icons for C#, JavaScript, and MongoDB

// Styled Components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding: 4rem 2rem;
  background-color: var(--color-grey-900);
  color: var(--color-grey-50);
`;

const SectionTitle = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  color: var(--color-cyan-light);
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background-color: var(--color-grey-800);
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: var(--color-grey-700);
    box-shadow: var(--shadow-lg);
  }
`;

const SkillIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-cyan);
`;

const SkillTitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-grey-50);
`;

const SkillDescription = styled.p`
  font-size: 1.2rem;
  color: var(--color-grey-400);
`;

function Skills() {
  const skillsData = [
    {
      icon: <FaReact />,
      title: "React JS",
      description:
        "Experienced in building scalable, responsive web apps. Strong in modular design, state management, and performance optimization. Skilled in API integration and testing. Ready to elevate your projects with React.js expertise.",
    },
    {
      icon: <FaNode />,
      title: "Node JS",
      description:
        "Experienced in server-side development with a focus on building scalable applications. Strong in modular design, REST API creation, and event-driven architectures.",
    },
    {
      icon: <SiCsharp />,
      title: "C#",
      description:
        "Proficient in building robust desktop and web applications with C#. Expertise in object-oriented programming, LINQ, and integrating with databases.",
    },
    {
      icon: <SiJavascript />,
      title: "JavaScript",
      description:
        "Versatile in front-end and back-end development using JavaScript. Skilled in modern ES6+ features, asynchronous programming, and building dynamic web applications.",
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB",
      description:
        "Proficient in using MongoDB for scalable, document-based database solutions. Skilled in schema design, data modeling, and optimizing queries for performance.",
    },
    {
      icon: <FaGit />,
      title: "Git",
      description:
        "Proficient in version control using Git. Experienced with branching strategies, pull requests, and maintaining collaborative workflows across teams.",
    },
  ];

  return (
    <Section id="skills">
      <SectionTitle>CORE SKILLS</SectionTitle>
      <SkillsGrid>
        {skillsData.map(({ icon, title, description }) => (
          <SkillCard key={title}>
            <SkillIcon>{icon}</SkillIcon>
            <SkillTitle>{title}</SkillTitle>
            <SkillDescription>{description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
}

export default Skills;
