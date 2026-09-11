import React from "react";
import { Card } from "react-bootstrap";
import { useLanguage } from "../../../lang/languageContext";
import { Exposition } from "../../../common/types";

interface ExpositionCardProps {
    exposition: Exposition;
}

const ExpositionCard: React.FC<ExpositionCardProps> = ({ exposition }) => {
    const { language, t } = useLanguage();
    const title = exposition.title[language] ?? exposition.title.en;
    const description = exposition.description[language] ?? exposition.description.en;
    const date = exposition.date[language] ?? exposition.date.en;
    const locationLabel = exposition.location.label[language] ?? exposition.location.label.en;
    const isLinked = exposition.url !== undefined;

    return (
        <Card
            className="h-100 hover-effect"
            tabIndex={isLinked ? 0 : undefined}
        >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Text className="text-muted">
                    {exposition.location.url ? (
                        <a
                            href={exposition.location.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-reset text-decoration-underline"
                            onClick={(event) => event.stopPropagation()}
                        >
                            {locationLabel}
                        </a>
                    ) : (
                        locationLabel
                    )}
                </Card.Text>
                <Card.Text>{description}</Card.Text>
                {isLinked && (
                    <Card.Link
                        href={exposition.url}
                    >
                        {t("exposition.view")}
                    </Card.Link>
                )}
            </Card.Body>
        </Card>
    );
};

export default ExpositionCard;