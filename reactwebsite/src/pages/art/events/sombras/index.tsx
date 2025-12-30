import React from 'react';
import Nav from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
const Samo: React.FC = () => {
    return (
        <>
            <Nav/>
            <main >
                <div className="text-center">
                    <h1>Sombras de Kishtarn</h1>
                    <h5>Exposición individual: <i>Hector Ricardez</i></h5>
                </div>
                <Row  className="sombras-banner">
                    <Row className="h-100">
                        <div className="col-2 col-sm-4 col-md-6"></div>
                        <div className="col-10 col-sm-8 col-md-6 d-flex flex-column justify-content-center align-items-center text-white">
                            <h2>10 de Enero 4:00 PM</h2>
                            <a 
                                className="btn btn-light" href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmdkZXZwNm01YzZzbW5uajkwM2VucXZ1OWgga2lzaHRhcm41NTVAbQ&tmsrc=kishtarn555%40gmail.com' 
                                
                            >
                                <i className="bi bi-calendar-date-fill"></i> Añadir a calendario
                            </a>
                            <h5><a href='https://maps.app.goo.gl/Z5jQPWFaZdnyRt7DA' className=' text-light'>Lugar: SAMÖ Cafeart</a></h5>
                        </div>
                    </Row>
                </Row>
                <Container fluid className="m-4 border rounded p-4 w-auto bg-body shadow text-justify">
                    <p>Sombras de Kishtarn es la primera exposición individual del artista emergente, Hector Ricardez.</p>

                    <p>Esta serie reúne dibujos realizados en su nueva travesía como artista, explora con tinta y grafito los claros y oscuros.</p>


                    <Row className="mt-4 pt-2">
                        <Col xs="12" md="6" xl="7">                        
                            <h4>Evento</h4>
                            <ul>
                                <li>
                                    <b>Lugar</b>: Cafetería SAMÖ, C. Cortadores de Aurora 120, Cd Aurora, 37110 León de los Aldama, Gto. 
                                </li>
                                <li>
                                    <b>Acceso: </b>Ubicado en segunda planta, acceso vía escaleras ubicadas a la izquierda del edificio.
                                </li>
                                
                                <li>
                                    <b>Fecha: </b>Sábado 10 de Enero, 4:00 PM.
                                </li>
                                <li>
                                    Costo: <b>Gratuito</b>
                                </li>
                                <li>
                                    <b>Merch:</b> Se ofrecerán artículos gratuitos y con costo durante la inauguración
                                </li>
                                <li>
                                    <b>Compra:</b> Todas las obras estarán a la venta
                                </li>
                            </ul>

                        </Col>
                        <Col xs="12" md="6" xl="5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5440928269327!2d-101.66513719999999!3d21.1705343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf001260f5ad%3A0xc9c3bdd58ba17918!2zU0FNw5YgQ2Fmw6kgJiBBcnQ!5e0!3m2!1ses!2smx!4v1766900595117!5m2!1ses!2smx"
                             className="w-100" height={280} style={{border:0}} allowFullScreen loading="lazy"
                             referrerPolicy="no-referrer-when-downgrade"
                             title='SAMO MAP'
                             ></iframe>
                        </Col>
                    </Row>
                    <Row>
                        <h4>Catálogo</h4>
                        <div className="ms-4 me-4">
                            Revelado el Jueves, 5 de Enero
                        </div>
                    </Row>
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default Samo;