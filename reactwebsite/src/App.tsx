import './App.css';
import Nav from "./components/Navbar";
import { LanguageProvider } from './lang/languageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Nav />
      </div>
    </LanguageProvider>
  );
}

export default App;
