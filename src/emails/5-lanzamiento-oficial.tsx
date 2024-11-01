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
    <Preview>Faltan 24 horas … Lanzamiento oficial</Preview>
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
          🎉 Aprovecha un 50% de descuento en tu primera compra
          <br /> <br />
          tus primeros 1000 tickets
        </Heading>
        <Section style={body}>
          <Text style={paragraph}>
            En solo 24 horas, Digital Tickets estará oficialmente disponible, y
            queremos que seas de los primeros en aprovechar esta oportunidad.
            <br />
            <br />
            Por tiempo limitado, obtén un 50% de descuento en tu 1ra compra al
            usar Digital Tickets para gestionar tus eventos.
          </Text>
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
              👉 Usar descuento del 50% ahora 👈
            </Button>
          </Text>
        </Section>
        <Text style={paragraph}>
          Con esta oferta, podrás:
          <br /> <br />
          <ul>
            <li style={{ marginBottom: "20px" }}>
              <strong>
                Vender y validar entradas de manera rápida y segura. {""}
              </strong>
              <a
                href="#"
                style={{ color: "#067df7", textDecorationLine: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                click para obtener descuento
              </a>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <strong>
                Simplificar todo el proceso de gestión de eventos.
              </strong>{" "}
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
              <strong>Disfrutar de todas nuestras funciones premium.</strong>{" "}
              <a
                href="#"
                style={{ color: "#067df7", textDecorationLine: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Obtener Descuento
              </a>
              .
            </li>
          </ul>
          No esperes más, esta es tu oportunidad para llevar tus eventos al
          siguiente nivel. Haz clic en el enlace y comienza a disfrutar de los
          beneficios hoy mismo. <br /> <br />
          <strong>El descuento termina en 48 horas, ¡aprovéchalo ahora! </strong>
          <br />
          <br />
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
              👉 Usar descuento del 50% ahora 👈
            </Button>
          Si tienes alguna duda, contáctanos. <br />
          <br />
          Saludos, El equipo de Digital Tickets
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
