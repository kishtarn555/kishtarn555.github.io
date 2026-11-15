import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Work } from "../../common/types";
import { useLanguage } from "../../lang/languageContext";

interface WorkModalProps {
  selectedWork: Work | null;
  onCloseModal?: (()=>void);
}

const WorkModal: React.FC<WorkModalProps> = ({ selectedWork, onCloseModal }) => {
  const { language, t } = useLanguage();

  const buyMailto = selectedWork
    ? `mailto:hector.f.ricardez@gmail.com?subject=${encodeURIComponent(
        `${t("work.buy.head")} - ${selectedWork?.title?.[language] ?? selectedWork?.title?.["en"] ?? ""}`
      )}&body=${encodeURIComponent(
        `${t("work.buy.body")}\n\n${
          selectedWork?.title?.[language] ?? selectedWork?.title?.["en"] ?? ""
        }\n`
      )}`
    : "mailto:hector.f.ricardez@gmail.com";

  const whatsappMessage = encodeURIComponent(
    selectedWork
      ? `${t("work.buy.head")} - ${selectedWork?.title?.[language] ?? selectedWork?.title?.["en"] ?? ""}`
      : t("work.buy.head")
  );

  return (
    <Modal
      show={selectedWork != null}
      onHide={onCloseModal}
      size="lg"
    >
      { selectedWork && <>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedWork?.title?.[language] ?? selectedWork?.title?.["en"]}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                src={selectedWork?.previewUrl ?? selectedWork?.imageUrl}
                alt={"Drawing"}
                className="showcase-photo"
              />
            </Col>
            <Col>
              <ul>
                
                <li>
                  <b>{t('work.dimensions')}:</b> {selectedWork.dimensions[0]} x {selectedWork.dimensions[1]} {selectedWork.dimensionsUnit ?? "cm"} 
                </li>
                <li>
                  <b>{t('work.technique')}:</b> {selectedWork?.technique?.[language] ?? selectedWork?.technique?.["en"]} 
                </li>
                <li>
                  <b>{t('work.year')}:</b> {selectedWork?.year ? Math.trunc(selectedWork?.year) : "N/A"}
                </li>
                {selectedWork.isBuyable && <li>
                  <b>{t('work.price')}:</b> {selectedWork.sold? <><s>{selectedWork.price}</s> {t('work.sold')}</>: selectedWork.price}
                </li>}
                {/* <li>
                    <b>Dimensions:</b> ?? x ?? cm
                  </li>
                  <li>
                    <b>Technique:</b> Ink on paper
                  </li>
                  {selectedWork?.isBuyable && <li>
                    <b>Price:</b> {selectedWork?.price ?? "TBD"} <a title="Not including shipping nor importation taxes">*</a>
                  </li>} */}
              </ul>
              {selectedWork?.description?.[language] ??
                selectedWork?.description?.["en"]}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {selectedWork.isBuyable && !selectedWork.sold && (<>
            <div>
              <p>{t('work.buy')}</p>
              <Button className="me-2 mb-2" variant="primary" href={buyMailto}>Email: (hector.f.ricardez@gmail.com)</Button>
              <Button className="mb-2" variant="success" href={`https://wa.me/524771363774?text=${whatsappMessage}`}>Phone/Whatsapp: +52 477 136 3774</Button>
              </div>
            </>
          )}
        </Modal.Footer>
      </>}
    </Modal>
  );
};

export default WorkModal;