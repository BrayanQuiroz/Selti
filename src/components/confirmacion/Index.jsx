import React from 'react';
import { IconConfirmacion,ContainerConfirmacion } from './Styles/'
import ImgMTPE from '../../assets/logoperu.png'

const Index =(props)=> {
   return (

         <ContainerConfirmacion>
            <IconConfirmacion />
            <p>¡Hemos recibido tu registro correctamente!</p>
            <p>Recibirás un usuario y contraseña para acceder al sistema</p>
            <p> una vez que se hayan verificado  los datos enviados.</p>
            <img src={ImgMTPE} alt="" />
         </ContainerConfirmacion>

   );
}

export default Index;