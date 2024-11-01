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
import React from "react";

const Footer: React.FC = () => {
    return(
<Section style={{ textAlign: "center" }}>
          <table style={{ width: "100%" }}>
            <tr style={{ width: "100%" }}>
              <td align="center">
                <Img
                  alt="React Email logo"
                  height="62"
                  src="https://res.cloudinary.com/dkneova4f/image/upload/v1729258370/logo-dark-vertical_icu2oe.png"
                />
              </td>
            </tr>
            <tr style={{ width: "100%" }}>
              <td align="center">
                <Text
                  style={{
                    marginTop: 8,
                    marginBottom: 8,
                    fontSize: 16,
                    lineHeight: "24px",
                    fontWeight: 600,
                    color: "rgb(17,24,39)",
                  }}
                >
                  
                </Text>
                <Text
                  style={{
                    marginTop: 4,
                    marginBottom: "0px",
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "rgb(107,114,128)",
                  }}
                >
                  Eficiencia y tecnología al alcance de tus eventos
                </Text>
              </td>
            </tr>
            <tr>
              <td align="center">
                <Row
                  style={{
                    display: "table-cell",
                    height: 44,
                    width: 56,
                    verticalAlign: "bottom",
                  }}
                >
                  <Column style={{ paddingRight: 8 }}>
                    <Link href="https://www.facebook.com/digitaltickets.col">
                      <Img
                        alt="Facebook"
                        height="36"
                        src="https://react.email/static/facebook-logo.png"
                        width="36"
                      />
                    </Link>
                  </Column>
                  <Column style={{ paddingRight: 8 }}>
                    <Link href="https://www.facebook.com/digitaltickets.col">
                      <Img
                        alt="X"
                        height="36"
                        src="https://react.email/static/x-logo.png"
                        width="36"
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="https://www.instagram.com/digitaltickets.col/">
                      <Img
                        alt="Instagram"
                        height="36"
                        src="https://react.email/static/instagram-logo.png"
                        width="36"
                      />
                    </Link>
                  </Column>
                </Row>
              </td>
            </tr>
            <tr>
              <td align="center">
                <Text
                  style={{
                    marginTop: 8,
                    marginBottom: 8,
                    fontSize: 16,
                    lineHeight: "24px",
                    fontWeight: 600,
                    color: "rgb(107,114,128)",
                  }}
                >
                  Medellín, Colombia
                </Text>
                <Text
                  style={{
                    marginTop: 4,
                    marginBottom: "0px",
                    fontSize: 16,
                    lineHeight: "24px",
                    fontWeight: 600,
                    color: "rgb(107,114,128)",
                  }}
                >
                  admon.digitalticket@gmail.com 
                </Text>
              </td>
            </tr>
          </table>
        </Section>


    )
}

export default Footer;