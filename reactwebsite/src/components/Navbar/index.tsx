import { Navbar, Nav, Container, NavDropdown, Button, ButtonGroup } from "react-bootstrap";
import { useLanguage } from "../../lang/languageContext";

const MainNavbar: React.FC = () => {
  const { t, setLanguage, language } = useLanguage();

  return (
    <Navbar
      expand="lg"
      bg="white"
      variant="light"
      sticky="top"
      className="shadow-sm"
    >
      <Container fluid>
        <Navbar.Brand href="#">Kishtarn</Navbar.Brand>

        <Navbar.Toggle aria-controls="mainNavbar" />

        <Navbar.Collapse id="mainNavbar">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" active>
              {t("nav.home")}
            </Nav.Link>
            <Nav.Link href="/developer">Dev</Nav.Link>
            <Nav.Link href="/art">Art</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <ButtonGroup className="ms-3 border">
              <Button
                variant="outline-secondary"
                id="langBtn"
                aria-label="Selected language"
              >
                <i className="bi bi-globe2" />{" "}
                <span id="langLabel">{language}</span>
              </Button>

              <NavDropdown
                align="end"
                title={<span className="visually-hidden">Toggle dropdown</span>}
                id="langDropdown"    

              >
                <NavDropdown.Item onClick={()=>{ setLanguage("es") }}>
                  ES — Español
                </NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{ setLanguage("en") }}>
                  EN — English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{ setLanguage("ja") }}>
                  日本語
                </NavDropdown.Item>
              </NavDropdown>
            </ButtonGroup>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;