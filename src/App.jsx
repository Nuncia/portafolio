import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Stack from './views/Stack';
import Home from './views/Home';
import Experiencia from './views/Experiencia';
import Educación from './views/Educación';
import Proyectos from './views/Proyectos';
import Footer from './components/Footer';
import Contacto from './views/Contacto';

function App() {
   return (
      <div className="cambiaColor">
         <BrowserRouter>
            {/* <NavBar /> */}
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/stack" element={<Stack />} />
               <Route path="/experiencia" element={<Experiencia />} />
               <Route path="/educacion" element={<Educación />} />
               <Route path="/proyectos" element={<Proyectos />} />
               <Route path="/contacto" element={<Contacto />} />
            </Routes>
            {/* <Footer /> */}
         </BrowserRouter>
      </div>
   );
}

export default App;
