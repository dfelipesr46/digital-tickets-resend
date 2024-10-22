import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
import Footer from "./Footer/footer-email-template";


interface NewFeatureEmailTemplateProps {
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  links?: string[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const PropDefaults: NewFeatureEmailTemplateProps = {
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>Funcionalidad </strong>{" "}
          <Link>Nuestra nueva funcionalidad</Link>, or manually deploy a
          project you've been working on locally.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>Check your deploy logs.</strong> Find out what's included in
          your build and watch for errors or failed deploys.{" "}
          <Link>Learn how to read your deploy logs</Link>.
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Choose an integration.</strong> Quickly discover, connect, and
          configure the right tools for your project with 150+ integrations to
          choose from. <Link>Explore the Integrations Hub</Link>.
        </li>
      ),
    },
    {
      id: 4,
      Description: (
        <li className="mb-20" key={4}>
          <strong>Set up a custom domain.</strong> You can register a new domain
          and buy it through Netlify or assign a domain you already own to your
          site. <Link>Add a custom domain</Link>.
        </li>
      ),
    },
  ],
  links: ["Visita nuestro Blog", "Read the docs", "Contact an expert"],
};

export const NewFeatureEmailTemplate = ({
  steps = PropDefaults.steps,
  links = PropDefaults.links,
}: NewFeatureEmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Digital Tickets</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={`https://res.cloudinary.com/dkneova4f/image/upload/v1729258369/icon_sfioaq.png`}
            width="75"
            height="75"
            alt="Netlify"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              Descubre nuestra Nueva Funcionalidad!
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                En Digital Tickets, siempre estamos buscando cómo hacer que tu experiencia sea 
                más fácil y eficiente. Por eso, nos complace anunciar el lanzamiento de una nueva 
                funcionalidad en nuestra plataforma.
                </Text>

                <Text className="text-base">"Nombre de la funcionalidad" ahora está disponible, permitiéndote "explicar brevemente el beneficio principal de la funcionalidad". 
                  Con esta mejora, podrás:
                  </Text>
              </Row>
            </Section>

            <ul>{steps?.map(({ Description }) => Description)}</ul>

            <Section className="text-center">
              <Button className="bg-brand text-white rounded-lg py-3 px-[18px]">
                Ir a la Aplicación
              </Button>
            </Section>

            <Section className="mt-45">
              <Row>
                {links?.map((link) => (
                  <Column key={link}>
                    <Link className="text-black underline font-bold">
                      {link}
                    </Link>{" "}
                    <span className="text-green-500">→</span>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="text-right px-20">
                  <Link>Unsubscribe</Link>
                </Column>
                <Column className="text-left">
                  <Link>Manage Preferences</Link>
                </Column>
              </Row>
            </Section>
            <Text className="text-center text-gray-400 mb-45">
              Medellín, Colombia
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewFeatureEmailTemplate;
