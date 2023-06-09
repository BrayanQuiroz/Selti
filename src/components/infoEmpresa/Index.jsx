import React, { useContext, useState } from 'react';
import { Container, Row, RowFlex, RowContainer } from '../utils/Container';
import ButtonTwo from '../utils/ButtonsTwo';
import Modal from '../utils/Modal';
import Input from '../utils/Inputs';
import Tables from '../utils/Tables';
import SelectCustom from '../utils/Selects';
import Button from '../utils/Buttons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckboxTwo from '../utils/CheckboxTwo'; 
import { useNavigate } from "react-router-dom";
import { AppContext } from '../Context/Context';
  
const Index = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);

 
   
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const { step3Data, setStep3Data } = useContext(AppContext);

  const history = useNavigate();
  const handleSubmitNext = (e) => {
     e.preventDefault();
     setStep3Data(formData);
     history('/finalizado');
    
   };


  const openModal = () => {
    setModalIsOpen(true);
    console.log('se activó modal');
  };
  const openModal2 = () => {
    setModalIsOpen2(true);
    console.log('se activó modal');
  };
  const options = [
    { value: '01', label: 'Seleccione una opción' },
    { value: '03', label: 'DOCUMENTO DE IDENTIDAD' },
    { value: '06', label: 'CARNET DE EXTRANJERÍA' },
    { value: '26', label: 'CARNET DE PERMISO TEMPORAL DE PERMANENCIA' },
  ];

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };

  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState([{
    name: '',
    firstName: '',
    lastName: '',
    middleName: '',
    documentType: '',
    position: '',
    email: '',
    phone: '',
  }]);

  const [rows2, setRows2] = useState([]);
  const [newRow2, setNewRow2] = useState({
    Departamento: '',
    Provincia: '',
    Distrito: '',
    Porducto: '',
    Hectareas: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setNewRow2({ ...newRow2, [name]: value });
  };

  const handleCheckboxChange = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleCheckboxChange2 = (index) => {
    if (selectedRows2.includes(index)) {
      setSelectedRows2(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows2([...selectedRows, index]);
    }
  };
   
  const handleDeleteClick = () => {
    const remainingRows = rows.filter((_, index) => !selectedRows.includes(index));
    setRows(remainingRows);
    setSelectedRows([]);
  };
  
  const handleDeleteClick2 = () => {
    const remainingRows = rows.filter((_, index) => !selectedRows.includes(index));
    setRows(remainingRows);
    setSelectedRows([]);
  };
  
  const [formData, setFormData] = useState({

    ...newRow,...newRow2

  })
 

  const handleAddClick = () => {
    if (
      newRow.name.trim() !== '' &&
      newRow.firstName.trim() !== '' &&
      newRow.lastName.trim() !== '' &&
      newRow.documentType.trim() !== '' &&
      newRow.position.trim() !== '' &&
      newRow.email.trim() !== '' &&
      newRow.phone.trim() !== ''
    ) {
      setRows([...rows, newRow]);
      setNewRow([{

        name: '',
        firstName: '',
        lastName: '',
        middleName: '',
        documentType: '',
        position: '',
        email: '',
        phone: '',
      }]);
    } else {
      toast.error('Por favor, complete todos los campos obligatorios.');
    }
  };

  const handleAddClick2 = () => {
    if (
      newRow2.Departamento.trim() !== '' &&
      newRow2.Provincia.trim() !== '' &&
      newRow2.Distrito.trim() !== '' &&
      newRow2.Porducto.trim() !== '' &&
      newRow2.Hectareas.trim() !== ''
    ) {
      setRows2([...rows2, newRow2]);
      setNewRow2({

        Departamento: '',
        Provincia: '',
        Distrito: '',
        Porducto: '',
        Hectareas: '',
      });
    } else {
      toast.error('Por favor, complete todos los campos obligatorios22.');
    }
  };
   

  const headers = ['', 'Nombres', 'Apellido Paterno', 'Apellido Materno', 'Nro. de Doc.', 'Cargo', 'Email', 'Celular'];

  const data2 = [
    [
      '',
      <Input name="name" value={newRow.name} onChange={handleInputChange} required />,
      <Input name="firstName" value={newRow.firstName} onChange={handleInputChange} required />,
      <Input name="lastName" value={newRow.lastName} onChange={handleInputChange} required />,
      <Input name="documentType" value={newRow.documentType} onChange={handleInputChange} required />,
      <Input name="position" value={newRow.position} onChange={handleInputChange} required />,
      <Input name="email" value={newRow.email} onChange={handleInputChange} required />,
      <Input name="phone" value={newRow.phone} onChange={handleInputChange} required />,
    ],
  ];
   
  let data = [];

  if (rows.length > 0) {
    data = rows.map((row, index) => [
      <input
        type="checkbox"
        name="selectedRows"
        checked={selectedRows.includes(index)}
        onChange={() => handleCheckboxChange(index)}
      />,
      <span name="name">{row.name}</span>,
      <span name="firstName">{row.firstName}</span>,
      <span name="lastName">{row.lastName}</span>,
      <span name="Porducto">{row.documentType}</span>,
      <span name="position">{row.position}</span>,
      <span name="email">{row.email}</span>,
      <span name="phone">{row.phone}</span>,
    ]);
  }

  const headers2 = ['', 'Departmento', 'Provincia', 'Distrito', 'Producto', 'Hectareas']



  const data3 = [
     [
       '',
      <Input name="Departamento" value={newRow2.Departamento} onChange={handleInputChange2 } required />,
      <Input name="Provincia" value={newRow2.Provincia} onChange={handleInputChange2 } required />,
      <Input name="Distrito" value={newRow2.Distrito} onChange={handleInputChange2 } required />,
      <Input name="Porducto" value={newRow2.Porducto} onChange={handleInputChange2 } required />,
      <Input name="Hectareas" value={newRow2.Hectareas} onChange={handleInputChange2 } required />,

    ],
  ];
   
  let datas2 = [];

  if (rows.length > 0) {
    datas2 = rows2.map((row, index) => [
      <input
        type="checkbox"
        name="selectedRows"
        checked={selectedRows.includes(index)}
        onChange={() => handleCheckboxChange2(index)}
      />,

      <span name="Departamento">{row.Departamento}</span>,
      <span name="Provincia">{row.Provincia}</span>,
      <span name="Distrito">{row.Distrito}</span>,
      <span name="Porducto">{row.Porducto}</span>,
      <span name="Hectareas">{row.Hectareas}</span>,

    ]);
  }
  console.log(datas2);
  console.log(data);
 

  return (
    <Container>
      <Row padding="2rem">
        <div className='RowThree'> 
          <RowContainer>
            <div>
              <p>REPRESENTANTE(S) LEGAL(ES)</p>
              <p>(Ingresar un máximo de 3 presentantes)</p>
            </div>
          </RowContainer>
          <RowContainer>
            <div>
              <ButtonTwo isColor={true} onClick={openModal} text="Agregar persona" />
              <ButtonTwo isColor={false} onClick={handleDeleteClick} text="Eliminar persona" />
            </div>
            <Modal isOpen={modalIsOpen} closeModal={closeModal}>
              <RowFlex width="80%">
                <SelectCustom
                  label="Tipo de documento*"
                  options={options}
                  value={selectedOption}
                  onChange={handleSelectChange}
                  width="100%"
                />
                <Input label="Ingrese Documento" />
                <Button isRounded={true} isMarginTop={true} text="Buscar" />
              </RowFlex>
              <Row>
                <Tables headers={headers} data={data2} />
                <ButtonTwo isColor={true} onClick={handleAddClick} text="Guardar" />
                <ToastContainer position="top-center" autoClose={1000} />
              </Row>
            </Modal>
          </RowContainer>
          <div>
            <Tables headers={headers} data={data} />
          </div>
        
          <div>
            <RowContainer>
              <div>
                <p>UBICACION DE UNIDADES PRODUCTIVAS</p>
                {/* <p>(Ingresar un máximo de 3 personas de contacto)</p> */}
              </div>
          </RowContainer>
          <RowContainer>
            <div>
              <ButtonTwo isColor={true} onClick={openModal2} text="Agregar persona" />
              <ButtonTwo isColor={false} onClick={handleDeleteClick} text="Eliminar persona" />
            </div>
            <Modal isOpen={modalIsOpen2} closeModal={closeModal2}>

                <Row>
                <Tables headers={headers2} data={data3} />
                <ButtonTwo isColor={true} onClick={handleAddClick2} text="Guardar" />
                <ToastContainer position="top-center" autoClose={1000} />
              </Row>
            </Modal>
          </RowContainer>
            <div>
              <Tables headers={headers2} data={datas2} />
            </div>
            <div>
              <CheckboxTwo text='Manifiesto mi conformidad a recibir por correo electrónico toda comunicación por parte del Ministerio de TRabajo y Promoción del Empleo, realativa al desarrollo del proceso de reconocimiento "Sello LIbre de Trabajo Infantil". *'/>
              <CheckboxTwo text='Declaro bajo juramento que la información que suministrada para que mi represeantado postule al Reconocimiento "Sello Libre de Trabajo Infantil" a cargo del Ministerio de Trabajo y Promoción del Empleo de Perú, es veraz, fidedigna, completa y exacta. *'/>
            </div>
          </div>
          <RowContainer>
                  <p>*Campo de llenado obligatorio</p>
                  <Button            
                     type="submit"
                     onClick={handleSubmitNext}
                     text="Siguiente"/>
            </RowContainer> 
      </div> 
    </Row>
  </Container>
  );
};

export default Index;
