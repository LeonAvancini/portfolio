import Container from "../../components/Container";
import Section from "../../components/Section";
import Separator from "../../components/Separator";
import InfoSection from "../../components/Section/InfoSection";

export const Contact = () => {
  return (
    <Container>
      <Section title="Contacto">
        <InfoSection>Info 1</InfoSection>
        <Separator />
        <InfoSection>Info 2</InfoSection>
        <Separator />
        <InfoSection>Info 3</InfoSection>
      </Section>
    </Container>
  );
};

export default Contact;
