import { NavLink } from 'react-router-dom';

import Monica from '../assets/MONICA_AYALA.pdf';

const Home = () => {
   const setActive = ({ isActive }) => (isActive ? 'active' : 'inActive');
   return (
      <div>
         <nav className="navbar navbar-expand-lg">
            <div
               className="container-fluid"
               style={{ backgroundColor: 'transparent !important' }}
            >
               <NavLink className={setActive} to="/">
                  {/* <div> */}
                  <i
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                     className="fa-solid fa-house"
                  ></i>
                  {/* </div> */}
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
                              style={{
                                 display: 'flex',
                                 justifyContent: 'center',
                              }}
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
                              style={{
                                 display: 'flex',
                                 justifyContent: 'center',
                              }}
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
                                 Proyectos
                              </NavLink>
                           </li>
                           <li
                              style={{
                                 display: 'flex',
                                 justifyContent: 'center',
                              }}
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
                              style={{
                                 display: 'flex',
                                 justifyContent: 'center',
                              }}
                           >
                              <NavLink
                                 className={setActive}
                                 to="/experiencia"
                                 style={{ margin: '10px' }}
                              >
                                 Experiencia
                              </NavLink>
                           </li>
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
                  </div>
               </div>
               <div
                  style={{
                     display: 'flex',
                     justifyContent: 'space-between',
                  }}
               >
                  <li
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                     }}
                  >
                     <a
                        href={Monica}
                        className={setActive}
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
         </nav>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               height: '90vh',
               alignContent: 'center',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <div>
               <h1>Mónica Ayala Huerta</h1>
               <span className="nombre">Desarrolladora FullStack</span>
               {/* <span className="nombre">Ingeniero civil en computación</span> */}
            </div>
         </div>
      </div>
   );
};

export default Home;
