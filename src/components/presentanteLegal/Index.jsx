import React, { useState,useContext, useEffect } from 'react';
import InputsText from '../utils/Inputs';
import { Container, Row, RowFlex,RowContainer } from '../utils/Container';
import Button from '../utils/Buttons';
import SelectCustom from '../utils/Selects';
import { AppContext } from '../Context/Context';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const index = (props) => {

 
   const { step1Data, setStep1Data } = useContext(AppContext);

   const [formData, setFormData] = useState({
      nombre: step1Data.nombre || '',
      apellidopaterno: step1Data.apellidopaterno || '',
      apellidomaterno: step1Data.apellidomaterno || '',
      tipodocumento: step1Data.tipodocumento || '',
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


      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value,
       }));
    };
    
   //Consumir API de Tipo de Documento

   const [selectOptions, setSelectOptions] = useState([]);
   
   useEffect(() => {
      const fetchData = async () => { 
         try {
            const response = await axios.get('http://127.0.0.1:8000/apitipodocumento/');
            setSelectOptions(response.data);
            console.log(selectOptions)

         } catch (error) {
            console.error('Error al obtener las opciones:', error);
          }

      }
      fetchData();
   }, [])


   
   const handleBuscar = async (e) => {
      e.preventDefault();
    
      const { tipodocumento, numerodocumento } = formData;
    
      try {
        const response = await axios.get(`http://127.0.0.1:8000/apidocumento/${tipodocumento}/${numerodocumento}/`);
        console.log(response.data);
    
        const { apellidoMaterno, apellidoPaterno, nombres } = response.data;
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          apellidomaterno: apellidoMaterno || '',
          apellidopaterno: apellidoPaterno || '',
          nombre: nombres || '',
        }));
    
        setStep1Data((prevStep1Data) => ({
          ...prevStep1Data,
          apellidomaterno: apellidoMaterno || '',
          apellidopaterno: apellidoPaterno || '',
          nombre: nombres || '',
        }));
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    

   return (
      <Container>
         <Row padding='2rem'>
         <form onSubmit={handleSubmitNext} >
            <RowContainer>
               <select
                  label="Tipo de documento*"
                  name="tipodocumento"
                  value={formData.tipodocumento}
                  onChange={handleChange}
                  >
                  <option value="">Seleccione tipo de documento</option>
                  {selectOptions.map((option) => (
                     <option key={option.codigo} value={option.codigo}>
                        {option.descripcion}
                     </option>
                  ))}
               </select>

               <RowFlex>
                  <InputsText        
                     isRounded={true}   
                     label="Número de documento:*"
                     type="text"
                     name="numerodocumento"
                     value={formData.numerodocumento}
                     onChange={handleChange} 
                     placeholder="Ingrese número de documento"
                      />      
                  <Button
                     isDisabled={true}
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
                     isDisabled={true}
                     value={formData.nombre}
                     onChange={handleChange} 
                     type="text"/>
                  <InputsText     
                     width="95%"  
                     isDisabled={true}
                     name="apellidopaterno"
                     value={formData.apellidopaterno}
                     onChange={handleChange} 
                     label="Apellido Paterno:*"
                        type="text" />
                  <InputsText      
                     isDisabled={true}
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