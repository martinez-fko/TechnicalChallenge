import React from 'react';
import useGetDataLocal from '../hooks/useGetDataLocal';

const Result = ({resultRef}) => {
  const { getData, getDataContact } = useGetDataLocal();
  const contact = getDataContact();

  return (
    <section className='section' ref={resultRef}>
      <div className="info">
        <p>Fecha de Nacimiento: {getData('birthday')}</p>
        <p>Correo Electrónico: {contact.email}</p>
        <p>Teléfono celular: {contact.phone}</p>
        <p>Nombre: {getData('name')}</p>
      </div>
    </section>
  );
};

export default Result;
