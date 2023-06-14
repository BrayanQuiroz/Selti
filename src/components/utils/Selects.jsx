import styled from "styled-components";
import PropTypes from 'prop-types';

const SelectWrapper = styled.div`
  width: ${props => props.width || '47%'};
  margin-right: 1rem;
`;

const Select = styled.select`
   display: block;
   width: ${props => props.width || '100%'}; 
   height: calc(1.5em + 0.75rem + 2px);
   padding: 0.375rem 1.75rem 0.375rem 0.75rem;
   font-size: 1rem;
   font-weight: 400;
   line-height: 1.5;
   color: #212529;
   background-color: #fff;
   background-clip: padding-box;
   border: 1px solid #ced4da;
   border-radius: 0.25rem;
   transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

   &:focus{
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
   }
   &::-ms-expand{
      background-color: transparent;
      border: 0;
   }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const InputCustom = ({ label, options, value, onChange,width }) => (
  <SelectWrapper width={width} >
    <Label>{label}</Label>
    <Select  key={value} value={value} onChange={onChange}>
    {options.map((option, index) => (
        <option key={option.codigo} value={option.codigo}>
          {option.descripcion}
        </option>
      ))}
    </Select>
  </SelectWrapper>
);

InputCustom.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      codigo: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.string,
};


export default InputCustom;