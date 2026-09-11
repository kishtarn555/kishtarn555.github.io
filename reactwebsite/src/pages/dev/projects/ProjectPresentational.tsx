import React, { useState } from "react";
import Nav from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Card, Col, Row, Container, Modal } from "react-bootstrap";
import { IRepresentationalProps, Project } from "./types";
import { useLanguage } from "../../../lang/languageContext";
const ProjectPresentational: React.FC<IRepresentationalProps> = ({ projects }) => {
    const { language } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const getDescription = (project: Project) =>
      project.description[language] ?? project.description["en"];
  
  return (
    <>
      <Nav />
      <main className="dev-container">
        <Container fluid className="m-4 border rounded p-2 w-auto bg-body shadow">
          <h1>Developer Projects</h1>
          <p>
            Welcome to the developer projects page. Here you will find a list of
            my software development projects.
          </p>

          <Row>
            {projects.map((project) => (
              <Col key={project.title} md={6} lg={4} className="mb-4">
                <Card
                  className="h-100 hover-effect"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                >
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="advanced-truncate">
                        {getDescription(project)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
      <Modal show={selectedProject !== null} onHide={() => setSelectedProject(null)}>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{getDescription(selectedProject)}</p>
              {selectedProject.links && (
                <ul>
                  {
                  selectedProject.links.map(el=> (
                    <li id={el.url}><a href={el.url}>{el.label[language]??el.label["en"]}</a></li>
                  ))
                  }
                </ul>
              )}
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
};

export default ProjectPresentational;
