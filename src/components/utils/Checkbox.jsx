import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const CheckboxContainer = styled.div`
   width:90%;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   & .checkbox{
      width:100%;
   }
   `;

const CheckboxLabel = styled.label`
  /* width:100%; */
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Input = styled.input`
  transition: width 0.3s ease-in-out;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  opacity: ${({ checked }) => (checked ? '1' : '0')};
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  width: ${({ checked }) => (checked ? '200px;' : '0')};
  animation: ${({ checked }) => (checked ? slideIn : '')} 0.3s forwards;
`;

const slideIn = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 90%;
    opacity: 1;
  }
`;

const CheckboxWithLabel = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
     <CheckboxContainer>
       <CheckboxLabel>{label}</CheckboxLabel>
         <div className='checkbox'>           
            <p>{isChecked ? 'Si' : 'No'}</p>
            <Checkbox
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            />
            {isChecked && (
               <Input
               checked={isChecked}
               value={inputValue}
               onChange={handleInputChange}
               />
               )}
            </div>
    </CheckboxContainer>
  );
};

export default CheckboxWithLabel;
