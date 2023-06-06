import React from 'react';
import descuento from '../images/descuento.jpg'
import "../styles/carrucel2.css"

const TableComponent = () => {
  return (
    <div className="containerTab">
      <table className='tabla'>
        <thead>
          <tr>
            <th className='col1'>Realiza el pago de tu predial con un descuento del 20% del 6 de junio al 16 de junio
                <p>¡Paga aqui!</p>
            </th>
            <th className='col2'>
                <img className='imgDescuento' src={descuento} alt='descuento'/>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TableComponent;
