import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLanguage } from "../../lang/languageContext"; 

const ConstructionWarning: React.FC = () => {
    const {t} = useLanguage();
  return (
    <Row className='p-4'>
        <Container className='bg-warning rounded'>
            {t("construction.warning")}
        </Container>
    </Row>
  );
}

export default ConstructionWarning;