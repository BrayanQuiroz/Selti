import React from 'react';
import { Container, Row, RowFlex, RowContainer } from '../utils/Container';
import InputCustom from '../utils/InputsTwo';
import Tables from '../utils/Tables';
import Input from '../utils/Inputs';
import CheckboxTwo from '../utils/CheckboxTwo'; 
import Button from '../utils/Buttons';
import { Text }  from '../utils/Text';

const Index = (props) => {

   const handleInputChange = (event) => {

    };

   const rows =[
      {
         Departamento: 'Huanuco',
         Provincia: 'Lima',
         Distrito: 'Jesus Maria',
         Producto: 'Cafe',
         Hectareas: '20',
      }
   ]
   

   console.log(rows.nombre);

   const headers = ['Departmento', 'Provincia', 'Distrito', 'Producto', 'Hectareas']

   
   let data = [];

   if (rows.length > 0) {
      data = rows.map((row) => [         
         <Input width='50%' name="name" value={row.Departamento} onChange={handleInputChange} disabled/>,
         <Input width='50%' name="name" value={row.Provincia} onChange={handleInputChange} disabled />,
         <Input width='50%' name="name" value={row.Distrito} onChange={handleInputChange} disabled />,
         <Input width='50%' name="name" value={row.Producto} onChange={handleInputChange} disabled />,
         <Input width='50%' name="name" value={row.Hectareas} onChange={handleInputChange} disabled/>,         
      ]);
   }
   
   return (
      <Container>
         <Row padding="2rem">
            <p>REPRESENTANTE LEGAL</p>
            <RowContainer>
               <InputCustom label='Tipo de documento:' width='97%' />
               <InputCustom label='Número de documento:' width='100%' />
            </RowContainer>
            <RowContainer>
               <InputCustom label='Apellidos y Nombres:' />
            </RowContainer>
            <p>Razón social</p>
            <RowContainer>
               <InputCustom label='Razón social:' width='97%' />
               <InputCustom label='RUC:' width='100%' />
            </RowContainer>
            <RowContainer>
               <InputCustom label='Departamento:'width='97%' />
               <InputCustom label='Provincia'width='97%' />
               <InputCustom label='Distrito:'width='100%'/>
            </RowContainer>
            <p>PERSONAS DE CONTACTO / PUNTO(S) FOCAL(ES)</p>
            <Tables headers={headers} data={data} />
            <div>
               <CheckboxTwo text={ Text.TextOne} />
               <CheckboxTwo text={ Text.TextTwo} />
            </div>
            <div>
               <Button text='Descargar formato' />
            </div>
         </Row>   
      </Container>
   );
}

export default Index;