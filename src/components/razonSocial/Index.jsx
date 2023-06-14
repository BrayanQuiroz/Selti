import React, { useContext, useEffect, useState } from 'react';
import InputsText from '../utils/Inputs';
import { Container, Row, RowFlex,RowContainer } from '../utils/Container';
import SelectCustom from '../utils/Selects';
import Button from '../utils/Buttons';
import CheckboxWithLabel from '../utils/Checkbox';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../Context/Context';
import axios from 'axios'

const index = (props) => {
   
   const [selectedOption, setSelectedOption] = useState('');

   const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
      
   };

   const [selectOptions, setSelectOptions] = useState([]);

   useEffect(() => {
      const fetchData = async () => { 
         try {
            const response = await axios.get('');
         } catch (error) {
            console.error('Error al obtener las opciones:', error);
          }
      }
    })

   const { step2Data, setStep2Data } = useContext(AppContext);

   const [formData, setFormData] = useState({
      ruc:step2Data.ruc,
     razonsocial:step2Data.razonsocial,
     departamento:step2Data.departamento,
     provincia:step2Data.provincia,
     distrito: step2Data.distrito,
     direccion:step2Data.direccion,
     correoElectronico: step2Data.correoElectronico,
      web:step2Data.web,
      celular:step2Data.celular,
      telefono:step2Data.telefono,
     tamanoEmpresa: step2Data.tamanoEmpresa,
     tipoEmpresa: step2Data.tipoEmpresa,
     cantidadTrabajadores: step2Data.cantidadTrabajadores,
     paisExporta: step2Data.paisExporta,
     certificadoCompra: step2Data.certificadoCompra,
     certificadoInfantil: step2Data.certificadoInfantil,
   });

   const handleChange = (e) => {
      const { name, value } = e.target;    

      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value,
       }));
   
    };

   const history = useNavigate();
   const handleSubmitNext = (e) => {
      e.preventDefault();
      setStep2Data(formData);
      history('/infoEmpresa');
     
    };
   
   const options = []
   
   const optionsEmpresa = [];   
   const optionsEmpresaTipo = []

   const handleBuscar = async (e) => {
      e.preventDefault();
      console.log('se dio click en buscar')
      const { ruc } = formData;

      try {
         const response = await axios.get(`http://127.0.0.1:8000/apisunat/${ruc}`);
         console.log(response.data)

         const { desc_dep, desc_dist, desc_prov, ddp_nomvia, ddp_nombre } = response.data;
         
         setFormData((prevFormData) => ({
            ...prevFormData,
            departamento: desc_dep || '',
            razonsocial: ddp_nombre ||'',
            provincia: desc_prov || '',
            distrito: desc_dist || '',
         }));

         setStep2Data((prevStep2Data) => ({
            ...prevStep2Data,
            departamento: desc_dep || '',
            razonsocial: ddp_nombre ||'',
            provincia: desc_prov || '',
            distrito: desc_dist || '',
         }))

      } catch (error) {

       }
    }

   return (
      <Container>
         <Row padding='2rem'>
            <RowContainer>
            <RowFlex>   
                  <InputsText
                     label="RUC:*" type="text"
                     name="ruc"
                     onChange={handleChange}
                     value={formData.ruc}
                  placeholder="Ingrese número de documento"
                  options={options} /> 
                  <Button
                     isRounded={true}
                     isMarginTop={true}
                     onClick={handleBuscar}
                     type="submit"
                     text="Buscar" />
               </RowFlex> 
               <RowFlex>
                  <InputsText
                     isDisabled={true}
                     name="razonsocial"
                     value={formData.razonsocial}
                     label="Razón social:*" type="text"
                      onChange={ handleChange}
                     options={options}/>      
               </RowFlex>
            </RowContainer>
            <RowContainer> 
               <InputsText
                  isDisabled={true}
                  width="95%"
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                  label="Departamento:*" type="text"/>
               
               <InputsText
                  isDisabled={true}
                  width="95%"
                  onChange={handleChange}
                  name="provincia"
                  value={formData.provincia}
                  label="Provincia:*"
                  type="text"/>
               
               <InputsText
                  isDisabled={true}
                  width="95%"
                  name="distrito"
                  value={formData.distrito}
                  onChange={handleChange}
                  label="Distrito:*"
                  type="text"/>
            </RowContainer>
            <RowContainer>
               {/* <SelectCustom
                  width="95%"
                  label="Codigo de departamento*"
                  name="tipodocumento"
                  options={options}
                  // value={formData.}
                  onChange={handleSelectChange} /> */}
               <InputsText       
                  width="95%"   
                  name="telefono"
                  label="Telefono:*"
                  type="text"
                  onChange={handleChange}
                  value={formData.telefono}/>
               <InputsText       
                  width="95%"   
                  name="celular"
                  label="Celular:*"
                  type="text"
                  onChange={handleChange}
                  value={formData.celular}
                  options={options} />
            </RowContainer>
            <RowContainer>
               <InputsText       
                  width="100%"   
                  name="direccion"
                  value={formData.direccion}
                  label="Dirección exacta:*"
                  onChange={handleChange}
                  type="text"
                  options={options} />
            </RowContainer>
            <RowContainer>
            <InputsText       
                  width="95%"   
                  name="correoElectronico"
                  label="Correo electronico:*"
                  value={formData.correoElectronico}
                  type="text"
                  onChange={handleChange}
                  options={options} />
               <InputsText       
                  width="95%"   
                  name="web"
                  label="Pagina web:*"
                  value={formData.web}
                  type="text"
                  onChange={handleChange}
                  options={options} />
            </RowContainer>
            <RowContainer>
               <SelectCustom
                  width="95%"
                  name="tamanoEmpresa"
                     label="Indique tamaño de empresa: *"
                     options={optionsEmpresa}
                     value={formData.tamanoEmpresa}
                     onChange={handleSelectChange} />               
               <SelectCustom
                  width="95%"
                  name="tipoEmpresa"
                     label="Indique tipo de empresa: *"
                     options={optionsEmpresaTipo}
                     value={formData.tipoEmpresa}
                     onChange={handleSelectChange} />
            </RowContainer>
            <RowContainer>
               <CheckboxWithLabel label="Si sus clientes les exigen algún sistema de cumplimiento social y/o certificación para la compra, mencione cual(es) *" />
               <CheckboxWithLabel label="Si cuenta con certificaciones sociales que incluyan también la materia en trabajo infantil. Mencione cual(es) *" />
            </RowContainer>
            <RowContainer>
                  <p>*Campo de llenado obligatorio</p>
                  <Button            
                     type="submit"
                     onClick={handleSubmitNext}
                     text="Siguiente"/>
            </RowContainer>    
         </Row>
      </Container>
   );
}

export default index;