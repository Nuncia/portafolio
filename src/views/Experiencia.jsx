import { NavLink } from 'react-router-dom';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Monica from '../assets/MONICA_AYALA.pdf';
const Experiencia = () => {
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
            style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: '375px' }}
         >
            <section>
               <div className="container py-5">
                  <div className="main-timeline">
                     <div className="timeline left">
                        <div className="card">
                           <div className="card-body p-4">
                              <h4>2019 - 2023</h4>
                              <p className="mb-0">
                                 Analista de BI - Scotiabank
                              </p>
                              <p>
                                 &nbsp;&nbsp;&nbsp;&nbsp; - Toma de
                                 requerimientos <br />
                                 &nbsp;&nbsp;&nbsp;&nbsp; - Análisis de
                                 problemáticas <br />
                                 &nbsp;&nbsp;&nbsp;&nbsp; - Desarrollo de
                                 soluciones
                                 <br />
                                 &nbsp;&nbsp;&nbsp;&nbsp; - Confección de
                                 documentación
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="timeline right">
                        <div className="card">
                           <div className="card-body p-4">
                              <h4>2018 - 2019</h4>
                              <p className="mb-0">
                                 Ingeniero de proyectos - Cuarta Revolución
                              </p>
                              <p>
                                 &nbsp;&nbsp;&nbsp;&nbsp; - Toma de
                                 requerimientos
                                 <br />
                                 &nbsp;&nbsp;&nbsp; &nbsp;- Confección de
                                 matrices de trazabilidad <br />
                                 &nbsp;&nbsp;&nbsp;&nbsp; - Elaboración de
                                 informes para la toma de decisiones
                                 <br />
                                 &nbsp;&nbsp;&nbsp;&nbsp; - Desarrollo con
                                 tecnologías IoT
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="timeline left">
                        <div className="card">
                           <div className="card-body p-4">
                              <h4>2017 - 2018</h4>
                              <p className="mb-0">
                                 Analista y desarrolladora - Accenture
                              </p>
                              <p>
                                 &nbsp;&nbsp;&nbsp;&nbsp; - Generación de
                                 documentación
                                 <br />
                                 &nbsp;&nbsp;&nbsp; &nbsp;- Análisis funcional{' '}
                                 <br />
                                 &nbsp;&nbsp;&nbsp;&nbsp; - Desarrollo <br />
                                 &nbsp;&nbsp;&nbsp;&nbsp; - Mantenimiento
                                 evolutivo de
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aplicaciones
                                 web
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="timeline right">
                        <div className="card">
                           <div className="card-body p-4">
                              <h4>2016 - 2017</h4>
                              <p className="mb-0">
                                 Desarrolladora VirtuaLab – USACH <br />
                                 &nbsp; &nbsp;&nbsp;- Tareas investigación de
                                 nuevas tecnologías utilizadas en entornos
                                 VSTO/Office <br />
                                 &nbsp; &nbsp;&nbsp;- Desarrollo de aplicaciones
                                 web <br />
                                 &nbsp; &nbsp;&nbsp;- Confección de
                                 documentación
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="timeline left">
                        <div className="card">
                           <div className="card-body p-4">
                              <h4>2014 -2016</h4>
                              <p className="mb-0">
                                 Programadora - Switch Software Solution <br />
                                 &nbsp; &nbsp;&nbsp; - Administración de
                                 ambientes no
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 &nbsp;productivos <br />
                                 &nbsp; &nbsp;&nbsp;&nbsp;- Atención de
                                 incidentes <br />
                                 &nbsp; &nbsp;&nbsp;&nbsp;- Soporte a áreas
                                 testing y
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;desarrollo
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Experiencia;
