import React from 'react';

const Output = ({data}) => {

  const dataValue = () => {
    let values = Object.values(data);
    return values.join(' ');
  };

  return (
    <div className='output'>
        <h2>{dataValue()}</h2>
    </div>
  );
};

export default Output;
