import styled from "styled-components"


const StyledButtonTwo = styled.button`
   background-color: white;
   border: ${({ isColor })  => (isColor ? "#0d6efd":"#DC2626" )} 1px solid;
   padding: 0rem 1.5rem;
   border-radius:10px;
   font-weight: 600;
   color:${({ isColor })  => (isColor ? "#0d6efd":"#DC2626" )};
   cursor: pointer;
   height: 3rem;
   transition: background-color 0.5s ease, color 0.5s ease;

   &:hover {
      background-color:${({ isColor })  => (isColor ? "#0d6efd":"#DC2626" )};
      color:white;
  }
`;

const ButtonTwo = ({ text,isColor }) => {
   return(
   <StyledButtonTwo
   isColor={isColor}>
         { text}
   </StyledButtonTwo>)

}

export default ButtonTwo;