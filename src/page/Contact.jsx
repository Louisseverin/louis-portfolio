import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"; // Importing the icons

// Styled Components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  background-color: var(--color-grey-900);
  color: var(--color-grey-50);
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: var(--color-brand-100);
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SocialMediaSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-brand-200);
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Card = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-800);
  padding: 1rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-grey-700);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--color-grey-50);
`;

const CardDescription = styled.p`
  font-size: 1.2rem;
  color: var(--color-grey-400);
`;

const CardIcon = styled.div`
  font-size: 2.5rem; // Size of the icon
  color: var(--color-grey-50); // Icon color
`;

const FormWrapper = styled.div`
  flex: 1;
  background-color: var(--color-grey-800);
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const FormTitle = styled.p`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  color: var(--color-brand-200);
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.4rem;
  background-color: var(--color-grey-900);
  color: var(--color-grey-50);
  border: 1px solid var(--color-grey-700);
  border-radius: var(--border-radius-md);
  outline: none;

  &:focus {
    border-color: var(--color-brand-600);
    box-shadow: 0 0 0 3px var(--color-brand-200);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem;
  font-size: 1.4rem;
  background-color: var(--color-grey-900);
  color: var(--color-grey-50);
  border: 1px solid var(--color-grey-700);
  border-radius: var(--border-radius-md);
  outline: none;

  &:focus {
    border-color: var(--color-brand-600);
    box-shadow: 0 0 0 3px var(--color-brand-200);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--color-brand-500);
  color: var(--color-grey-50);
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-brand-600);
  }
`;

function Contact() {
  const socialMediaData = [
    {
      title: "LinkedIn",
      description: "Professional social profile",
      icon: <FaLinkedin />, // Use LinkedIn icon from react-icons
      link: "https://www.linkedin.com/in/yourprofile",
    },
    {
      title: "Instagram",
      description: "Image-based social communications",
      icon: <FaInstagram />, // Use Instagram icon from react-icons
      link: "https://www.instagram.com",
    },
    {
      title: "Twitter",
      description: "Random thoughts",
      icon: <FaTwitter />, // Use Twitter icon from react-icons
      link: "https://www.twitter.com",
    },
    {
      title: "WhatsApp",
      description: "Quick Text",
      icon: <FaWhatsapp />, // Use WhatsApp icon from react-icons
      link: "https://wa.me/15814430282",
    },
  ];

  return (
    <Section id="contacts">
      <Heading>CONTACT US</Heading>
      <SubSection>
        {/* Social Media Section */}
        <SocialMediaSection>
          <SectionTitle>SOCIAL MEDIA</SectionTitle>
          <p>Let's Be Friends</p>
          <CardGrid>
            {socialMediaData.map((social, idx) => (
              <Card
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardContent>
                  <CardTitle>{social.title}</CardTitle>
                  <CardDescription>{social.description}</CardDescription>
                </CardContent>
                <CardIcon>{social.icon}</CardIcon> {/* Display icon here */}
              </Card>
            ))}
          </CardGrid>
        </SocialMediaSection>

        {/* Contact Form Section */}
        <FormWrapper>
          <FormTitle>Send us a quick message</FormTitle>
          <Form>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea placeholder="Your Message" required />
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </FormWrapper>
      </SubSection>
    </Section>
  );
}

export default Contact;
