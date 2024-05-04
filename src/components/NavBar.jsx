import { NavLink } from 'react-router-dom';

import Monica from '../assets/MONICA_AYALA.pdf';

const NavBar = () => {
   const setActive = (isActive) => (isActive ? 'active' : 'inActive');
   return (
      <nav className="navbar navbar-expand-lg">
         <div className="container-fluid">
            {/* <a className="navbar-brand" href="#"> */}
            <NavLink className={setActive} to="/">
               <i className="fa-solid fa-house"></i>
            </NavLink>
            {/* </a> */}
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">
                  <NavLink
                     className={setActive}
                     to="/stack"
                     style={{ margin: '10px' }}
                  >
                     Stack
                  </NavLink>
                  <NavLink
                     className={setActive}
                     to="/proyectos"
                     style={{ margin: '10px' }}
                  >
                     Proyectos
                  </NavLink>
                  <NavLink
                     className={setActive}
                     to="/educacion"
                     style={{ margin: '10px' }}
                  >
                     Educación
                  </NavLink>
                  <NavLink
                     className={setActive}
                     to="/experiencia"
                     style={{ margin: '10px' }}
                  >
                     Experiencia
                  </NavLink>
               </div>
            </div>
         </div>
      </nav>
      // <div
      //    className="navBar "
      //    style={{ height: '10vh', border: '1px solid white' }}
      // >
      //    <div className="navBar">
      //       <div style={{ marginLeft: '30px', marginRight: '10px' }}>
      //          <NavLink className={setActive} to="/">
      //             <i className="fa-solid fa-house"></i>
      //          </NavLink>
      //       </div>
      //       <div style={{ margin: '10px' }}>
      //          <NavLink className={setActive} to="/stack">
      //             Stack
      //          </NavLink>
      //       </div>
      //       <div style={{ margin: '10px' }}>
      //          <NavLink className={setActive} to="/proyectos">
      //             Proyectos
      //          </NavLink>
      //       </div>
      //       <div style={{ margin: '10px' }}>
      //          <NavLink className={setActive} to="/educacion">
      //             Educación
      //          </NavLink>
      //       </div>
      //       <div style={{ margin: '10px' }}>
      //          <NavLink className={setActive} to="/experiencia">
      //             Experiencia
      //          </NavLink>
      //       </div>
      //       <div style={{ margin: '10px' }}>
      //          <a
      //             href={Monica}
      //             target="_blank"
      //             style={{ textDecoration: 'none', color: 'white' }}
      //          >
      //             Curriculum
      //          </a>
      //       </div>
      //    </div>
      //    <div style={{ paddingRight: '50px' }}>Contacto</div>
      // </div>
   );
};

export default NavBar;
