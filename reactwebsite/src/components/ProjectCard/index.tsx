import React from "react";
import { Card } from "react-bootstrap";
import { useLanguage } from "../../lang/languageContext";
import { Project } from "../../pages/dev/projects/types";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { language } = useLanguage();
  const description = project.description[language] ?? project.description["en"];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(project);
    }
  };

  return (
    <Card
      className="h-100 hover-effect"
      role="button"
      tabIndex={0}
      onClick={() => onClick(project)}
      onKeyDown={handleKeyDown}
    >
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text className="advanced-truncate">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;