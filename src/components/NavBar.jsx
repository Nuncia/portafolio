import { NavLink } from 'react-router-dom';
import Monica from '../assets/MONICA_AYALA.pdf';

const NavBar = () => {
   const setActive = (isActive) => (isActive ? 'active' : 'inActive');
   return (
      <div
         className="navBar "
         style={{ height: '10vh', border: '1px solid white' }}
      >
         <div className="navBar">
            <div style={{ marginLeft: '30px', marginRight: '10px' }}>
               <NavLink className={setActive} to="/">
                  <i className="fa-solid fa-house"></i>
               </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
               <NavLink className={setActive} to="/stack">
                  Stack
               </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
               <NavLink className={setActive} to="/proyectos">
                  Proyectos
               </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
               <NavLink className={setActive} to="/educacion">
                  Educación
               </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
               <NavLink className={setActive} to="/experiencia">
                  Experiencia
               </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
               <a
                  href={Monica}
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'white' }}
               >
                  Curriculum
               </a>
            </div>
         </div>
         <div style={{ paddingRight: '50px' }}>Contacto</div>
      </div>
   );
};

export default NavBar;
