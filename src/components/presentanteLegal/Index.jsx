import React, { useState,useContext } from 'react';
import InputsText from '../utils/Inputs';
import { Container, Row, RowFlex,RowContainer } from '../utils/Container';
import Button from '../utils/Buttons';
import SelectCustom from '../utils/Selects';
import { AppContext } from '../Context/Context';
import { useNavigate } from "react-router-dom";


const index = (props) => {

 
   const { step1Data, setStep1Data } = useContext(AppContext);

   const [formData, setFormData] = useState({
      nombre: step1Data.nombre || '',
      apellidopaterno: step1Data.apellidopaterno || '',
      apellidomaterno: step1Data.apellidomaterno || '',
      // tipodocumento: step1Data.tipodocumento || '',
      numerodocumento: step1Data.numerodocumento || '',
      cargo: step1Data.cargo || '',
      correoElectronico: step1Data.correoElectronico || '',
      numeroCelular: step1Data.numeroCelular || '',
    });
   
   const history = useNavigate();
   
   const handleSubmitNext = (e) => {
      e.preventDefault();
      setStep1Data(formData);
      history('/razonsocial');
     
    };

   const handleChange = (e) => {
      const { name, value } = e.target;
    
      // if (name === 'tipodocumento') {
      //   const selectedOption = options.find((option) => option.value === value);
    
      //   setFormData((prevFormData) => ({
      //     ...prevFormData,
      //     [name]: selectedOption,
      //   }));
      // } else {
      //   setFormData((prevFormData) => ({
      //     ...prevFormData,
      //     [name]: value,
      //   }));
      // }

      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value,
       }));
    
      // Agrega aquí el código para actualizar los valores en el contexto
    };
    
    
   const options = [
      { value: '03', label: 'DOCUMENTO DE IDENTIDAD' },
      { value: '06', label: 'CARNET DE EXTRANJERÍA' },
      { value: '26', label: 'CARNET DE PERMISO TEMPORAL DE PERMANENCIA' },
      
   ];

   const handleBuscar = (e) => {
      e.preventDefault();
      // Aquí puedes colocar el código que deseas ejecutar al hacer clic en el botón "Buscar"
      // Buscar();
    };
   
   console.log(step1Data)

   return (
      <Container>
         <Row padding='2rem'>
         <form onSubmit={handleSubmitNext} >
            <RowContainer>
               <SelectCustom
                  label="Tipo de documento*"
                  options={options}
                  name="tipodocumento"
                  value={formData.tipodocumento}
                  onChange={handleChange} />
               <RowFlex>
                  <InputsText        
                     isRounded={true}   
                     label="Número de documento:*"
                     type="text"
                     name="numerodocumento"
                     value={formData.numerodocumento}
                     onChange={handleChange} 
                     placeholder="Ingrese número de documento"
                     options={options} />      
                  <Button
                     isRounded={true}
                        isMarginTop={true}
                        onClick={handleBuscar}
                        type="submit"
                     text="Buscar"/>
                  </RowFlex>     
               </RowContainer>
               <RowContainer> 
                  <InputsText    
                     width="95%"
                     label="Nombre:*"
                     name="nombre"
                     value={formData.nombre}
                     onChange={handleChange} 
                     type="text"/>
                  <InputsText     
                     width="95%"  
                     name="apellidopaterno"
                     value={formData.apellidopaterno}
                     onChange={handleChange} 
                     label="Apellido Paterno:*"
                        type="text" />
                  <InputsText      
                     value={formData.apellidomaterno}
                     onChange={handleChange} 
                     name="apellidomaterno"
                     label="Apellido Materno:*"
                     type="text"/>
               </RowContainer>
               <RowContainer>
                  <InputsText     
                     width="95%"   
                     name="correoElectronico"
                     value={formData.correoElectronico}
                     onChange={handleChange} 
                     label="Correo electronico:*"
                     type="text"/>
                  <InputsText 
                     width="95%"  
                     name="numeroCelular"
                     value={formData.numeroCelular}
                     onChange={handleChange} 
                     label="Número de celular:*"
                     type="text" />
                  <InputsText        
                     label="Cargo:*"
                     name="cargo"
                     value={formData.cargo}
                     onChange={handleChange} 
                     type="text"/>
               </RowContainer>
               <RowContainer>
                  <p>*Campo de llenado obligatorio</p>
                  <Button            
                     type="submit"
                     onClick={handleSubmitNext }
                     text="Siguiente"/>
            </RowContainer>    
         </form>
         </Row>
      </Container>
   );
}

export default index;