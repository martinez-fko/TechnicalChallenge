import React from 'react';
import useBirthday from '../hooks/useBirthday';
import { useForm } from 'react-hook-form';

const Birthday = ({
  setSteps,
  handleScrollToContact,
  birthdayRef,
  submitFormBirthday,
  inputNextBirthday,
  handleFocusInputEmail,
}) => {
  const { day, changeDay, changeMonth, changeYear, birthdayComplet } =
    useBirthday();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { ref, ...rest } = register('day');

  return (
    <section className='section' ref={birthdayRef}>
      <div className='section__content'>
        <img src='/imgs/user.png' alt='user' />
        <div className='section__info'>
          <h2>¿Cuál es tu fecha de nacimiento?</h2>
          <form
            onSubmit={handleSubmit((data) =>
              submitFormBirthday(
                data,
                setSteps,
                handleScrollToContact,
                handleFocusInputEmail
              )
            )}
          >
            <input
              type='text'
              onChangeCapture={(e) => changeDay(e.target.value)}
              placeholder={'Dia'}
              {...rest}
              name='day'
              ref={(e) => {
                ref(e);
                inputNextBirthday.current = e;
              }}
            />
            {errors.day && (
              <span className='error'>El día es obligatorio.</span>
            )}
            <input
              type='text'
              onChangeCapture={(e) => changeMonth(e.target.value)}
              placeholder={'Mes'}
              {...register('month', { required: true })}
            />
            {errors.month === 'required' && (
              <span className='error'>El mes es obligatorio.</span>
            )}
            <input
              type='text'
              placeholder={'Año'}
              onChangeCapture={(e) => changeYear(e.target.value)}
              {...register('year', { required: true })}
            />
            {errors.year && (
              <span className='error'>El año es obligatorio.</span>
            )}
            {day !== '' && <button className='btn'>Aceptar</button>}
          </form>
        </div>
      </div>
      {day !== '' && (
        <div className='output'>
          <h2>{birthdayComplet()}</h2>
        </div>
      )}
    </section>
  );
};

export default Birthday;
