import styled from 'styled-components';

export  const Container = styled.div`
  max-width: ${props => props.maxWidth || '72rem'}; 
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem; 
  padding-right: 1.5rem;
`;

export const Row = styled.div`
  width: 100%;
  
  padding: ${props => props.padding || '0rem'}; 
  background-color: white;
  & .RowTwo{
    width: 100%;
    height: 63px;
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

  & div p:first-of-type{
    color:red;
    font-weight: 600;
    font-size: 1.1rem;
  }

  & div p:nth-of-type(2){

  }
`;
