import './App.css';
import Nav from "./components/Navbar";
import { LanguageProvider } from './lang/languageContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Developer from './pages/dev/projects';
const Art = () => <div><Nav/>Art</div>;

function App() {
  return (
    <LanguageProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<Art />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </LanguageProvider>
  );
}

export default App;
