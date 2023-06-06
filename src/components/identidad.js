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
            <h1 className='title'>Identidad, pasaport y migración</h1>
            <div>
                <h2>Descripción del trámite</h2>
                <p>
                El trámite de obtención de un pasaporte y gestión migratoria incluye la presentación de los documentos requeridos, 
                como una identificación válida, y completar una solicitud. Después, se realiza el procesamiento de la solicitud y se realiza una verificación de antecedentes y 
                otros requisitos legales. Una vez aprobada, se emite el pasaporte, que es un documento oficial de identificación y viaje reconocido internacionalmente. 
                Este trámite permite a los individuos cumplir con los requisitos de identidad y migración necesarios para viajar y residir legalmente en otros países.
                </p>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para solicitar tu acta de nacimiento?</h2>
                <ul>
                    <li>Nombre completo</li>
                    <li>Fecha de nacimiento</li>
                    <li>Entidad de registro</li>
                    <li>Sexo</li>
                    <li>Datos de filiacion</li>
                    <li>Para pago en línea, tarjeta de crédito o débito</li>
                    <li>Para pago referenciado, contar con impresora para imprimir el formato de pago</li>
                </ul>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para solicitar la CURP?</h2>
                <ul>
                    <li>Acta de nacimiento</li>
                    <li>Nombre completo</li>
                    <li>Fecha de nacimiento</li>
                    <li>Lugar de nacimiento</li>
                    <li>Comprobante de domicilio</li>
                </ul>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para solicitar una Cartilla Militar?</h2>
                <ul>
                    <li>Clave Única de Registro de Población (CURP)</li>
                    <li>Acta de nacimiento</li>
                    <li>Comprobante de domicilio</li>
                    <li>Identificacion oficial (INE)</li>
                    <li>Comprobante de estudios</li>
                    <li>Para pago referenciado, contar con impresora para imprimir el formato de pago</li>
                </ul>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para solicitar un pasaporte?</h2>
                <ul>
                    <li>Clave Única de Registro de Población (CURP)</li>
                    <li>Identificacion oficial (INE)</li>
                    <li>Acta de nacimiento</li>
                    <li>Comprobante de domicilio</li>
                    <li>Fotografias correspondientes a las normas de la Secretaria de relaciones exteriores</li>
                    <li>Comprobante de pago emitido por la institución</li>
                </ul>
            </div>
            <div>
                <h2>Costos generales para los tramite</h2>
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
                                    <td>$100.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$250.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>150.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$150.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$70.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$90.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$185.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$114.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$60.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$97.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$140.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$100.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$165.00 mxn</td>
                                    
                                </tr>
                                <tr>
                                    <td>$135.00 mxn</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default TramiteScreen;
