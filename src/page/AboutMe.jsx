import React from "react";
import styled from "styled-components";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiCplusplus,
  SiCsharp,
  SiOracle,
  SiPostman,
} from "react-icons/si";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-grey-0);
`;

const SubText = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-grey-200);

  a {
    color: var(--color-cyan);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionHeader = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--color-grey-50);
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  text-align: center;
  color: var(--color-grey-400);
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled.div`
  border: 1px solid var(--color-grey-600);
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
  text-align: center;
  background-color: var(--color-grey-800);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: var(--shadow-lg);
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-100);
  }
  svg {
    font-size: 3rem;
    color: var(--color-cyan);
  }
`;

const CertificationLink = styled.a`
  color: var(--color-cyan);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const skills = [
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C#", icon: <SiCsharp /> },
  { name: "Oracle Database", icon: <SiOracle /> },
  { name: "Postman", icon: <SiPostman /> },
];

function AboutMe() {
  return (
    <Container>
      <Header>Meet Louis Severin Iyodusenga</Header>
      <SubText>Full-stack Developer</SubText>
      <SubText>Markham, ON | +1(581)443 0282</SubText>
      <SubText>
        <a href="mailto:louisseverin2001@gmail.com">
          louisseverin2001@gmail.com
        </a>
      </SubText>
      <SubText>
        <a
          href="https://www.linkedin.com/in/louis-50a655292/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </SubText>

      <Section>
        <SectionHeader>Professional Summary</SectionHeader>
        <Paragraph>
          <SkillCard>
            I am an experienced Full-stack Developer specializing in Node.js and
            React.js, with a proven track record of delivering innovative
            solutions. I thrive on solving complex challenges through
            programming, aiming to create tools and applications that empower
            users and make a positive impact.
          </SkillCard>
        </Paragraph>
      </Section>

      <Section>
        <SectionHeader>Skills</SectionHeader>
        <SkillGrid>
          {skills.map((skill) => (
            <SkillCard key={skill.name}>
              {skill.icon}
              <h3>{skill.name}</h3>
            </SkillCard>
          ))}
        </SkillGrid>
      </Section>

      <Section>
        <SectionHeader>Education</SectionHeader>
        <SkillCard>
          <h3>Associate of Science: Software Engineering</h3>
          <Paragraph>
            Centennial College of Applied Arts And Technology - Scarborough, ON
          </Paragraph>
          <Paragraph>Graduated: 06/2023</Paragraph>
        </SkillCard>
      </Section>

      <Section>
        <SectionHeader>Languages</SectionHeader>
        <SkillGrid>
          {[
            { language: "English", level: "Full Professional" },
            { language: "French", level: "Professional Working" },
          ].map((lang) => (
            <SkillCard key={lang.language}>
              <h3>{lang.language}</h3>
              <Paragraph>{lang.level}</Paragraph>
            </SkillCard>
          ))}
        </SkillGrid>
      </Section>

      <Section>
        <SectionHeader>Certifications</SectionHeader>
        <SkillGrid>
          {[
            {
              name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
              date: "August 2024",
              link: "https://www.udemy.com/certificate/UC-96a0d4c1-7895-45bb-bab4-a4edad68f4db/",
            },
            {
              name: "The Complete JavaScript Course 2024: From Zero to Expert!",
              date: "September 2024",
              link: "https://www.udemy.com/certificate/UC-0d75f0f1-282b-4508-92c2-ddb846967300/",
            },
          ].map((cert) => (
            <SkillCard key={cert.name}>
              <h3>{cert.name}</h3>
              <Paragraph>{cert.date}</Paragraph>
              <CertificationLink
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </CertificationLink>
            </SkillCard>
          ))}
        </SkillGrid>
      </Section>

      <Section>
        <SectionHeader>Experience</SectionHeader>
        <SkillCard>
          <h3>Kigali Flower Child, Rwanda</h3>
          <Paragraph>January 2020 – August 2023</Paragraph>
          <ul>
            <li>
              Designed, developed, and maintained our e-commerce website using
              modern web technologies.
            </li>
            <li>
              Ensured the website is mobile-friendly, fast, and SEO-optimized.
            </li>
            <li>
              Collaborated with the marketing team to create visually appealing
              landing pages.
            </li>
            <li>
              Developed and executed a social media strategy focusing on
              engaging content.
            </li>
          </ul>
        </SkillCard>
      </Section>
    </Container>
  );
}

export default AboutMe;
