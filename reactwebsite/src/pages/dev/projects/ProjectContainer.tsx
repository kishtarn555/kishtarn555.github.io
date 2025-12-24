import React from "react";
import ProjectPresentational from "./ProjectPresentational";
import { Project } from "./types";

const CONTENT: Project[] = [
    {
        title: "Project 1",
        description: "This is a brief description of Project 1.",
        link: "/projects/project1"
    },
    {
        title: "Project 2",
        description: "This is a brief description of Project 2.",
        link: "/projects/project2"
    },
    {
        title: "Project 3",
        description: "This is a brief description of Project 3.",
        link: "/projects/project3"
    }
]

const ProjectContainer: React.FC = () => {


  return <ProjectPresentational
    projects={CONTENT}
  
  />;
};

export default ProjectContainer;
