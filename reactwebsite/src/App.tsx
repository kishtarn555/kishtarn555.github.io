import Nav from "./components/Navbar";
import { LanguageProvider } from './lang/languageContext';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Developer from './pages/dev/projects';
import Sombras from './pages/art/events/sombras';
const Art = () => <div><Nav/>Art</div>;

function App() {
  return (
    <LanguageProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<Art />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/events/sombras" element={<Sombras />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </LanguageProvider>
  );
}

export default App;
