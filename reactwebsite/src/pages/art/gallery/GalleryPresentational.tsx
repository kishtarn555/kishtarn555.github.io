import React from "react";
import Nav from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Container } from "react-bootstrap";
import { IRepresentationalProps } from "./types";
import ConstructionWarning from "../../../components/warnings/construction";
import WorkModal from "../../../components/ArtGallery/workModal";
import { ProjectGallery } from "../../../components/ArtGallery";
const GalleryPresentational: React.FC<IRepresentationalProps> = ({ projects, setSelectedWork, selectedWork }) => {
  
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
            <ProjectGallery
              workList={projects}
              showDescription={false}
              onWorkClick={(_, work)=>setSelectedWork(work)}

            />
        </Container>
      </main>
      <Footer />

     <WorkModal
        selectedWork={selectedWork}
        onCloseModal={()=>setSelectedWork(null)}
      />
    </>
  );
};

export default GalleryPresentational;
