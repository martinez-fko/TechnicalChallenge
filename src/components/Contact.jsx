import React from 'react';
import InputText from './InputText';

const Contact = ({
  contact,
  changeContact,
  submitFormContact,
  contactRef,
  inputTextDay,
}) => {
  return (
    <section className='section' ref={contactRef}>
      <div className='section__content'>
        <img src='/imgs/user.png' alt='user' />
        <div className='section__info'>
          <h2>Datos del contacto</h2>
          <form onSubmit={submitFormContact}>
            <input
              type='email'
              placeholder='Correo electrónico'
              onChange={(e) =>
                changeContact({ ...contact, email: e.target.value })
              }
              value={contact.email}
              ref={inputTextDay}
            />
            <input
              type='text'
              placeholder='Teléfono celular'
              onChange={(e) =>
                changeContact({ ...contact, phone: e.target.value })
              }
              value={contact.phone}
            />
            {contact.email !== '' && contact.phone !== '' && (
              <button className='btn'>Aceptar</button>
            )}
          </form>
        </div>
      </div>
      {(contact.email !== '' || contact.phone !== '') && (
        <div className='output'>
          <h2>Correo electronico: {contact.email}</h2>
          <h2>Teléfono: {contact.phone}</h2>
        </div>
      )}
    </section>
  );
};

export default Contact;
