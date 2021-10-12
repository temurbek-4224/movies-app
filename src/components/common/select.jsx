import React from 'react';

const InputSelect = (props) => {
  const { label, name, options, error } = props;

  return (
    <div className="input-group">
      <label className='input-group-text' htmlFor={name}>{label}</label>
      <select onChange={props.onChange} className='custom-select' name={name} id={name}>
        {
          options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))
        }
      </select>
      {
        error && <div className='alert alert-danger mt-2'>{error}</div>
      }
    </div>
  )
}

export default InputSelect;