import { NavLink } from 'react-router-dom';

import Monica from '../assets/MONICA_AYALA.pdf';
import mammaMia from '../assets/img/mamma_mia.png';
import pokemon from '../assets/img/pokemon_page.png';
import adoptaPerrito from '../assets/img/adopta_un_perrito.png';
const Proyectos = () => {
   const setActive = ({ isActive }) => (isActive ? 'active' : 'inActive');
   return (
      <section>
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
                                 to="/contacto"
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
            className="row row-cols-1 row-cols-md-2 g-5 pt-4 ps-5"
            style={{ marginLeft: '290px' }}
         >
            <div className="col">
               <div
                  className="card"
                  style={{ width: '35rem', border: '3px solid white' }}
               >
                  <img
                     src={mammaMia}
                     className="card-img-top"
                     alt="..."
                     style={{
                        height: '28vh',
                        display: 'flex',
                        justifyContent: 'center',
                     }}
                  />
                  <div className="card-body">
                     <h5 className="card-title">Mamma Mia</h5>
                     <div className="card-text">
                        <ul>
                           <li>Aplicación Web</li>
                           <li>
                              Desarrollado con React, JavaScript, CSS y HTML
                           </li>
                           <li>Datos obtenidos desde JSON</li>
                        </ul>
                     </div>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                     }}
                  >
                     <a
                        href="https://github.com/Nuncia/mammaMia/tree/main"
                        className="btn btn-dark"
                        style={{
                           margin: '10px',
                        }}
                     >
                        Github
                     </a>
                     <a
                        href="#"
                        className="btn btn-dark"
                        style={{
                           margin: '10px',
                        }}
                     >
                        Aplicación
                     </a>
                  </div>
                  <div
                     style={{
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                     }}
                  >
                     <span className="badge bg-secondary">React</span>
                     <span
                        className="badge bg-secondary"
                        style={{ marginLeft: '5px' }}
                     >
                        CSS
                     </span>
                     <span
                        className="badge bg-secondary"
                        style={{ marginLeft: '5px' }}
                     >
                        HTML
                     </span>
                     <span
                        className="badge bg-secondary"
                        style={{ marginLeft: '5px' }}
                     >
                        JavaScript
                     </span>
                  </div>
               </div>
            </div>
            <div className="col">
               <div
                  className="card"
                  style={{ width: '35rem', border: '3px solid white' }}
               >
                  <img
                     src={pokemon}
                     className="card-img-top"
                     alt="..."
                     style={{ height: '28vh' }}
                  />
                  <div className="card-body">
                     <h5 className="card-title">Aplicación Pokemon</h5>
                     <div className="card-text">
                        <ul>
                           <li>Aplicación web</li>
                           <li>
                              Desarrollado con React, JavaScript, CSS y HTML
                           </li>
                           <li>Datos obtenidos dede JSON</li>
                        </ul>
                     </div>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                     }}
                  >
                     <a
                        href="https://github.com/Nuncia/pokemon/tree/main"
                        className="btn btn-dark"
                        style={{
                           margin: '10px',
                        }}
                     >
                        Github
                     </a>
                     <a
                        href="#"
                        className="btn btn-dark"
                        style={{
                           margin: '10px',
                        }}
                     >
                        Aplicación
                     </a>
                  </div>
                  <div
                     style={{
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                     }}
                  >
                     <span className="badge bg-secondary">React</span>
                     <span
                        className="badge bg-secondary"
                        style={{ marginLeft: '5px' }}
                     >
                        CSS
                     </span>
                     <span
                        className="badge bg-secondary"
                        style={{ marginLeft: '5px' }}
                     >
                        HTML
                     </span>
                     <span
                        className="badge bg-secondary"
                        style={{ marginLeft: '5px' }}
                     >
                        JavaScript
                     </span>
                  </div>
               </div>
            </div>
            <div className="col" style={{ paddingBottom: '60px' }}>
               <div
                  className="card"
                  style={{
                     width: '35rem',
                     border: '3px solid white',
                  }}
               >
                  <img
                     src={adoptaPerrito}
                     className="card-img-top"
                     alt="..."
                     style={{ height: '28vh' }}
                  />
                  <div className="card-body">
                     <h5 className="card-title">Adopta un perrito</h5>
                     <div className="card-text">
                        <ul>
                           <li>Aplicación web</li>
                           <li>
                              Desarrollado con React,CSS, HTML y JavaScript
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                     }}
                  >
                     <a
                        href="https://github.com/Nuncia/adoptaUnoPerrito"
                        className="btn btn-dark"
                        style={{
                           margin: '10px',
                        }}
                     >
                        Github
                     </a>
                     <a
                        href="#"
                        className="btn btn-dark"
                        style={{
                           margin: '10px',
                        }}
                     >
                        Aplicación
                     </a>
                  </div>
                  <div
                     style={{
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                     }}
                  >
                     <span className="badge bg-secondary">React</span>
                     <span
                        className="badge bg-secondary"
                        style={{ marginLeft: '5px' }}
                     >
                        CSS
                     </span>
                     <span
                        className="badge bg-secondary"
                        style={{ marginLeft: '5px' }}
                     >
                        HTML
                     </span>
                     <span
                        className="badge bg-secondary"
                        style={{ marginLeft: '5px' }}
                     >
                        JavaScript
                     </span>
                  </div>
               </div>
            </div>
            <div className="col" style={{ paddingBottom: '60px' }}>
               <div
                  className="card"
                  style={{ width: '35rem', border: '3px solid white' }}
               >
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                     </p>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        paddingBottom: '40px',
                     }}
                  >
                     <a
                        href="#"
                        className="btn btn-dark"
                        style={{
                           margin: '10px',
                        }}
                     >
                        Github
                     </a>
                     <a
                        href="#"
                        className="btn btn-dark"
                        style={{
                           margin: '10px',
                        }}
                     >
                        Aplicación
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Proyectos;
