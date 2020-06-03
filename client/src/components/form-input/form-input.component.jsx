import React from 'react';
import styled, { css } from "styled-components";

const subColor = 'grey';
const mainColor = 'black';
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;
export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
export const Input = styled.input`
  background: white none;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
    &::placeholder{
      opacity: .4;
    }
    &:focus {
      outline: none;
    }
    &:focus ~ .form-input-label {
      ${shrinkLabelStyles};
    }
`;

const Label = styled.label`
  color: $sub-color;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  
  &.shrink {
    ${shrinkLabelStyles};
  }
`;
const FormInput = ({ handleChange, label, ...otherProps}) => {
  return (
    <div className={otherProps.className}>
      <Group>
        <Input onChange={handleChange} {...otherProps} />
        {
          label ?
            (<Label className={`${(otherProps.value.length || otherProps.placeholder) ? 'shrink' : ''}`}>
              {label}
            </Label>)
            :
            null
        }
      </Group>
    </div>
  );
};

export default FormInput;
