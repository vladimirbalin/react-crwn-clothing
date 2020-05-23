import './form-input.styles.scss';
import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps}) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {
        label ?

        (<label className={`${(otherProps.value.length || otherProps.placeholder.length) ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>)
        
        :
        null
      }
      
    </div>
  );
};

export default FormInput;
