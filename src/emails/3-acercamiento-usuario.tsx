import Footer from "@/components/Footer/footer-email-template";
import {
  Button,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function EmailAcercamientoUsuario() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
              font-family: 'Inter', sans-serif;
            }
          `}
        </style>
      </Head>
      <Section style={{ marginTop: 16, marginBottom: 16 }}>
        <Section>
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
          <Row>
            <Text
              style={{
                margin: "0px",
                fontSize: 26,
                lineHeight: "32px",
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                color: "rgb(17,24,39)",
              }}
            >
              Digital Tickets fue diseñado para ti
            </Text>
            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                fontFamily: "'Inter', sans-serif",
                lineHeight: "24px",
                color: "rgb(107,114,128)",
              }}
            >
              Queremos acercarte un poco más a Digital Tickets, Nuestro equipo
              de desarrollo ha preparado un video especial donde te contamos el
              proceso detrás de la creación de nuestra herramienta.
              <br />
              <br />
              En este vídeo, descubrirás:
            </Text>
          </Row>
        </Section>

        <Section style={{ marginTop: 16, marginBottom: 16 }}>
          <Section>
            <Row>
              <Column style={{ width: "90%" }}>
                <Text
                  style={{
                    margin: "0px",
                    marginTop: 8,
                    marginLeft: "15px",
                    fontSize: 16,
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "24px",
                    color: "rgb(107,114,128)",
                  }}
                >
                  1. Cómo identificamos las fricciones más comunes al gestionar
                  eventos.
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              marginTop: 14,
              marginBottom: 14,
              width: "100%",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgb(209,213,219) !important",
            }}
          />
          <Section>
            <Row>
              <Column style={{ width: "90%" }}>
                <Text
                  style={{
                    margin: "0px",
                    marginTop: 8,
                    marginLeft: "15px",
                    fontSize: 16,
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "24px",
                    color: "rgb(107,114,128)",
                  }}
                >
                  2. Nuestro deseo de facilitar estos procesos para ti.
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              marginTop: 14,
              marginBottom: 14,
              width: "100%",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgb(209,213,219) !important",
            }}
          />
          <Section>
            <Row>
              <Column style={{ width: "90%" }}>
                <Text
                  style={{
                    margin: "0px",
                    marginTop: 8,
                    marginLeft: "15px",
                    fontSize: 16,
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "24px",
                    color: "rgb(107,114,128)",
                  }}
                >
                  3. Por qué diseñamos una plataforma intuitiva, accesible y
                  rápida.
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              marginTop: 24,
              marginBottom: 24,
              width: "100%",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgb(209,213,219) !important",
            }}
          />
        </Section>
        <Text
          style={{
            marginTop: 8,
            fontSize: 16,
            fontFamily: "'Inter', sans-serif",
            lineHeight: "24px",
            color: "rgb(107,114,128)",
          }}
        >
          Todo lo que hicimos fue pensando en ofrecerte una solución que te
          permite enfocarte en lo que más importa: ¡crear eventos memorables!
          <br />
          <br />
          En este vídeo, descubrirás:
        </Text>
        <Button
          href="https://react.email"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: 12,
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            borderRadius: 8,
            textAlign: "center",
            backgroundColor: "black",
            color: "rgb(255,255,255)",
            marginBottom: "25px",
          }}
        >
          Ver video Tutorial
        </Button>
        <Text
          style={{
            marginTop: 8,
            fontSize: 16,
            fontFamily: "'Inter', sans-serif",
            lineHeight: "24px",
            color: "rgb(107,114,128)",
          }}
        >
          Si tienes preguntas o necesitas más información, estamos aquí para
          ayudarte.
          <br />
          <br />
          Nos vemos pronto! Saludos,
          <br />
          Equipo de Digital Tickets
        </Text>
        <Hr style={hr} />
        <Footer></Footer>
      </Section>
    </Html>
  );
}

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};
