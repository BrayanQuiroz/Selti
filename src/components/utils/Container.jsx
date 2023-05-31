import styled, { css } from 'styled-components';

export  const Container = styled.div`
  max-width: ${props => props.maxWidth || '72rem'}; 
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem; 
  padding-right: 1.5rem;
`;

export const Row = styled.div`  
  padding: ${props => props.padding || '0rem'}; 
  background-color: white;
  /* width: ${props => props.width || '100%'}; */
  height: calc(100% - 158.8px);
  & .RowTwo{
    width: 100%;
    height: 63px;
  }

  & .rows{
    display: flex;
    padding-top: 1.5rem;
  }

  & .RowThree{
    width: 100%;
    height: calc(100vh - 158.8px);
  }
`;

export const RowFlex = styled.div`
  display: flex;
  width: ${props => props.width || '47%;'};
  height: 63px;
  & p{
      background-color:red;
      display: inline-block;
      width: 100%;
    }
`;

export const RowContainer = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 2rem 0;

  & .flex{
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  & div p:first-of-type{
    color:red;
    font-weight: 600;
    font-size: 1.1rem;
  }

  & div p:nth-of-type(2){

  }
`;

export const ContentButton = styled.div`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  margin-left: 1.5rem;

  & :first-of-type{
    margin-right: 1.5rem;
  }

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
      max-height: 50px; 
    `}
`;


export const ContainerConfirmacion = styled.div`

  width: 800px;
  height: 700px;
  background-color:white;
`;