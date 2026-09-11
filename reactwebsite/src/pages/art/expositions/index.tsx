import React from "react";
import Nav from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { useLanguage } from "../../../lang/languageContext";
import { EXPOSITIONS } from "../../../data/expositions";
import ExpositionCard from "./ExpositionCard";

const Expositions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Nav />
      <main className="dev-container">
        <Container fluid className="m-4 border rounded p-2 w-auto bg-body shadow">
          <h1>{t("expositions.title")}</h1>
          <p>{t("expositions.description")}</p>
          <Row>
            {EXPOSITIONS.map((exposition) => (
              <Col key={exposition.title.en} md={6} lg={4} className="mb-4">
                <ExpositionCard exposition={exposition} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Expositions;