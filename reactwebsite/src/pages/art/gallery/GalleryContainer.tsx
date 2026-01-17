import React, { useState } from "react";
import GalleryPresentational from "./GalleryPresentational";
import { Work } from "../../../common/types";
import { CloseTheThirdEye, Lunaccino, PanDeMuerto25Color, Rite, ScaryPumpkin, StillRememberYou } from "../../../data/works";

const CONTENT: Work[] = [
    CloseTheThirdEye,
    StillRememberYou,
    Rite,
    ScaryPumpkin,
    PanDeMuerto25Color,
    Lunaccino,
    
]

const GalleryContainer: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return <GalleryPresentational
    projects={CONTENT}
    selectedWork={selectedWork}
    setSelectedWork={setSelectedWork}
  
  />;
};

export default GalleryContainer;
