import Footer from "@/components/Footer/footer-email-template";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface RaycastMagicLinkEmailProps {
  magicLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const RaycastMagicLinkEmail = ({
  magicLink,
}: RaycastMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Acceso exclusivo para ti: emite tickets para tu evento ya 🎫
    </Preview>
    <Body style={main}>
      <Container style={container}>
      <Img
            alt="Digital Tickets logo"
            height="120"
            src="https://res.cloudinary.com/dkneova4f/image/upload/v1729258524/X_Cover_-_Digital_Tickets_uk3mtu.png"
            style={{
              width: "100%",
              borderRadius: 12,
              objectFit: "cover",
              marginBottom: "45px",
            }}
          />
        <Heading style={heading}>
          Acceso exclusivo, comienza a emitir tickets ahora!
          <br /> <br />
          Accede con tu Magic Link 🪄
        </Heading>
        <Section style={body}>
          <Text style={paragraph}>
            <Button
              href="https://react.email"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: 12,
                fontWeight: 600,
                borderRadius: 8,
                textAlign: "center",
                backgroundColor: "rgb(79,70,229)",
                color: "rgb(255,255,255)",
                marginBottom: "25px",
              }}
            >
              👉 Ingresa a la plataforma 👈
            </Button>

            <Link style={link} href={magicLink}></Link>
          </Text>
          <Text style={paragraph}>
            Como parte de nuestra beta exclusiva, te damos acceso anticipado
            para que seas de los primeros en probar Digital Tickets.
          </Text>
        </Section>
        <Text style={paragraph}>
          Con este acceso, podrás:
          <br /> <br />
          <ul>
            <li style={{ marginBottom: "20px" }}>
              <strong>
                Probar todas las funcionalidades antes del lanzamiento.{" "}
              </strong>
              <a
                href="#"
                style={{ color: "#067df7", textDecorationLine: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Probar funcionalidad
              </a>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <strong>Experimentar la emisión de tickets digitales.</strong>{" "}
              <a
                href="#"
                style={{ color: "#067df7", textDecorationLine: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Probar funcionalidad
              </a>
              .
            </li>
            <li style={{ marginBottom: "20px" }}>
              <strong>Validar entradas con nuestro sistema QR.</strong>{" "}
              <a
                href="#"
                style={{ color: "#067df7", textDecorationLine: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Probar funcionalidad
              </a>
              .
            </li>
          </ul>
          ¡No te lo pierdas! Sé parte de esta experiencia exclusiva y comienza a
          gestionar tus eventos de una manera más rápida y eficiente. <br /> <br />
          Actúa ahora y sé el primero en usar Digital Tickets. Estamos aquí para
          ayudarte en cada paso. <br /><br />
          Si tienes alguna duda, contáctanos. <br /><br />
          Saludos, El
          equipo de Digital Tickets
          <br />
        </Text>
        <Hr style={hr} />
        <Footer></Footer>
      </Container>
    </Body>
  </Html>
);

RaycastMagicLinkEmail.PreviewProps = {
  magicLink: "https://raycast.com",
} as RaycastMagicLinkEmailProps;

export default RaycastMagicLinkEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const link = {
  color: "#FF6363",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};
