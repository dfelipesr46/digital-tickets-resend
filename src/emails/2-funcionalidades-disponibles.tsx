import Footer from "@/components/Footer/footer-email-template";
import {
  Button,
  Column,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function FuncionalidadesEmail() {
  return (
    <Html>
      <Section style={{ marginTop: 16, marginBottom: 16 }}>
        <Section>
          <Img
            alt="Herman Miller Chair"
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
                fontSize: 24,
                lineHeight: "32px",
                fontWeight: 600,
                color: "rgb(17,24,39)",
              }}
            >
              Se acerca nuestro lanzamiento🚀
            </Text>
            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                lineHeight: "24px",
                color: "rgb(107,114,128)",
              }}
            >
              ¡Estamos cada vez más cerca de nuestro gran lanzamiento! 🎉 <br />{" "}
              <br />
              Queremos que tengas la oportunidad de familiarizarte con nuestra
              plataforma antes que nadie. Por eso, te invitamos a ver nuestro video tutorial donde te
              mostramos lo fácil que es gestionar tus eventos con Digital
              Tickets. 
              <br /> <br /> En este video, aprenderás a:
            </Text>
          </Row>
        </Section>
        
        <Section>
          <Hr
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              marginTop: 32,
              marginBottom: 32,
              width: "100%",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgb(209,213,219) !important",
            }}
          />
          <Section>
            <Row>
              <Column style={{ verticalAlign: "baseline" }}>
                <Img
                  alt="heart icon"
                  height="38"
                  src="https://img.icons8.com/?size=100&id=aNcHqZHPMIyk&format=png&color=000000"
                  width="38"
                />
              </Column>
              <Column style={{ width: "85%" }}>
                <Text
                  style={{
                    margin: "0px",
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: "rgb(17,24,39)",
                  }}
                >
                  Configurar y Crear eventos
                </Text>
                <Text
                  style={{
                    margin: "0px",
                    marginTop: 8,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "rgb(107,114,128)",
                  }}
                ></Text>
              </Column>
            </Row>
          </Section>
          <Hr
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              marginTop: 32,
              marginBottom: 32,
              width: "100%",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgb(209,213,219) !important",
            }}
          />
          <Section>
            <Row>
              <Column style={{ verticalAlign: "baseline" }}>
                <Img
                  alt="rocket icon"
                  height="38"
                  src="https://img.icons8.com/?size=100&id=11159&format=png&color=000000"
                  width="38"
                />
              </Column>
              <Column style={{ width: "85%" }}>
                <Text
                  style={{
                    margin: "0px",
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: "rgb(17,24,39)",
                  }}
                >
                  Validar Tickets con nuestros sitema QR
                </Text>
                <Text
                  style={{
                    margin: "0px",
                    marginTop: 8,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "rgb(107,114,128)",
                  }}
                ></Text>
              </Column>
            </Row>
          </Section>
          <Hr
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              marginTop: 32,
              marginBottom: 32,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgb(209,213,219) !important",
            }}
          />
        </Section>

        <Section>
          <Row>
            <Column style={{ verticalAlign: "baseline" }}>
              <Img
                alt="heart icon"
                height="48"
                src="https://img.icons8.com/?size=100&id=68456&format=png&color=000000"
                width="48"
              />
            </Column>
            <Column style={{ width: "85%" }}>
              <Text
                style={{
                  margin: "0px",
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: "28px",
                  color: "rgb(17,24,39)",
                }}
              >
                Emitir entradas digitales en cuestión de minutos.
              </Text>
              <Text
                style={{
                  margin: "0px",
                  marginTop: 8,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "rgb(107,114,128)",
                }}
              ></Text>
            </Column>
          </Row>
        </Section>
        <Hr
          style={{
            marginLeft: "0px",
            marginRight: "0px",
            marginTop: 32,
            marginBottom: 32,
            width: "100%",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "rgb(209,213,219) !important",
          }}
        />
      </Section>
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
        Ver video Tutorial
      </Button>

      <Text
        style={{
          marginTop: 8,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgb(107,114,128)",
          marginBottom: "15px",
        }}
      >
        Si tienes alguna pregunta o necesitas ayuda, estamos aquí para ti.{" "}
        <br />
        ¡No dudes en contactarnos!{" "}
        <Button
          href="https://api.whatsapp.com/send/?phone=573218202524&text=Hola%2C+me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n+sobre+sus+servicios.&type=phone_number&app_absent=0"
          style={{
            width: "100%",
            boxSizing: "border-box",
            marginTop: 16,
            borderRadius: 8,
            backgroundColor: "#25D366",
            padding: 12,
            textAlign: "center",
            marginBottom: 25,
            fontWeight: 600,
            color: "white",
          }}
        >
          Hablemos vía Whatsapp
        </Button>{" "}
        <br />
        ¡Nos vemos pronto en la nueva era de la gestión de eventos!
        <br /> <br />
        Saludos,
        <br />
        El equipo de Digital Tickets
      </Text>
      <Hr style={hr} />
      <Footer></Footer>
    </Html>
  );
}

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};