import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Work } from '../../common/types';
import { useLanguage } from '../../lang/languageContext';


interface WorkGalleryProps {
    workList: Work[];
    onWorkClick?: (index: number, work: Work) => void;
    language?: string;
}

export const ProjectGallery: React.FC<WorkGalleryProps> = ({
    workList: projectList,
    onWorkClick: onProjectClick
}) => {
    const {language} = useLanguage();
    return (
        <Row>
            {projectList.map((project, index) => (
                <Col key={index} md={6} lg={4} className="mb-4">
                    <Card className="h-100 hover-effect border-0">
                        <Card.Body>
                            <div className="text-center">
                                <Card.Title>{project.title[language] ?? project.title['en']}</Card.Title>
                                <div className="position-relative center-center w-100">
                                    <div
                                        className="gallery-photo-container border rounded p-2 ms-auto me-auto"
                                        onClick={() => onProjectClick?.(index, project)}
                                    >
                                        <Card.Img
                                            src={project.previewUrl ?? project.imageUrl}
                                            className="gallery-photo w-auto"
                                        />
                                        <div className="position-absolute top-50 start-50 translate-middle eye-icon">
                                            <i className="bi bi-eye"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Card.Text className="text-truncate">
                                {project.description[language] ?? project.description['en']}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};