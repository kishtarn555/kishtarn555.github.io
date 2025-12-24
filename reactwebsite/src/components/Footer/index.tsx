import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useLanguage } from "../../lang/languageContext";

const languages = {
  en: "English",
  es: "Español",
  ja: "日本語",
}

const MainNavbar: React.FC = () => {
  const { t, setLanguage, language } = useLanguage();

  return (
    <>
      <hr/>
      <div className="d-flex justify-content-center align-items-center p-3">
        <span className="me-3">&copy; 2025 Hector Ricardez. All rights reserved.</span>
      </div>
    </>
  );
};

export default MainNavbar;