import React from "react";
import GalleryPresentational from "./GalleryPresentational";
import { Work } from "./types";

const CONTENT: Work[] = [
    {
        title: {
            "es": "Cierra el tercer ojo",
            "en": "Close the third eye",
            "ja": "三つ目の目を閉じて"
        },
        imageUrl: "/img/art/third_eye.jpg",
        previewUrl: "/img/art/third_eye_low.jpg",

        description: {
            "en": ""
        },
            
        link: "/projects/project1"
    },
    {
        title: {
            "es": "Todavía te recuerdo",
            "en": "I still remember you",
            "ja": "君をまだ覚えている"
        },
        imageUrl: "/img/art/still_remember.jpg",
        previewUrl: "/img/art/still_remember_low.jpg",

        description: {
            "en": ""
        },
            
        link: "/projects/project1"
    },
    
    {
        title: {
            "es": "Rito",
            "en": "Rite",
            "ja": "Rite" //TODO: Proper translation
        },
        imageUrl: "/img/art/rito.jpg",
        previewUrl: "/img/art/rito_low.jpg",

        description: {
            "en": ""
        },
            
        link: "/projects/project1"
    },
    {
        title: {
            "es": "Calabaza tenebrosa",
            "en": "Scary pumpkin",
            "ja": "怖いカボチャ"
        },
        imageUrl: "/img/art/scary_pumpkin.jpg",
        previewUrl: "/img/art/scary_pumpkin_low.jpg",

        description: {
            "en": ""
        },
            
        link: "/projects/project1"
    },
    {
        title: {
            "es": "Pan de muerto",
            "en": "Pan de muerto",
            "ja": "Pan de muerto"
        },
        imageUrl: "/img/art/pan_de_muerto.jpg",
        previewUrl: "/img/art/pan_de_muerto_low.jpg",

        description: {
            "en": ""
        },
            
        link: "/projects/project1"
    },
    {
        title: {
            "es": "Lunaccino",
            "en": "Lunaccino",
            "ja": "Lunaccino"
        },
        imageUrl: "/img/art/lunaccino.jpg",
        previewUrl: "/img/art/lunaccino_low.jpg",

        description: {
            "en": ""
        },
            
        link: "/projects/project1"
    },
]

const GalleryContainer: React.FC = () => {


  return <GalleryPresentational
    projects={CONTENT}
  
  />;
};

export default GalleryContainer;
