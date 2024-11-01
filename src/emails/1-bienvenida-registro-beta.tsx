import Footer from "@/components/Footer/footer-email-template";
import {
  Button,
  Html,
  Section,
  Img,
  Text,
  Heading,
  Hr,
} from "@react-email/components";
import * as React from "react";

export default function BienvenidaEmail() {
  return (
    <Html>
      <Section style={{ marginTop: 16, marginBottom: 16 }}>
        <Img
          alt="Herman Miller Chair"
          height="120"
          src="https://res.cloudinary.com/dkneova4f/image/upload/v1729258524/X_Cover_-_Digital_Tickets_uk3mtu.png"
          style={{
            width: "100%",
            borderRadius: 12,
            objectFit: "cover",
          }}
        />
        
        <Section
          style={{
            marginTop: 32,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              marginTop: 16,
              marginBottom: 16,
              fontSize: 18,
              lineHeight: "28px",
              fontWeight: 600,
              color: "rgb(79,70,229)",
            }}
          >
            {/* Our new article */}
          </Text>
          <Heading
            as="h1"
            style={{
              margin: "0px",
              marginTop: 8,
              fontSize: 26,
              lineHeight: "36px",
              fontWeight: 600,
              color: "rgb(17,24,39)",
            }}
          >
            ¡Bienvenido a la beta de Digital Tickets! 🎉
          </Heading>
          <Text
            style={{
              fontSize: 16,
              lineHeight: "24px",
              color: "rgb(107,114,128)",
            }}
          >
            Hola [Nombre], Gracias por unirte a la beta exclusiva de Digital
            Tickets 🚀 Estamos emocionados de que formes parte de esta comunidad
            que transformará la gestión de eventos.
            <br /> <br />
            Tendrás acceso anticipado para probar todas nuestras
            funcionalidades, desde la emisión de tickets digitales hasta la
            validación rápida con QR. ¡Queremos que disfrutes de la experiencia!
            <br /> <br />
            Si tienes preguntas, comunícate con nosotros
          </Text>
          <Button
            href="https://api.whatsapp.com/send/?phone=573218202524&text=Hola%2C+me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n+sobre+sus+servicios.&type=phone_number&app_absent=0"
            style={{
              marginTop: 16,
              borderRadius: 8,
              backgroundColor: "#25D366",
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: 12,
              paddingBottom: 12,
              marginBottom: 55,
              fontWeight: 600,
              color: "black",
            }}
          >
            Hablemos vía Whatsapp
          </Button>
        <Hr style={hr} />
          <Footer></Footer>
        </Section>
      </Section>
    </Html>
  );
}

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};