import React, { useContext, useState } from 'react';
import InputsText from '../utils/Inputs';
import { Container, Row, RowFlex,RowContainer } from '../utils/Container';
import SelectCustom from '../utils/Selects';
import Button from '../utils/Buttons';
import CheckboxWithLabel from '../utils/Checkbox';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../Context/Context';

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

   const { step2Data, setStep2Data } = useContext(AppContext);

   const [formData, setFormData] = useState({
      ruc:'',
     razonsocial: '',
     departamento: '',
     provincia: '',
     distrito: '',
     direccion: '',
     correoElectronico: '',
      web: '',
      celular: '',
      telefono: '',
     tamanoEmpresa: '',
     tipoEmpresa: '',
     cantidadTrabajadores: '',
     paisExporta: '',
     certificadoCompra: '',
     certificadoInfantil: '',
   });
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

   const history = useNavigate();
   const handleSubmitNext = (e) => {
      e.preventDefault();
      setStep2Data(formData);
      history('/infoEmpresa');
     
    };
   
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
                  <InputsText
                     label="RUC:*" type="text"
                     name="ruc"
                     onChange={handleChange}
                     value={formData.ruc}
                  placeholder="Ingrese número de documento"
                  options={options} /> 
               <Button isRounded={true} isMarginTop={true}
                       text="Buscar" />
               </RowFlex> 
               <RowFlex>
                  <InputsText
                     name="razonsocial"
                     value={formData.razonsocial}
                     label="Razón social:*" type="text"
                      onChange={ handleChange}
                     options={options}/>      
               </RowFlex>
            </RowContainer>
            <RowContainer> 
               <InputsText
                  width="95%"
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                  label="Departamento:*" type="text"
                  options={options} />
               
               <InputsText
                  width="95%"
                  onChange={handleChange}
                  name="provincia"
                  value={formData.provincia}
                  label="Provincia:*"
                  type="text"
                  options={options} />
               
               <InputsText
                  width="95%"
                  name="distrito"
                  value={formData.distrito}
                  onChange={handleChange}
                  label="Distrito:*"
                  type="text"
                           options={options} />
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
                  value={formData.telefono}
                  options={options} />
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