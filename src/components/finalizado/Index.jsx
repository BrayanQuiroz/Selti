import React, { useContext, useState } from 'react';
import { Container, Row, RowFlex, RowContainer,ContentButton } from '../utils/Container';
import InputCustom from '../utils/InputsTwo';
import Tables from '../utils/Tables';
import Input from '../utils/Inputs';
import CheckboxTwo from '../utils/CheckboxTwo'; 
import Button from '../utils/Buttons';
import { Text } from '../utils/Text';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../Context/Context';

const Index = (props) => {

   const {step1Data,step2Data, step3Data } = useContext(AppContext)

   const [showContent, setShowContent] = useState(false)



   const handleClickButton = () => { 
      setShowContent(!showContent)
   }

   const handleInputChange = (event) => {

    };

   const rows =[
      {
         Departamento: 'Huánuco',
         Provincia: 'Lima',
         Distrito: 'Jesus Maria',
         Producto: 'Cafe',
         Hectareas: '20',
      }
   ]

   const rows2 =[
      {
         nombre: 'Brayan',
         apellidoP: 'Quiroz',
         apellidoM: 'Chuquiyauri',
         tipodoc: 'Documento de Identidad',
         numerodoc: '72516991',
         cargo: 'Gerente',
         celular:'962449636'
      }
   ]
   

   const headers = ['Departmento', 'Provincia', 'Distrito', 'Producto', 'Hectareas']
   const headers2 = ['Nombres', 'Apellido Paterno', 'Apellido Materno', 'Tipo de Documento', 'Nro. de Documento','Cargo','Celular']


      
   let data2 = [];

   if (rows2.length > 0) {
      data2 = rows2.map((row) => [         
         <span name="name">{row.nombre}</span>,
         <span name="name">{row.apellidoP}</span>,
         <span name="name">{row.apellidoM}</span>,
         <span name="name">{row.tipodoc}</span>,
         <span name="name">{row.numerodoc}</span>,
         <span name="name">{row.cargo}</span>,
         <span name="name">{row.celular}</span>,
      ]);
   }
   
   let data = [];

   if (rows.length > 0) {
      data = rows.map((row) => [               
         <span name="name">{row.Departamento}</span>,
         <span name="name">{row.Provincia}</span>,
         <span name="name">{row.Distrito}</span>,
         <span name="name">{row.Producto}</span>,
         <span name="name">{row.Hectareas}</span>,
      ]);
   }
   
   return (
      <Container>
         <Row padding="2rem">
            <p>REPRESENTANTE LEGAL</p>      

                  <RowContainer >
                     <InputCustom label='Tipo de documento:' width='97%' />
                  <InputCustom value={step1Data.numerodocumento} label='Número de documento:' width='100%' />

                </RowContainer>            
            <RowContainer>
               <InputCustom width='97%' label='Nombre:'value={step1Data.nombre}  />
               <InputCustom width='97%' label='Apellido Paterno:' value={step1Data.apellidopaterno} />
               <InputCustom  width='100%' label='Apellido Materno:' value={step1Data.apellidomaterno}  />
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
            <p>REPRESENTANTE(S) LEGAL/PERSONA(S) DE CONTACTO</p>
            <Tables headers={headers2} data={data2} />
            <p>UBICACION DE UNIDADES PRODUCTIVAS</p>
            <Tables headers={headers} data={data} />
            <div>
               <CheckboxTwo text={ Text.TextOne} />
               <CheckboxTwo text={ Text.TextTwo} />
            </div>
            <div className='rows'>
               <Button text='Descargar formato' onClick={handleClickButton} />
                  <ContentButton show={showContent ? 1 : 0}>
                     <Button text='Subir archivo' />
                     <Button text='Enviar archivo' />
                  </ContentButton>
            </div>
         </Row>   
      </Container>
   );
}

export default Index;