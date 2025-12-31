import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { useLanguage } from "../../lang/languageContext";

const languages = {
  en: "English",
  es: "Español",
  ja: "日本語",
}

const MainNavbar: React.FC = () => {
  const { t, setLanguage, language } = useLanguage();

  return (
    <Navbar
      expand="lg"
      bg="white"
      variant="light"
      sticky="top"
      className="shadow-sm border-bottom"
    >
      <Container fluid>
        <Navbar.Brand href="/">Kishtarn</Navbar.Brand>

        <Navbar.Toggle aria-controls="mainNavbar" />

        <Navbar.Collapse id="mainNavbar">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href="/" active>
              {t("nav.home")}
            </Nav.Link>            
            <NavDropdown title="Developer" id="developerDropdown">
              <NavDropdown.Item href="/developer">Projects</NavDropdown.Item>
              <NavDropdown.Item href="/developer/competitive">Competitive programming</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Art" id="artDropdown">
              <NavDropdown.Item href="/art">Gallery</NavDropdown.Item>
              {/* <NavDropdown.Item href="/art/commissions">Commissions</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>

            <div className="d-flex align-items-center">
            <NavDropdown
              align="end"
              id="langDropdown"
              title={
              <>
                <i className="bi bi-globe2" />{" "}
                <span id="langLabel" className="ms-1">
                {languages[language]}
                </span>
              </>
              }
              className="ms-3 border rounded ps-2 pe-2 pt-1 pb-1"
            >
              <NavDropdown.Item onClick={() => setLanguage("es")}>
              Español
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setLanguage("en")}>
              English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setLanguage("ja")}>
              日本語
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;