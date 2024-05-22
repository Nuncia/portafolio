import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Monica from '../assets/MONICA_AYALA.pdf';

const Contacto = () => {
   const setActive = ({ isActive }) => (isActive ? 'active' : 'inActive');

   return (
      <div>
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
            className="contacto"
            style={{
               // height: '78vh',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               height: '100vh',
            }}
         >
            <div
               className=" mb-3"
               style={{
                  width: '1198px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginTop: '-187px',
               }}
            >
               <input
                  type="email"
                  className="w-50 form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  style={{ backgroundColor: 'white !important' }}
               />
               <br />
               <br />
               <textarea
                  className="form-control w-50"
                  placeholder="Comentarios"
                  id="floatingTextarea"
                  style={{ backgroundColor: 'white !important' }}
               ></textarea>
               <br />
               <br />
               <button
                  className="w-25 p-2"
                  style={{
                     color: 'black',
                  }}
               >
                  Enviar
               </button>
            </div>
         </div>
      </div>
   );
};

export default Contacto;
