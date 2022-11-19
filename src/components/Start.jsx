import React from 'react';

const Start = ({handleStart, startRef}) => {
  return (
    <section className='section' ref={startRef}>
      <div className='section__start'>
      <p>Si tus datos son correctos por favor continuemos</p>
      </div>
      <button onClick={handleStart} className='btnStart'>Iniciar</button>
    </section>
  );
};

export default Start;
