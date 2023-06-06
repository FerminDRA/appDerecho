import React from 'react';
import '../styles/tramitesDet.css'
import {useNavigate } from "react-router-dom";

const TramiteScreen = () => {
    const navigate = useNavigate();

    const handleIrClick = (ruta) => {
        navigate(ruta);
    };


    return (
        <div>
            <button className="reload-button" onClick={() => handleIrClick("/tramites")}>Regresar</button>
        <div className='cuerpo'>
            <h1 className='title'>Educación</h1>
            <div>
                <h2>Descripción del trámite</h2>
                <p>
                La cédula profesional es el documento oficial que acredita la formación académica de una persona y le permite ejercer su profesión. Para obtenerla, 
                se deben seguir los procedimientos establecidos por la Dirección General de Profesiones, como presentar la documentación requerida, cumplir con los requisitos académicos y pagar las tasas correspondientes. 
                Por otro lado, el trámite de becas implica solicitar y cumplir con los requisitos establecidos por las instituciones o programas de becas, como presentar la solicitud, demostrar méritos académicos o situación económica, y 
                seguir los plazos y procesos establecidos. En cuanto al registro en la UNADM, se trata de inscribirse en la plataforma de la Universidad Abierta y a Distancia de México, 
                completando el formulario de registro y proporcionando la documentación requerida para formalizar la matriculación en los programas académicos ofrecidos.
                </p>
            </div>
            
            <div>
                <h2>¿Qué documentos necesitas para solicitar tu Cedula profesional?</h2>
                <ul>
                    <li>Titulo profesional expedido por una institucion educativa</li>
                    <li>Acta de nacimiento</li>
                    <li>Identificacion Oficial (INE)</li>
                    <li>Clave Única de Registro de Población (CURP)</li>
                    <li>Comprobante de pago</li>
                </ul>
            </div>
            <div>
                <h2>Costos generales para el tramite de la cedula profesional</h2>
                <div className='table-container'>
                    <div className='column-left'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Aguascalientes</td>
                                    
                                </tr>
                                <tr>
                                    <td>Baja California</td>
                                    
                                </tr>
                                <tr>
                                    <td>Baja California Sur</td>
                                    
                                </tr>
                                <tr>
                                    <td>Campeche</td>
                                    
                                </tr>
                                <tr>
                                    <td>Chiapas</td>
                                    
                                </tr>
                                <tr>
                                    <td>Chihuahua</td>
                                    
                                </tr>
                                <tr>
                                    <td>Ciudad de México</td>
                                    
                                </tr>
                                <tr>
                                    <td>Coahuila</td>
                                    
                                </tr>
                                <tr>
                                    <td>México</td>
                                    
                                </tr>
                                <tr>
                                    <td>Oaxaca</td>
                                    
                                </tr>
                                <tr>
                                    <td>Puebla</td>
                                    
                                </tr>
                                <tr>
                                    <td>Querétaro</td>
                                    
                                </tr>
                                <tr>
                                    <td>Quintana Roo</td>
                                    
                                </tr>
                                <tr>
                                    <td>Veracruz</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='column-right'>
                    <table>
                            <thead>
                                <tr>
                                    <th>Costo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$900.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$2020.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$2050.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$1200.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$1100.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$1180.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$1805.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$1740.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$1600.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$2120.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$1140.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$1130.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$1520.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$1760.00 mxn</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para solicitar una Beca?</h2>
                <ul>
                    <li>Formulario de solicitud</li>
                    <li>Comprobante de inscripción o admisión</li>
                    <li>Documentos académicos</li>
                    <li>Comprobante de ingresos o situación económica</li>
                    <li>Cartas de recomendación (opcional)</li>
                    <li>Ensayos o redacciones (opcional)</li>
                    <li>No tiene nigun costo</li>
                </ul>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para solicitar el registro UNADM?</h2>
                <ul>
                    <li>Identificacion Oficial (INE)</li>
                    <li>Comprobante de estudios</li>
                    <li>Acta de nacimiento</li>
                    <li>Clave Única de Registro de Población (CURP)</li>
                    <li>Comprobante de domicilio</li>
                    <li>Fotografía</li>
                    <li>No tiene nigun costo</li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default TramiteScreen;
