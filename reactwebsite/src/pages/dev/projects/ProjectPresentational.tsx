import React, { useState } from "react";
import Nav from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Col, Row, Container, Modal } from "react-bootstrap";
import { IRepresentationalProps, Project } from "./types";
import { useLanguage } from "../../../lang/languageContext";
import ConstructionWarning from "../../../components/warnings/construction";
import ProjectCard from "../../../components/ProjectCard";
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
          <ConstructionWarning/>
          <p>
            Welcome to the developer projects page. Here you will find a list of
            my software development projects.
          </p>

          <Row>
            {projects.map((project) => (
              <Col key={project.title} md={6} lg={4} className="mb-4">
                <ProjectCard project={project} onClick={setSelectedProject} />
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
