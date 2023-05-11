import React, { useState } from 'react';
import InputsText from '../utils/Inputs';
import { Container, Row, RowFlex,RowContainer } from '../utils/Container';
import SelectCustom from '../utils/Selects';
import Button from '../utils/Buttons';

const index = (props) => {
   
   const [selectedOption, setSelectedOption] = useState('');

   const handleSelectChange = (event) => {
     setSelectedOption(event.target.value);
   };
   const options = [
      { value: '03', label: 'DOCUMENTO DE IDENTIDAD' },
      { value: '06', label: 'CARNET DE EXTRANJERÍA' },
      { value: '26', label: 'CARNET DE PERMISO TEMPORAL DE PERMANENCIA' },
    ];
    console.log(selectedOption);
   return (
      <Container>
         <Row padding='2rem'>
            <RowContainer>
            <RowFlex>   
               <InputsText     
                  width="78%"              
                  label="RUC:*"
                  type="text"
                  placeholder="Ingrese número de documento"
                  options={options} /> 
               <Button
                  isRounded={true}
                  isMarginTop={true}
                  text="Buscar" />
               </RowFlex> 
               <RowFlex>
                  <InputsText                   
                     label="Razón social:*"
                     type="text"
                     options={options}/>      
               </RowFlex>
            </RowContainer>
            <RowContainer> 
              

               <InputsText        
                  width="90%"
                  label="Personal natural:*"
                  type="text"
                     options={options} />
               <InputsText        
                  width="90%"
                  label="Personal natural:*"
                  type="text"
                     options={options} />
               <InputsText       
                   width="90%"   
                  label="Personal natural:*"
                  type="text"
                  options={options} />
                
            </RowContainer>
            <RowContainer>
               <p>*Campo de llenado obligatorio</p>
               <Button               
                     text="Siguiente"/>
            </RowContainer>
         </Row>
      </Container>
   );
}

export default index;