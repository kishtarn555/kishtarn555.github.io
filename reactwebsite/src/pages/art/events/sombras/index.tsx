import React, { useState } from "react";
import Nav from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Work } from "../../../../common/types";
import {
  Bone,
  Candle,
  CloseTheThirdEye,
  Coffee,
  EmergentCia,
  Eye,
  Ghost,
  Hearth,
  Lunaccino,
  modifyWork,
  PanDeMuerto25BW,
  Plant,
  InvitingPumpkin,
  Shadow,
  StillRememberYou,
  Rite
} from "../../../../data/works";
import { ProjectGallery } from "../../../../components/ArtGallery";
import WorkModal from "../../../../components/ArtGallery/workModal";

const CONTENT: Work[] = [
  EmergentCia,
  modifyWork(CloseTheThirdEye, {
    isBuyable: true,
    price: "1000 MXN",
  }),
  Coffee,
  Lunaccino,
  StillRememberYou,
  InvitingPumpkin,
  Candle,
  Bone,
  Hearth,
  Ghost,
  PanDeMuerto25BW,
  Shadow,
  Plant,
  Eye,
  Rite
];
const Samo: React.FC = () => {
  const [showFull, setShowFull] = useState<boolean>(false);
  const [selectedWork, setSelectedWork] = useState<Work |null>(null);
  
  return (
    <>
      <Nav />
      <main>
        <div className="text-center">
          <h1>Sombras de Kishtarn</h1>
          <h5>
            Exposición individual: <i>Hector Ricardez</i>
          </h5>
        </div>
        <Row className="sombras-banner">
          <Row className="h-100">
            <div className="col-2 col-sm-4 col-md-6"></div>
            <div className="col-10 col-sm-8 col-md-6 d-flex flex-column justify-content-center align-items-center text-white">
              <h2>Del 10 al 31 de Enero</h2>
              
              <h5>
                <a
                  href="https://maps.app.goo.gl/Z5jQPWFaZdnyRt7DA"
                  className=" text-light"
                >
                  Lugar: SAMÖ Cafeart
                </a>
              </h5>
            </div>
          </Row>
        </Row>
        <Container
          fluid
          className="m-4 border rounded p-4 w-auto bg-body shadow text-justify"
        >
          <p>
            Primera exposición individual de Héctor “Kishtarn” Ricárdez, quien
            desde joven participó en olimpiadas de la ciencia, incluida la
            Olimpiada Internacional de Informática. De esa formación surge un
            método basado en la repetición, la experimentación y la falta de
            miedo a la aventura, que atraviesa su manera de construir imagen.
          </p>
          {showFull ? (
            <>
              <p>
                Este trasfondo lo ha llevado a Japón, Italia, Reino Unido,
                Estados Unidos, Irán, Azerbaiyán, Bangladesh, Egipto y diversas
                regiones de la república mexicana, ampliando un imaginario que
                se alimenta de estos movimientos y sus reflexiones.
              </p>
              <p>
                Las obras reunidas aquí funcionan como fragmentos de un
                imaginario propio en construcción. Son exploraciones que
                utilizan la forma, la luz y la sombra como bloques
                estructurales, mostrando el trabajo temprano de un artista
                emergente que no busca conclusiones, sino la consolidación de un
                lenguaje.
              </p>
              <p>
                La exposición habla de lo que habita entre las sombras, de
                aquello que se oculta en las grietas. Se despliega un universo
                donde lo místico y lo fantástico se filtran hacia lo cotidiano,
                insinuando que incluso lo más común carga historias invisibles.
                Aquí, las sombras no persiguen a la imagen: la narran y la
                construyen.
              </p>
              <p className="text-end">- Fer Ricárdez, 2026</p>

              <Button
                className="btn-secondary"
                onClick={() => setShowFull(false)}
              >
                Mostrar menos
              </Button>
            </>
          ) : (
            <>
              <p>
                Las obras reunidas aquí funcionan como fragmentos de un
                imaginario propio en<b>...</b>
              </p>
              <p className="text-end">- Fer Ricárdez, 2026</p>
              <Button onClick={() => setShowFull(true)}>Mostrar más</Button>
            </>
          )}
          <hr></hr>
          <Row className="mt-4 pt-2">
            <Col xs="12" md="6" xl="7">
              <h4>Evento</h4>
              <ul>
                <li>
                  <b>Lugar</b>: Cafetería SAMÖ, C. Cortadores de Aurora 120, Cd
                  Aurora, 37110 León de los Aldama, Gto.
                </li>
                <li>
                  <b>Acceso: </b>Ubicado en segunda planta, acceso vía escaleras
                  ubicadas a la izquierda del edificio.
                </li>

                <li>
                  <b>Fecha: </b>Del 10 al 31 de Enero.
                </li>
              </ul>
            </Col>
            <Col xs="12" md="6" xl="5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5440928269327!2d-101.66513719999999!3d21.1705343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf001260f5ad%3A0xc9c3bdd58ba17918!2zU0FNw5YgQ2Fmw6kgJiBBcnQ!5e0!3m2!1ses!2smx!4v1766900595117!5m2!1ses!2smx"
                className="w-100"
                height={280}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAMO MAP"
              ></iframe>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <h4>Catálogo</h4>
            <div className="ms-4 me-4">
              <ProjectGallery
                workList={CONTENT}
                onWorkClick={(_, work)=>setSelectedWork(work)}
              />
            </div>
          </Row>
        </Container>
      </main>
      <Footer />
      <WorkModal
        selectedWork={selectedWork}
        onCloseModal={()=>setSelectedWork(null)}
      />
      
    </>
  );
};

export default Samo;
