import styled from "styled-components";
import { rgba } from "polished";

const StyledButton = styled.button`
  padding: 8px 20px;
  margin-top: ${({ isMarginTop }) => isMarginTop ? "27px" : "0px"};
  height: 38px;
  background-color: #DC2626;
  color: #fff;
  border: none;
  border-radius: ${({ isRounded }) => isRounded ? "0 5px 5px 0" : "5px"};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba("#DC2626", 0.9);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({ text, ...props }) => {
  return (
    <StyledButton
      {...props} >        
      {text}
    </StyledButton>
  );
};

export default Button;