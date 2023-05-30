import styled from 'styled-components';
import PropTypes from 'prop-types';

const Inputs = styled.input`
  display: block;
   background-color: #E6E6E6;
   border: 1px solid #BFBFBF;
   width: ${props => props.width || '100%'}; 
   height: 25px;
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
      <Inputs {...props} disabled={true} />
   </InputWrapper>
 );
 
 InputCustom.propTypes = {
  //  label: PropTypes.string.isRequired,
   width: PropTypes.string,
 };
 
 export default InputCustom;
