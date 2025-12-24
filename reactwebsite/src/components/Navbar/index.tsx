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
            <Nav.Link href="/" active>
              {t("nav.home")}
            </Nav.Link>
            <Nav.Link href="/developer">Dev</Nav.Link>
            <Nav.Link href="/art">Art</Nav.Link>
          </Nav>

            <div className="d-flex align-items-center">
            <NavDropdown
              align="end"
              id="langDropdown"
              title={
              <>
                <i className="bi bi-globe2" />{" "}
                <span id="langLabel" className="ms-1">
                {language}
                </span>
              </>
              }
              className="ms-3 border rounded ps-2 pe-2 pt-1 pb-1"
            >
              <NavDropdown.Item onClick={() => setLanguage("es")}>
              ES — Español
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setLanguage("en")}>
              EN — English
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