import React, { useState } from "react";
import GalleryPresentational from "./GalleryPresentational";
import { Work } from "../../../common/types";
import { allWorks, CloseTheThirdEye, EmergentCia, Lunaccino, PanDeMuerto25Color, Rite, ScaryPumpkin, StillRememberYou, TimeWeight } from "../../../data/works";

const CONTENT: Work[] = [
    CloseTheThirdEye,
    EmergentCia,
    StillRememberYou,
    Rite,
    ScaryPumpkin,
    PanDeMuerto25Color,
    Lunaccino,
    TimeWeight,
    
]

const GalleryContainer: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return <GalleryPresentational
    projects={CONTENT}
    selectedWork={selectedWork}
    setSelectedWork={setSelectedWork}
    soldableWorks={
      allWorks
        .filter(t=>t.isBuyable)
        .sort(
          (a:Work,b:Work)=>(b.year?? 2001)-(a.year?? 2001)
        )
    }
  />;
};

export default GalleryContainer;
