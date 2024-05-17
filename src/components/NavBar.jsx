import { NavLink } from 'react-router-dom';

import Monica from '../assets/MONICA_AYALA.pdf';

const NavBar = () => {
   const setActive = (isActive) => (isActive ? 'active' : 'inActive');
   return (
      <nav className="navbar navbar-expand-lg">
         <div
            className="container-fluid"
            style={{ backgroundColor: 'transparent !important' }}
         >
            <NavLink className={setActive} to="/">
               <div
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  <i className="fa-solid fa-house"></i>
               </div>
            </NavLink>
            <div
               className="collapse navbar-collapse"
               id="navbarNavAltMarkup"
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
               }}
            >
               <div
                  className="navbar-nav"
                  style={{
                     display: 'flex',
                     justifyContent: 'space-between',
                  }}
               >
                  <div className="menu">
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between',
                        }}
                     >
                        <li
                           style={{ display: 'flex', justifyContent: 'center' }}
                        >
                           <NavLink
                              className={setActive}
                              to="/stack"
                              style={{
                                 marginLeft: '15px',
                                 marginTop: '10px',
                                 marginRight: '15px',
                              }}
                           >
                              Stack
                           </NavLink>
                        </li>
                        <li
                           style={{ display: 'flex', justifyContent: 'center' }}
                        >
                           <NavLink
                              className={setActive}
                              to="/proyectos"
                              style={{
                                 marginTop: '10px',
                                 // marginLeft: '-5px',
                                 marginRight: '10px',
                              }}
                           >
                              {/* <li> */}
                              <span>Proyectos</span>
                              {/* <span>
                                    <i
                                       className="fas fa-tasks"
                                       aria-hidden="true"
                                    ></i>
                                 </span> */}
                              {/* </li> */}
                           </NavLink>
                        </li>
                        <li
                           style={{ display: 'flex', justifyContent: 'center' }}
                        >
                           <NavLink
                              className={setActive}
                              to="/educacion"
                              style={{ margin: '10px' }}
                           >
                              Educación
                           </NavLink>
                        </li>
                        <li
                           style={{ display: 'flex', justifyContent: 'center' }}
                        >
                           <NavLink
                              className={setActive}
                              to="/experiencia"
                              style={{ margin: '10px' }}
                           >
                              Experiencia
                           </NavLink>
                        </li>
                        <li
                           style={{ display: 'flex', justifyContent: 'center' }}
                        >
                           <a
                              href={Monica}
                              target="_blank"
                              style={{
                                 marginLeft: '10px',
                                 marginTop: '10px',
                                 textDecoration: 'none',
                                 color: 'white',
                              }}
                           >
                              Curriculum
                           </a>
                        </li>
                     </div>
                  </div>
               </div>
            </div>
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
               }}
            >
               <li style={{ display: 'flex', marginLeft: 'auto' }}>
                  <NavLink
                     className={setActive}
                     to="contacto"
                     style={{ margin: '10px' }}
                  >
                     Contacto
                  </NavLink>
               </li>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
