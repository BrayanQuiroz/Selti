import React, { useState } from 'react';
import InputsText from '../utils/Inputs';
import { Container, Row, RowFlex,RowContainer } from '../utils/Container';
import SelectCustom from '../utils/Selects';
import Button from '../utils/Buttons';
import CheckboxWithLabel from '../utils/Checkbox';

const index = (props) => {
   
   const [selectedOption, setSelectedOption] = useState('');

   const handleSelectChange = (event) => {
     setSelectedOption(event.target.value);
   };
   const options = [
   
      { value: '01', label: 'Seleccione una opción' },
      { value: '03', label: 'DOCUMENTO DE IDENTIDAD' },
      { value: '06', label: 'CARNET DE EXTRANJERÍA' },
      { value: '26', label: 'CARNET DE PERMISO TEMPORAL DE PERMANENCIA' },
   ];
   const optionsEmpresaTipo = [
      { value: '01', label: 'Seleccione una opción' },
      { value: '03', label: 'Sociedad Anónima (S.A.)' },
      { value: '06', label: 'Sociedad Comercial de Responsabilidad Limitada (S.R.L.)' },
      { value: '26', label: 'Empresa Individual de Responsabilidad Limitada (E.I.R.L.)' },
      { value: '27', label: 'Sociedad Anónima Abierta (S.A.A.)' },
   ];
   
   const optionsEmpresa = [
      
      { value: '01', label: 'Seleccione una opción' },
      { value: '03', label: 'Pequeña' },
      { value: '06', label: 'Media' },
      { value: '26', label: 'Grande' },
    ];
    console.log(selectedOption);
   return (
      <Container>
         <Row padding='2rem'>
            <RowContainer>
            <RowFlex>   
               <InputsText label="RUC:*" type="text"
                  placeholder="Ingrese número de documento"
                  options={options} /> 
               <Button isRounded={true} isMarginTop={true}
                       text="Buscar" />
               </RowFlex> 
               <RowFlex>
                  <InputsText label="Razón social:*" type="text"
                     options={options}/>      
               </RowFlex>
            </RowContainer>
            <RowContainer> 
               <InputsText width="95%" label="Departamento:*"type="text"
                  options={options} />
               
               <InputsText width="95%" label="Provincia:*" type="text"
                           options={options} />
               
               <InputsText width="95%" label="Distrito:*" type="text"
                           options={options} />
            </RowContainer>
            <RowContainer>
               <SelectCustom
                  width="95%"
                  label="Codigo de departamento*"
                  options={options}
                  value={selectedOption}
                  onChange={handleSelectChange} />
               <InputsText       
                  width="95%"   
                  label="Telefono:*"
                  type="text"
                  options={options} />
               <InputsText       
                   width="95%"   
                  label="Celular:*"
                  type="text"
                  options={options} />
            </RowContainer>
            <RowContainer>
               <InputsText       
                     width="100%"   
                     label="Dirección exacta:*"
                     type="text"
                     options={options} />
            </RowContainer>
            <RowContainer>
            <InputsText       
                  width="95%"   
                  label="Correo electronico:*"
                  type="text"
                  options={options} />
               <InputsText       
                  width="95%"   
                  label="Pagina web:*"
                  type="text"
                  options={options} />
            </RowContainer>
            <RowContainer>
               <SelectCustom
                     width="95%"
                     label="Indique tamaño de empresa: *"
                     options={optionsEmpresa}
                     value={selectedOption}
                     onChange={handleSelectChange} />               
               <SelectCustom
                     width="95%"
                     label="Indique tipo de empresa: *"
                     options={optionsEmpresaTipo}
                     value={selectedOption}
                     onChange={handleSelectChange} />
            </RowContainer>
            <RowContainer>
               <CheckboxWithLabel label="Si sus clientes les exigen algún sistema de cumplimiento social y/o certificación para la compra, mencione cual(es) *" />
               <CheckboxWithLabel label="Si cuenta con certificaciones sociales que incluyan también la materia en trabajo infantil. Mencione cual(es) *" />
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