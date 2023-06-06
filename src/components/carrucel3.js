import React from 'react';
import grafico from '../images/grafica.png'
import "../styles/carrucel2.css"

const TableComponent = () => {
  return (
    <div className="containerTab">
      <table className='tabla'>
        <thead>
          <tr>
            <th>
                <img className='imgDescuento' src={grafico} alt='descuento'/>
            </th>
            <th className='col1'>
                <p>En los últimos meses, el municipio de [nombre del municipio] ha experimentado un aumento alarmante en la inflación, lo que representa un desafío económico significativo para la comunidad local. Los residentes ver mas...</p>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TableComponent;
