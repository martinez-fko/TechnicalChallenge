import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__title'>
        <h1>Titulo del formulario</h1>
        <img src='/imgs/question.png' alt='img-question' />
      </div>
      <p className='header__content'>
        <i className='bx bx-timer'></i> En menos de 5 minutos.
      </p>
      <div className='header__timer'></div>
    </header>
  );
};

export default Header;
