import React, { useState, useEffect } from 'react';
import banner from '../../assets/banner-home.jpg'
import './home.view.css'
import { Header } from '../../components';

const Home = () =>{

    return (
        <>  
            <Header/>
            <div className="contenedor">
                <img   className="logo-banner" src={banner} />
               
                <div className="text1"> <span class="title-banner"> SELMEC GROUP S.A.C. es una empresa peruana dedicada a trabajos eléctricos, mecánicos y civiles. </span> </div>
                
            </div>
            <div>
            <h3 className="info" > Nuestras principales fortalezas radican en la flexibilidad para el manejo de los contratos con nuestros clientes, ya que nos adecuamos a los cambios que pudiesen presentarse durante los distintos proyectos. Otra fortaleza es nuestra capacidad y experiencia para ejecutar contratos integrales facilitando a nuestros clientes la gestión de sus operaciones. Nuestra principal preocupación es buscar la mayor satisfacción de nuestros clientes.
                  </h3>

            </div>
               
           
        
        </>
    )
}


export default Home;