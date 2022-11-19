import { useState } from 'react';

const useName = () => {
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [firstLastName, setFirstLastName] = useState('');
  const [secondLastName, setSecondLastName] = useState('');

  const changeName = (newValue) => {
    setName(newValue);
  };

  const changeSecondName = (newValue) => {
    setSecondName(newValue);
  };
  const changeFirstLastName = (newValue) => {
    setFirstLastName(newValue);
  };
  const changeSecondLastName = (newValue) => {
    setSecondLastName(newValue);
  };

  const nameComplet = () => {
    return `${name} ${secondName} ${firstLastName} ${secondLastName}`;
  };

  const submitFormName = (
    data,
    setSteps,
    handleScrollToBirthday,
    handleFocusInputDay
  ) => {
    setSteps(1);
    localStorage.setItem('name', JSON.stringify(data));
    setTimeout(() => {
      handleFocusInputDay();
    }, 100);
  };

  return {
    name,
    firstLastName,
    nameComplet,
    changeName,
    changeSecondName,
    changeFirstLastName,
    changeSecondLastName,
    submitFormName,
  };
};

export default useName;
