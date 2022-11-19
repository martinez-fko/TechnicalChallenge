import { useRef, useState } from 'react';

const useBirthday = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const birthdayRef = useRef(null);
  const inputNextBirthday = useRef(null);

  const handleScrollToBirthday = () => {
    if (birthdayRef) {
      birthdayRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };



  const changeDay = (newValue) => {
    setDay(newValue);
  };

  const changeMonth = (newValue) => {
    setMonth(newValue);
  };
  const changeYear = (newValue) => {
    setYear(newValue);
  };

  const birthdayComplet = () => {
    return `${day} ${month} ${year}`;
  };

  const submitFormBirthday = (
    data,
    setSteps,
    handleScrollToContact,
    handleFocusInputEmail
  ) => {
    setSteps(2);
    localStorage.setItem('birthday', JSON.stringify(data));
    setTimeout(() => {
      handleScrollToContact();
      handleFocusInputEmail();
    }, 100);
  };

  const handleFocusInputDay = () => {
    inputNextBirthday.current.focus();
  };

  return {
    day,
    month,
    year,
    changeDay,
    changeMonth,
    changeYear,
    birthdayComplet,
    handleScrollToBirthday,
    submitFormBirthday,
    handleFocusInputDay,
    birthdayRef,
    inputNextBirthday,
  };
};

export default useBirthday;
