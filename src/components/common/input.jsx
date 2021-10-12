import React from 'react';

const Input = ({ name, label, error, ...other }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        {...other}
        autoFocus={name === 'username'}
        name={name}
        id={name}
        className='form-control'
        placeholder={label}
      />
      {
        error && <div className='alert alert-danger mt-2'>{error}</div>
      }
    </div>
  );
}

export default Input;