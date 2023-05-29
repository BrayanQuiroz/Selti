import React from 'react';
import Modal from 'react-modal';
import ButtonTwo from './ButtonsTwo';

const Modals = ({isOpen, closeModal, children })=> {

   const customStyles = {
      content: {
         width: '800px',
         height: '350px',
         margin: 'auto',
         top: '20%', 
         transform: 'translateY(-50%)',
         paddingTop: '2rem'
      }
   }

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={closeModal}
         contentLabel="Modal"
         style={customStyles}
      >
         { children }
      </Modal>
   );
}

export default Modals;