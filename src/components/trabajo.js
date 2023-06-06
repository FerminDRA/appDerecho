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
            <h1 className='title'>Trabajo</h1>
            <div>
                <h2>Descripción del trámite</h2>
                <p>
                Los trámites relacionados con el trabajo abarcan una variedad de aspectos importantes para los trabajadores. La consulta del NSS (Número de Seguridad Social) 
                permite a los empleados acceder a información sobre su afiliación al sistema de seguridad social y obtener datos relevantes para trámites posteriores. 
                La búsqueda de empleo implica la exploración de oportunidades laborales, ya sea a través de plataformas en línea, agencias de empleo o contactos personales, 
                con el objetivo de encontrar un trabajo adecuado. Por otro lado, las semanas cotizadas se refieren al número de semanas en las que un trabajador ha realizado
                contribuciones al sistema de seguridad social, lo cual es crucial para acceder a beneficios como pensiones o seguros. Estos trámites están diseñados para asegurar el bienestar y la protección de los trabajadores,
                ofreciendo acceso a servicios y oportunidades laborales, así como garantizando derechos y prestaciones adecuadas en el ámbito laboral.
                </p>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para consultar el NSS?</h2>
                <ul>
                    <li>Identificacion oficial (INE)</li>
                    <li>Comprobante de domicilio</li>
                    <li>Clave Única de Registro de Población (CURP)</li>
                    <li>No tiene ningun costo</li>
                </ul>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para buscar empleo?</h2>
                <ul>
                    <li>Currículum vitae (CV) actualizado</li>
                    <li>Cartas de recomendación</li>
                    <li>Certificados o diplomas</li>
                    <li>Identificación oficial (INE)</li>
                    <li>Referencias personales</li>
                </ul>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para solicitar las semanas cotizadas?</h2>
                <ul>
                    <li>Clave Única de Registro de Población (CURP)</li>
                    <li>Identificacion oficial (INE)</li>
                    <li>Numero de seguro social NSS</li>
                </ul>
            </div>
            <div>
                <h2>Ninguno de estos tramites tiene un costo</h2>
            </div>
        </div>
        </div>
    );
}

export default TramiteScreen;
