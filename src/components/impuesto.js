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
                <h1 className='title'>Impuestos y contribuciones</h1>
                <div>
                    <h2>Descripción del trámite</h2>
                    <p>
                        Los trámites relacionados con los impuestos y contribuciones son fundamentales para el cumplimiento fiscal de las personas y las empresas.
                        La e-firma, o firma electrónica, es un procedimiento mediante el cual se obtiene una firma digital que permite realizar trámites y transacciones en línea de manera segura y confiable.
                        La inscripción al Registro Federal de Contribuyentes (RFC) es un requisito legal para las personas y empresas que deben cumplir con sus obligaciones fiscales.
                        Este trámite implica registrar los datos fiscales y obtener un número de identificación fiscal. Por otro lado, la facturación electrónica es el proceso de
                        generar y emitir comprobantes fiscales digitales por las ventas de bienes o servicios, de acuerdo con las normas y regulaciones fiscales vigentes.
                        Estos trámites son esenciales para garantizar la transparencia, la correcta declaración de impuestos y contribuciones, así como para facilitar el cumplimiento fiscal en la era digital.
                    </p>
                </div>
                <div>
                    <h2>¿Qué documentos necesitas para tramitar la E-firma?</h2>
                    <ul>
                        <li>Identificacion oficial (INE)</li>
                        <li>Comprobante de domicilio</li>
                        <li>Numero de identificación fiscal (RFC)</li>
                        <li>Solicitud o formulario de registro</li>
                        <li>(se aplican cargos por solicitud de e-firma avanzada)</li>

                    </ul>
                </div>
                <div>
                    <h2>¿Qué documentos necesitas para inscribirse al RFC?</h2>
                    <ul>
                        <li>Identificacion oficial (INE)</li>
                        <li>Clave Única de Registro de Población (CURP)</li>
                        <li>Formulario de solicitud de inscripción</li>
                        <li>Comprobante de domicilio</li>
                    </ul>
                </div>
                <div>
                    <h2>¿Qué documentos necesitas para el tramite de la factura electronica?</h2>
                    <ul>
                        <li>Numero de identificación fiscal (RFC)</li>
                        <li>Certificado de Sello Digital (CSD)</li>
                        <li>Comprobante de domicilio</li>
                        <li>Datos fiscales completos</li>
                        <li>Detalles de la factura</li>
                    </ul>
                </div>
                <div>
                    <h2>Ningun documento requiere de un pago</h2>
                </div>
            </div>
        </div>
    );
}

export default TramiteScreen;
