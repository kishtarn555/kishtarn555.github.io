import React from "react";
import Nav from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Card, Col, Row, Container, Modal } from "react-bootstrap";
import { IRepresentationalProps } from "./types";
import { useLanguage } from "../../../lang/languageContext";
import ConstructionWarning from "../../../components/warnings/construction";
const GalleryPresentational: React.FC<IRepresentationalProps> = ({ projects, setSelectedWork, selectedWork }) => {
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
                <Card className="h-100 hover-effect border-0">
                  <Card.Body>
                    <div className="text-center">
                    <Card.Title>{project.title[language] ?? project.title["en" ]}</Card.Title>
                        <div className="position-relative center-center w-100" >
                          <div 
                            className="gallery-photo-container  border rounded p-2 ms-auto me-auto"
                            onClick={()=>setSelectedWork(project)}
                          >
                            <Card.Img src={project.previewUrl ?? project.imageUrl}
                              className="gallery-photo w-auto" 
                            />
                            <div className="position-absolute top-50 start-50 translate-middle eye-icon" >
                              <i className="bi bi-eye"></i>
                            </div>
                          </div>
                        </div>
                    </div>
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

      <Modal
        show={selectedWork != null}
        onHide={()=>setSelectedWork(undefined)}
        size="lg"
        
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedWork?.title?.[language] ?? selectedWork?.title?.["en"]}</Modal.Title></Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                src={selectedWork?.previewUrl ?? selectedWork?.imageUrl}
                alt={"Drawing"}
                className="showcase-photo"
              />
            </Col>
            <Col>
              <ul>
                <li>
                  <b>Year:</b> {selectedWork?.year ?? 'N/A'}
                </li>
                {/* <li>
                  <b>Dimensions:</b> ?? x ?? cm
                </li>
                <li>
                  <b>Technique:</b> Ink on paper
                </li>
                {selectedWork?.isBuyable && <li>
                  <b>Price:</b> {selectedWork?.price ?? "TBD"} <a title="Not including shipping nor importation taxes">*</a>
                </li>} */}
              </ul>
              {selectedWork?.description?.[language] ?? selectedWork?.description?.["en"]}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GalleryPresentational;
