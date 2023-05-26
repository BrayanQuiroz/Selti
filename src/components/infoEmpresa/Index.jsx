import React from 'react';
import { Container, Row, RowFlex,RowContainer } from '../utils/Container';

const  Index= (props)=> {
   return (
      <Container>
         <Row padding='2rem'>
            <RowContainer>
               <div>
                  <p>REPRESENTANTE(S) LEGAL(ES)</p> 
                  <p>(Ingresar un máximo de 3 presentantes)</p>
               </div>
            </RowContainer>
            <RowContainer>
               
            </RowContainer>

         </Row>
      </Container>
   );
}

export default Index;