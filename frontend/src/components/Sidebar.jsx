import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useParams, Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faHome, faUsers, faArrowAltCircleRight, faFileSignature, faClipboardCheck, faBoxes,faAtlas} from "@fortawesome/free-solid-svg-icons";
library.add(faAddressCard);
function Sidebar(){
    return (
        <div className="wrapper">
            <div className ="sidebar">
                <div className ="EncabezadoModulo">
                    <div className='iconoEncabezado'>
                    <FontAwesomeIcon className ="iconoEncabezado" icon={ faBoxes } size="5x" color='#092133'/>
                    </div>
                    <h4 className='tituloEncabezado'>Menu</h4>
                    <ul>
                        <li>
                        <Link to ='/'>
                            <FontAwesomeIcon icon={faHome} size='1x' color='#092133'/>
                            <span className=''></span> Inicio
                        </Link>
                        </li>
                        <li>
                        <Link to ='/GestionUsuarios'>
                            <FontAwesomeIcon icon={faUsers} size='1x' color='#092133'/>
                            <span className=''></span> Usuarios
                        </Link>
                        </li>
                     
                        <li>
                        <Link to ='/GestionProyectos'>
                            <FontAwesomeIcon icon={faAtlas} size='1x' color='#092133'/>
                            <span className=''></span> Proyectos
                        </Link>
                        </li>
                        <li>
                        <Link to ='/GestionInscripciones'>
                            <FontAwesomeIcon icon={faFileSignature} size='1x' color='#092133'/>
                            <span className=''></span> Inscripciones
                        </Link>
                        </li>
                        <li>
                        <Link to ='/Avances/AvancesPorProyecto/:proyecto'>
                            <FontAwesomeIcon icon={faClipboardCheck} size='1x' color='#092133'/>
                            <span className=''></span> Avances
                        </Link>
                        </li>
                        <li>
                        <Link  to ='/auth/login'>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} size='1x' color="#092133" />
                        <span className=''></span> Salir
                        </Link>
                        </li>
                        
                        
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export { Sidebar };