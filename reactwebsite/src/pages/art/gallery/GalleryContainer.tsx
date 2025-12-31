import React, { useState } from "react";
import GalleryPresentational from "./GalleryPresentational";
import { Work } from "./types";

const CONTENT: Work[] = [
    {
        title: {
            "es": "Cierra el tercer ojo",
            "en": "Close the third eye",
            "ja": "三つ目の目を閉じて"
        },
        year: 2025,
        imageUrl: "/img/art/third_eye.jpg",
        previewUrl: "/img/art/third_eye_low.jpg",

        description: {
            "en": ""
        },
            
        link: "/projects/project1",
        isBuyable: true,
    },
    {
        title: {
            "es": "Todavía te recuerdo",
            "en": "I still remember you",
            "ja": "君をまだ覚えている"
        },
        year: 2025,
        imageUrl: "/img/art/still_remember.jpg",
        previewUrl: "/img/art/still_remember_low.jpg",

        description: {
            "en": ""
        },
        isBuyable: true,
            
        link: "/projects/project1"
    },
    
    {
        title: {
            "es": "Rito",
            "en": "Rite",
            "ja": "Rite" //TODO: Proper translation
        },
        year: 2025,
        imageUrl: "/img/art/rito.jpg",
        previewUrl: "/img/art/rito_low.jpg",

        description: {
            "en": ""
        },
            
        isBuyable: true,
        link: "/projects/project1"
    },
    {
        title: {
            "es": "Calabaza tenebrosa",
            "en": "Scary pumpkin",
            "ja": "怖いカボチャ"
        },
        year: 2025,
        imageUrl: "/img/art/scary_pumpkin.jpg",
        previewUrl: "/img/art/scary_pumpkin_low.jpg",

        description: {
            "en": ""
        },
            
        isBuyable: true,
        link: "/projects/project1"
    },
    {
        title: {
            "es": "Pan de muerto",
            "en": "Pan de muerto",
            "ja": "Pan de muerto"
        },
        year: 2025,
        imageUrl: "/img/art/pan_de_muerto.jpg",
        previewUrl: "/img/art/pan_de_muerto_low.jpg",

        description: {
            "en": ""
        },
            
        isBuyable: false,
        link: "/projects/project1"
    },
    {
        title: {
            "es": "Lunaccino",
            "en": "Lunaccino",
            "ja": "Lunaccino"
        },
        year: 2025,
        imageUrl: "/img/art/lunaccino.jpg",
        previewUrl: "/img/art/lunaccino_low.jpg",

        description: {
            "en": ""
        },
            
        isBuyable: true,
        link: "/projects/project1"
    },
]

const GalleryContainer: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<Work | undefined>();

  return <GalleryPresentational
    projects={CONTENT}
    selectedWork={selectedWork}
    setSelectedWork={setSelectedWork}
  
  />;
};

export default GalleryContainer;
