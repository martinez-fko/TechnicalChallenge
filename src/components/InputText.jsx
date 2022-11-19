import React from 'react';

const InputText = ({ onChange, value, placeholder, refInput }) => {
  return (
    <>
      <input
        ref={refInput}
        type='text'
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputText;
