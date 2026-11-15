import React from "react";
import Nav from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Container } from "react-bootstrap";
import { IRepresentationalProps } from "./types";
import ConstructionWarning from "../../../components/warnings/construction";
import WorkModal from "../../../components/ArtGallery/workModal";
import { ProjectGallery } from "../../../components/ArtGallery";
import { useLanguage } from "../../../lang/languageContext";
const GalleryPresentational: React.FC<IRepresentationalProps> = ({ projects, setSelectedWork, selectedWork, soldableWorks }) => {
  const {t} = useLanguage();
  return (
    <>
      <Nav />
      <main className="dev-container">
        <Container fluid className="m-4 border rounded p-2 w-auto bg-body shadow">
          
          <h1>{t('gallery.title')}</h1>
          <ConstructionWarning/>
          <hr></hr>
          <h2 className="ms-3">{t('gallery.highlighted')}</h2>          
          <p className="ms-4">
            {t('gallery.highlighted.body')}
          </p>
            <ProjectGallery
              workList={projects}
              showDescription={false}
              onWorkClick={(_, work)=>setSelectedWork(work)}

            />
            <hr></hr>
            <h2 className="ms-3">{t('gallery.catalog')}</h2>
            <p className="ms-4">
              {t('gallery.catalog.body')}
            </p>
            <ProjectGallery
              workList={soldableWorks}
              showDescription={false}
              onWorkClick={(_, work)=>setSelectedWork(work)}
              onSoldDarken
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
