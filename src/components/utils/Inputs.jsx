import styled from 'styled-components';
import PropTypes from 'prop-types';

const Inputs = styled.input`
  display: block;
  width: ${props => props.width || '100%'}; 
  padding: .375rem .75rem;
  height: 38px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: ${({ isRounded }) => isRounded ? ".25rem 0 0 .25rem" : ".25rem"};
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  
   &:focus{
      color: #495057;
      background-color: #fff;
      border-color: #6c757d;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.25);
   }
   
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const InputWrapper = styled.div`
  width: ${props => props.width || '100%'}; 
`;

const InputCustom = ({ label,...props }) => (
   <InputWrapper>
      <Label>{label}</Label>
      <Inputs {...props} />
   </InputWrapper>
 );
 
 InputCustom.propTypes = {
  //  label: PropTypes.string.isRequired,
   width: PropTypes.string,
 };
 
 export default InputCustom;





