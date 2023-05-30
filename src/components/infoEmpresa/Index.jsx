import React, { useState, useEffect} from 'react';
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
  
const Index = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
   
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const openModal = () => {
    setModalIsOpen(true);
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

  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState({
    name: '',
    firstName: '',
    lastName: '',
    middleName: '',
    documentType: '',
    position: '',
    email: '',
    phone: '',
  });

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
    setNewRow({ ...newRow2, [name]: value });
  };

  const handleCheckboxChange = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleCheckboxChange2 = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
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
      setNewRow({

        name: '',
        firstName: '',
        lastName: '',
        middleName: '',
        documentType: '',
        position: '',
        email: '',
        phone: '',
      });
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

        name: '',
        firstName: '',
        lastName: '',
        middleName: '',
        documentType: '',
        position: '',
        email: '',
        phone: '',
      });
    } else {
      toast.error('Por favor, complete todos los campos obligatorios.');
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
      <Input name="name" value={row.name} onChange={handleInputChange} disabled />,
      <Input name="firstName" value={row.firstName} onChange={handleInputChange} disabled />,
      <Input name="lastName" value={row.lastName} onChange={handleInputChange} disabled />,
      <Input name="documentType" value={row.documentType} onChange={handleInputChange} disabled />,
      <Input name="position" value={row.position} onChange={handleInputChange} disabled />,
      <Input name="email" value={row.email} onChange={handleInputChange} disabled />,
      <Input name="phone" value={row.phone} onChange={handleInputChange} disabled />,
    ]);
  }

  const headers2 = ['', 'Departmento', 'Provincia', 'Distrito', 'Producto', 'Hectareas']

  const data3 = [
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
   
  let datas2 = [];

  if (rows.length > 0) {
    datas2 = rows.map((row, index) => [
      <input
        type="checkbox"
        name="selectedRows"
        checked={selectedRows.includes(index)}
        onChange={() => handleCheckboxChange(index)}
      />,
      <Input name="name" value={row.name} onChange={handleInputChange} disabled />,
      <Input name="firstName" value={row.firstName} onChange={handleInputChange} disabled />,
      <Input name="lastName" value={row.lastName} onChange={handleInputChange} disabled />,
      <Input name="documentType" value={row.documentType} onChange={handleInputChange} disabled />,
      <Input name="position" value={row.position} onChange={handleInputChange} disabled />,
      <Input name="email" value={row.email} onChange={handleInputChange} disabled />,
      <Input name="phone" value={row.phone} onChange={handleInputChange} disabled />,
    ]);
  }
 
 

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
                <Tables headers={headers} data={data3} />
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
      </div> 
    </Row>
  </Container>
  );
};

export default Index;
