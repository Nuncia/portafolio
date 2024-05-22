import { NavLink } from 'react-router-dom';

import Monica from '../assets/MONICA_AYALA.pdf';
import postgres from '../assets/img/postgres.png';
import javaScript from '../assets/img/js.png';
import node from '../assets/img/nodejs.png';
import express from '../assets/img/express.png';
import React from '../assets/img/react.png';
import Vite from '../assets/img/vite.png';
import Git from '../assets/img/git.png';
import Office from '../assets/img/office.png';
import VSCODE from '../assets/img/vs_code.png';
import Grafana from '../assets/img/grafana.jpeg';
import Server from '../assets/img/server.jpeg';

const Stack = () => {
   const setActive = ({ isActive }) => (isActive ? 'active' : 'inActive');
   return (
      <>
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
         <div style={{ textAlign: 'center', padding: '50px' }}>
            <div>
               <h1>Lenguajes y Bases de datos</h1>
               <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '146px',
                        marginRight: '50px',
                     }}
                  >
                     <img
                        style={{
                           width: '181px',
                           paddingBottom: '15px',
                           marginLeft: '-133px',
                        }}
                        src={Server}
                        alt="SQL Server"
                        onClick={() =>
                           window.open(
                              'https://www.microsoft.com/es-es/sql-server/sql-server-downloads'
                           )
                        }
                     />
                     <span style={{ marginLeft: '-139px' }}>SQL Server</span>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '323px',
                        marginRight: '50px',
                     }}
                  >
                     <img
                        style={{ width: '159px' }}
                        src={postgres}
                        alt="Postgres"
                        onClick={() =>
                           window.open('https://www.postgresql.org/')
                        }
                     />
                     <span style={{ marginLeft: '-141px' }}>Postgres</span>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '110px',
                     }}
                  >
                     <img
                        style={{ width: '144px' }}
                        src={javaScript}
                        alt="JavaScript"
                        onClick={() =>
                           window.open('https://developer.mozilla.org/es/')
                        }
                     />
                     <span style={{ marginLeft: '35px', marginTop: 'auto' }}>
                        JavaScript
                     </span>
                  </div>
               </div>
            </div>
            <div style={{ marginTop: '100px' }}>
               <h1>Frameworks y tecnología</h1>
               <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '181px',
                     }}
                  >
                     <img
                        style={{ width: '181px' }}
                        src={node}
                        alt="Node"
                        onClick={() => window.open('https://nodejs.org/en')}
                     />
                     <span>Node</span>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '181px',
                     }}
                  >
                     <img
                        style={{ width: '181px' }}
                        src={express}
                        alt="Express"
                        onClick={() => window.open('https://expressjs.com/es/')}
                     />
                     <span>Express</span>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '181px',
                     }}
                  >
                     <img
                        style={{ width: '181px' }}
                        src={React}
                        alt="React"
                        onClick={() => window.open('https://es.react.dev/')}
                     />
                     <span>React</span>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '181px',
                     }}
                  >
                     <img
                        style={{ width: '181px' }}
                        src={Vite}
                        alt="Vite"
                        onClick={() => window.open('https://es.vitejs.dev/')}
                     />
                     <span>Vite</span>
                  </div>
               </div>
            </div>
            <div style={{ marginTop: '100px' }}>
               <h1>Herramientas y plataforma</h1>
               <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '181px',
                     }}
                  >
                     <img
                        style={{ width: '181px' }}
                        src={Git}
                        alt="Git"
                        onClick={() => window.open('https://git-scm.com/')}
                     />
                     <span>Git</span>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '181px',
                     }}
                  >
                     <img
                        style={{ width: '181px' }}
                        src={Office}
                        alt="Office"
                        onClick={() =>
                           window.open(
                              'https://www.microsoft.com/es-cl/microsoft-365/microsoft-office'
                           )
                        }
                     />
                     <span>Office</span>
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '181px',
                     }}
                  >
                     <img
                        style={{ width: '181px' }}
                        src={VSCODE}
                        alt=""
                        onClick={() =>
                           window.open('https://code.visualstudio.com/')
                        }
                     />
                     <span>VS Code</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <img
                        style={{ width: '181px' }}
                        src={Grafana}
                        alt=""
                        onClick={() => window.open('https://grafana.com/')}
                     />
                     <span>Grafana</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Stack;
