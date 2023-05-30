import styled from "styled-components";

const Container = styled.div`
   display: flex;
   /* align-items: center; */
`;

const Check = styled.input`
   width:25px;

`;
const Label = styled.label`
   padding-left:10px;

   & p{
      margin-top:10px;
   }
`;

const CheckboxTwo = ({ text})=> {
   return (
      <Container>
         <Check type='checkbox'/>             
         <Label><p>{text}</p></Label>
      </Container>
   ); 
}

export default CheckboxTwo;