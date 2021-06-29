import React, { useState } from 'react';
import logo from '../../assets/logo.jpg'
import './header.css'
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <>
            <div className="container__header row">
                <img className="logo" src={logo}>
                    
                </img>
                <div className="subcontainer__right row ">
                    
                    <Link to="/"> <span className="title-category">Inicio </span></Link> 
                   <Link to="/servicios"> <span className="title-category">Servicios </span></Link>
                    <Link to="/nosotros"><span className="title-category">  Nosotros </span></Link> 
                    <Link to="/contacto"> <span className="title-category"> Contacto </span></Link> 
                    {/* <div className="contact row acian__color--1 ">
                        <IoIosCall />
                        <span className="number"> (01) 411 6001 </span>
                        <span className="letter__call "> Llamanos </span>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default header;