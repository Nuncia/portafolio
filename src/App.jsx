import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Stack from './views/Stack';
import Home from './views/Home';
import Experiencia from './views/Experiencia';
import Educación from './views/Educación';
import Proyectos from './views/Proyectos';
import Footer from './components/Footer';

function App() {
   return (
      <div>
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/stack" element={<Stack />} />
               <Route path="/experiencia" element={<Experiencia />} />
               <Route path="/educacion" element={<Educación />} />
               <Route path="/proyectos" element={<Proyectos />} />
            </Routes>
            {/* <Footer /> */}
         </BrowserRouter>
      </div>
   );
}

export default App;
