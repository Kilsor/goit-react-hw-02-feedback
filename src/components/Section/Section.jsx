import { SectionContainer, SectionTitle } from '../Section/Section.styled';

export const Section = ({ title, children }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionContainer>
);
