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
            <h1 className='title'>Energía</h1>
            <div>
                <h2>Descripción del trámite</h2>
                <p>
                El recibo de luz es el documento mensual o bimestral que proporciona información detallada sobre el consumo de energía eléctrica y los cargos correspondientes. 
                Este documento es emitido de manera automática por la compañía eléctrica y se envía al titular del servicio. El recibo de luz incluye datos como el período de facturación, 
                la lectura actual y anterior del medidor, el consumo de energía en kilovatios-hora, los costos unitarios, impuestos, cargos adicionales y el total a pagar. 
                Es importante revisar detenidamente el recibo para asegurarse de la precisión de los datos y realizar los pagos correspondientes dentro de los plazos establecidos. En caso de alguna discrepancia o duda, se 
                recomienda contactar a la compañía eléctrica para obtener aclaraciones o resolver cualquier problema relacionado con el recibo de luz.
                </p>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para solicitar el recibo?</h2>
                <ul>
                    <li>Contrato del servicio</li>
                    <li>Identificacion oficial (INE)</li>
                    <li>Numero de contrato o cuenta</li>
                </ul>
            </div>
            <div>
                <h2>¿Qué documentos necesitas para reportar fallas en el servicio?</h2>
                <ul>
                    <li>Numero de contrato o cuenta</li>
                    <li>Ubicación y dirección exacta</li>
                    <li>Descripción de la falla</li>
                    <li>Fecha y hora de la falla</li>
                </ul>
            </div>
            <div>
                <h2>No tiene nigun costo adicional el solicitar cualquiera de estos tramites</h2>
            </div>
        </div>
        </div>
    );
}

export default TramiteScreen;
