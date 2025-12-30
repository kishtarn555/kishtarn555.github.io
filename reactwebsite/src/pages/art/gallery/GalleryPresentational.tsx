import React from "react";
import Nav from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Card, Col, Row, Container } from "react-bootstrap";
import { IRepresentationalProps } from "./types";
import { useLanguage } from "../../../lang/languageContext";
import ConstructionWarning from "../../../components/warnings/construction";
const GalleryPresentational: React.FC<IRepresentationalProps> = ({ projects }) => {
    const { language } = useLanguage();
  
  return (
    <>
      <Nav />
      <main className="dev-container">
        <Container fluid className="m-4 border rounded p-2 w-auto bg-body shadow">
          
          <h1>Gallery</h1>
          <ConstructionWarning/>
          <hr></hr>
          <h2>Highlighted</h2>          
          <p>
            Watch some of my selected works.
          </p>
          <Row>
            {projects.map((project, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card className="h-100 hover-effect">
                  <Card.Body>
                    <Card.Title>{project.title[language] ?? project.title["en" ]}</Card.Title>
                    <Card.Img src={project.previewUrl ?? project.imageUrl}></Card.Img>
                    <Card.Text className="advanced-truncate">
                        {project.description[language] ?? project.description["en"]}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPresentational;
