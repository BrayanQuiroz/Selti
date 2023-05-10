import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
   position: fixed;
   bottom: 0; 
   width: 100%; 
   background-color: #1f2937;

   & div{
      max-width: 72rem;
      margin-left: auto;
      margin-right: auto;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      @media (min-width: 640px) {
         padding-left: 1.5rem;
         padding-right: 1.5rem;
      }
      @media (min-width: 1024px) {
         padding-left: 2rem;
         padding-right: 2rem;
      }

      & p{
         color: #9CA3AF;
         font-size: 0.875rem;
         line-height: 1.25rem;
         text-align: center;
      }
   }
`;

const footer = (props)=> {
   return (
      <Footer>
         <div >
            <p>
               Ministerio de Trabajo y Promoción del Empleo.
            </p>
            <p>
            Mesa de Partes: Av. Salaverry 655 - Jesús María - Central Telefónica: 630-6000 / 630-6030
            </p>
         </div>
    </Footer>
   );
}

export default footer;