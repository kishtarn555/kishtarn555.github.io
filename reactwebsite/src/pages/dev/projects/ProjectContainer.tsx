import React from "react";
import ProjectPresentational from "./ProjectPresentational";
import { Project } from "./types";

const CONTENT: Project[] = [
    {
        title: "ReKarel",
        description: {
            "en": "ReKarel is an advanced IDE and simulator for the Karel programming language, designed to enhance learning and development experiences. Used by the Mexican Olympiad in Informatics."
        },
            
        link: "/projects/project1"
    },
    {
        title: "Project 2",
        description: {
            "en": "This is a brief description of Project 2."
        },
        link: "/projects/project2"
    },
    {
        title: "Project 3",
        description: {
            "en": "This is a brief description of Project 2."
        },
        link: "/projects/project3"
    }
]

const ProjectContainer: React.FC = () => {


  return <ProjectPresentational
    projects={CONTENT}
  
  />;
};

export default ProjectContainer;
