import React from "react";
import Nav from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Card, Col, Container, Row } from "react-bootstrap";

const Expositions: React.FC = () => {
  return (
    <>
      <Nav />
      <main className="dev-container">
        <Container fluid className="m-4 border rounded p-2 w-auto bg-body shadow">
          <h1>Expositions</h1>
          <p>Explore exhibitions featuring selected works.</p>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 hover-effect">
                <Card.Body>
                  <Card.Title>Sombras de Kishtarn</Card.Title>
                  <Card.Text>
                    Primera exposición individual de Héctor “Kishtarn” Ricárdez.
                  </Card.Text>
                  <Card.Link href="/events/sombras">View exposition</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Expositions;