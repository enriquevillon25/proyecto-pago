import React, { useState, useEffect } from 'react';
// import banner from '../../assets/banner-home.jpg'
import './servicios.view.css'
import serviciocivil1 from '../../assets/servicio-civil-1.jpg'
import servicioelec1 from '../../assets/servicio-electrico-1.jpg'
import servicioelec2 from '../../assets/servicio-electrico-2.jpg'
import electricoicon from '../../assets/servicio-electrico-icono.png'
import mecanicoicon from '../../assets/servicio-mecanio-icon.jpg'
import mecanicoser from '../../assets/servicios-mecanico-1.png'
import civilicon from '../../assets/servicio-civil-icono.png'
import { Header } from '../../components';

const Servicios = () =>{

    return (
        <>  
        <Header />
              <h1 className="title"> Servicios</h1>
              <div className="container-iconos">
                <div>
                    <img  class="icon"src={electricoicon} />
                    <span> SERVICIOS  ELECTRICOS</span>
                </div>
                <div>
                    <img class="icon" src={mecanicoicon} />
                    <span> SERVICIOS MECANICOS</span>
                </div>
                <div>
                    <img class="icon" src={civilicon} />
                    <span> SERVICIOS CIVILES</span>
                </div>
              </div>
              <div className="container-servicios-info">
              <p className="title">    SERVICIOS ELECTRICOS </p>
              <p className="title-sub">OOfrecemos servicios de instalación, mantenimiento y reparaciones eléctrico industrial</p>
                    <p className="title">    SERVICIOS MECANICOS </p>
                    <p className="title-sub">    Oofrecemos servicios de planeación y dirección o de operaciones de manufactura y mantenimiento de maquinaria</p>
                    <p className="title-sub">    Evaluación y optimización de procesos de conversión de energía </p>
                    <p className="title-sub">   Servicios de identificación y resolución de problemas relacionados con máquinas y con procesos de transformación y usos del calor y la energía.  </p>
                    <p className="title-sub">  Servicios de planeación y ejecución de proyectos o investigaciones relacionados con sistemas térmicos o mecánicos</p>
                    <p className="title-sub">   Servicios de calibración y alineamiento de equipos</p>
                    <p className="title">    SERVICIOS CIVILES </p>
                    <p className="title-sub">    Ofrecemos servicios de organización y realización de trabajos de albañilería</p>
                    <p className="title-sub">    Obra de fábrica, cubiertas cerámicas y revestimientos con morteros y pastas</p>
                    <p className="title-sub" >   Servicios de gasfitería </p>
                    <div className="servicios">
                   
                    <img  className="foto" src={servicioelec1} />
                  
                   
                    
                </div>
              </div>
                 
           
        </>
    )
}


export default Servicios;