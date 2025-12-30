import './App.css';
import { LanguageProvider } from './lang/languageContext';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Developer from './pages/dev/projects';
import Sombras from './pages/art/events/sombras';
import Gallery from './pages/art/gallery'
function App() {
  return (
    <LanguageProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<Gallery />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/events/sombras" element={<Sombras />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </LanguageProvider>
  );
}

export default App;
