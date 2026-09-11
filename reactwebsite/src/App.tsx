import './App.css';
import { LanguageProvider } from './lang/languageContext';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Developer from './pages/dev/projects';
import Sombras from './pages/art/events/sombras';
import Gallery from './pages/art/gallery'
import Expositions from './pages/art/expositions';
import Omiags2026 from './pages/rekarel/cursos/omiags2026';
function App() {
  return (
    <LanguageProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<Gallery />} />
            <Route path="/art/expositions" element={<Expositions />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/events/sombras" element={<Sombras />} />
            <Route path="/developer/omiags2026" element={<Omiags2026 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </LanguageProvider>
  );
}

export default App;
