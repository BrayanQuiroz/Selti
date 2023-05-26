import styled from "styled-components"

const StyledButtonTwo = styled.button`
   background-color: white;
   border: red 1px solid;
   /* width: 10%; */
   border-radius:20px;
   color:blue;
`;

const ButtonTwo = ({ text, props }) => {
   return(
   <StyledButtonTwo
      {...props}>
      {text}
   </StyledButtonTwo>)

}

export default ButtonTwo;