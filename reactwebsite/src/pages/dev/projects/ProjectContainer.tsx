import React from "react";
import ProjectPresentational from "./ProjectPresentational";
import { Project } from "./types";

const CONTENT: Project[] = [
    {
        title: "ReKarel",
        description: {
            "en": "ReKarel is an IDE and simulator for the Karel programming language, designed to enhance learning and development experiences. Used by the Mexican Olympiad in Informatics.",
            "es": "ReKarel es un IDE y simulador Para el lenguaje de programación Karel programming language, diseñado para el aprendizaje y desarrollo. Usado en la Olimpiada de informática."
        },
            
        links: [
            {
                url:"https://rekarel.olimpiadadeinformatica.org.mx/",
                label: {
                    "en": "Official host",
                    "es": "Host oficial"
                }
            },
            {
                url:"https://kishtarn555.github.io/ReKarelDev/",
                label: {
                    "en": "Experimental version",
                    "es": "Versión experimental"
                }
            },
            {
                url:"https://github.com/kishtarn555/rekarel",
                label: {
                    "en": "Github",
                    "es": "Github"
                }
            },
            {
                url:"https://www.npmjs.com/package/@rekarel/core",
                label: {
                    "en": "NPM Core package",
                    "es": "Paquete NPM Core"
                }
            },
        ]
    },
]

const ProjectContainer: React.FC = () => {


  return <ProjectPresentational
    projects={CONTENT}  
  />;
};

export default ProjectContainer;
