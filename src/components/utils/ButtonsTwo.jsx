import styled from "styled-components"


const StyledButtonTwo = styled.button`
   background-color: white;
   border: ${({ isColor })  => (isColor ? "#0d6efd":"#DC2626" )} 1px solid;
   padding: 0rem 1.5rem;
   border-radius:5px;
   font-weight: 600;
   color:${({ isColor })  => (isColor ? "#0d6efd":"#DC2626" )};
   cursor: pointer;
   height: 3rem;
   transition: background-color 0.5s ease, color 0.5s ease;
   margin-right: 1rem;;

   &:hover {
      background-color:${({ isColor })  => (isColor ? "#0d6efd":"#DC2626" )};
      color:white;
  }
`;

const ButtonTwo = ({ text,isColor, onClick }) => {
   return(
   <StyledButtonTwo
         isColor={isColor} onClick={onClick} >
         { text}
   </StyledButtonTwo>)

}

export default ButtonTwo;