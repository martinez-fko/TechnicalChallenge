import React from 'react';
import { useForm } from 'react-hook-form';
import useName from '../hooks/useName';

const Name = ({
  submitFormName,
  handleScrollToBirthday,
  handleFocusInputDay,
  setSteps,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    name,
    firstLastName,
    nameComplet,
    changeName,
    changeSecondName,
    changeFirstLastName,
    changeSecondLastName,
  } = useName();

  return (
    <section className='section'>
      <div className='section__content'>
        <img src='/imgs/user.png' alt='user' />
        <div className='section__info'>
          <h2>¿Cuál es tu nombre?</h2>
          <form
            onSubmit={handleSubmit((data) =>
              submitFormName(
                data,
                setSteps,
                handleScrollToBirthday,
                handleFocusInputDay
              )
            )}
          >
            <input
              type='text'
              placeholder='Nombre'
              onChangeCapture={(e) => changeName(e.target.value)}
              {...register('nombre', { required: true, minLength: 3 })}
            />
            {errors.nombre?.type === 'required' && (
              <span className='error'>El nombre es obligatorio.</span>
            )}
            {errors.nombre?.type === 'minLength' && (
              <span className='error'>El nombre es corto.</span>
            )}

            <input
              type='text'
              placeholder='Segundo nombre'
              onChangeCapture={(e) => changeSecondName(e.target.value)}
              {...register('secondName')}
            />
            <input
              type='text'
              placeholder='Apellido Paterno'
              onChangeCapture={(e) => changeFirstLastName(e.target.value)}
              {...register('firstLastname', { required: true, minLength: 3 })}
            />
            {errors.firstLastname?.type === 'required' && (
              <span className='error'>El Apellido Paterno es obligatorio.</span>
            )}
            {errors.firstLastname?.type === 'minLength' && (
              <span className='error'>El Apellido Paterno es corto.</span>
            )}
            <input
              type='text'
              placeholder='Apellido materno'
              onChangeCapture={(e) => changeSecondLastName(e.target.value)}
              {...register('secondLastName')}
            />
            <button className='btn'>Aceptar</button>
          </form>
        </div>
      </div>
      {(name !== '' || firstLastName !== '') && (
        <div className='output'>
          <h2>{nameComplet()}</h2>
        </div>
      )}
    </section>
  );
};

export default Name;
