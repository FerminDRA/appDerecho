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
            <h1 className='title'>Salud</h1>
            <div>
                <h2>Descripción del trámite</h2>
                <p>
                Los trámites relacionados con la salud abarcan una amplia gama de servicios y procedimientos que buscan garantizar el bienestar de las personas. 
                La atención médica es uno de los principales trámites, brindando servicios de diagnóstico, tratamiento y seguimiento de enfermedades y condiciones médicas. 
                Para acceder a la atención médica, generalmente se requiere presentar documentos como la identificación oficial y, en algunos casos, la tarjeta de seguro médico. Además, 
                la consulta de datos médicos permite a los pacientes acceder a su historial médico, resultados de pruebas y otros registros clínicos, lo cual puede requerir la solicitud y autorización correspondiente. 
                Por último, la consulta de avisos médicos permite a los profesionales de la salud y a las instituciones comunicar información relevante a los pacientes, como resultados de pruebas, cambios en los tratamientos o recordatorios de citas. 
                Estos trámites buscan asegurar un adecuado acceso a la atención médica y la disponibilidad de información relevante para una atención de calidad.
                </p>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para solicitar atencion medica?</h2>
                <ul>
                    <li>Nombre completo</li>
                    <li>Clave Única de Registro de Población (CURP)</li>
                    <li>Identificacion oficial (INE)</li>
                    <li>Tarjeta de seguro médico expedida por la institucion correspondiente</li>
                </ul>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para consultar datos medicos?</h2>
                <ul>
                    <li>Identificacion oficial (INE)</li>
                    <li>Nombre completo del interesado</li>
                    <li>Autorización firmada</li>
                </ul>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para consultar avisos medicos?</h2>
                <ul>
                    <li>Correo electronico donde desea recibir avisos</li>
                    <li>Nombre del interesado</li>
                    <li>Numero de contacto</li>
                </ul>
            </div>
            <div>
                <h2>Ninguna de las consultas requiere de algun pago</h2>
            </div>
        </div>
        </div>
    );
}

export default TramiteScreen;
