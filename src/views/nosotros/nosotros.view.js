import React, { useState, useEffect } from 'react';
// import banner from '../../assets/banner-home.jpg'
import './nosotros.view.css'
import { Header } from '../../components';

const Nosotros = () =>{

    return (
        <> 
        <Header />
        <div className="caja">
        <h2 className="title">  Misión </h2>
                    <p>Cumplir con el objetivo de nuestros clientes y Generar valor para nuestros grupos de interés a través de los proyectos que gestionamos.</p>
            <h2 className="title"> Visión. </h2>
            <p>Transcender como empresa global reconocida por su ingenio.</p>
        <h2 className="title"> Valores</h2>
            <p>Primero los clientes</p>
            <p>Compromiso con los resultados</p>
            <p>Trabajo en equipo</p>


        </div>
       

        </>
    )
}


export default Nosotros;