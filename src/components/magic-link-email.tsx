import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import Footer from "./Footer/footer-email-template";

interface LinearLoginCodeEmailProps {
  validationCode?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const LinearLoginCodeEmail = ({
  validationCode,
}: LinearLoginCodeEmailProps) => (
  <Html>
    <Head />
    <Preview>Magic link - Digital Tickets</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://res.cloudinary.com/dkneova4f/image/upload/v1729258369/icon_sfioaq.png`}
          width="52"
          height="52"
          alt="Linear"
          style={logo}
        />
        <Heading style={heading}>Tú Magic Link está listo</Heading>
        <Text style={paragraph}>
          Te damos la bienvenida, Conoce nuestra plataforma de tickets dando click al Link abajo:
        </Text>
        <Section style={buttonContainer}>
          <Button style={button} href="https://digitaltickets.co/">
            Abre Tú Magic Link
          </Button>
        </Section>

        {/* <code style={code}>{validationCode}</code> */}
        <Hr style={hr} />
        <Link href="https://digitaltickets.co/" style={reportLink}>
          Digital Tickets
        </Link>
        <Footer></Footer>
        
      </Container>
    </Body>
  </Html>
);

LinearLoginCodeEmail.PreviewProps = {
  validationCode: "tt226-5398x",
} as LinearLoginCodeEmailProps;

export default LinearLoginCodeEmail;

const logo = {
  borderRadius: 21,
  width: 62,
  height: 62,
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const buttonContainer = {
  padding: "27px 0 27px",
};

const button = {
  backgroundColor: "#ffd700",
  borderRadius: "3px",
  fontWeight: "600",
  color: "black",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "11px 23px",
};

const reportLink = {
  fontSize: "14px",
  color: "#b4becc",
};

const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0 26px",
};

const code = {
  fontFamily: "monospace",
  fontWeight: "700",
  padding: "1px 4px",
  backgroundColor: "#dfe1e4",
  letterSpacing: "-0.3px",
  fontSize: "21px",
  borderRadius: "4px",
  color: "#3c4149",
};
