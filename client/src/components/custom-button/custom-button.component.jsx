import React from 'react';
import styled, { css } from "styled-components";

const CustomColors = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const InvertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover{
    background-color: black;
    color: white;
  }
`;
const GoogleStyles = css`
  color: white;
  background-color: #4285f4;
  border: none;
  &:hover{
    background-color: #357ae8;
    color: white;
    border: none;
  }
`;
const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${({ inverted, isGoogleSignIn }) => 
    isGoogleSignIn ? GoogleStyles : inverted ? InvertedStyles : CustomColors
  }
`

const CustomButton = ({ children, ...props }) => {
  return (
    <BaseButton {...props}>
      {children}
    </BaseButton>
  );
};

export default CustomButton;
