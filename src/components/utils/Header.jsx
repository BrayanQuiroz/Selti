import React from 'react';
import logo from '../../assets/logoperu.png'
import styled from 'styled-components';

const HeaderContainer = styled.header`
   background-color: #DC2626;

   & div{
      max-width: 73rem;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      @media (min-width: 640px) {
         padding-left: 1.5rem;
         font-weight: 700;
         padding-right: 1.5rem;
      }
      @media (min-width: 1024px) {
         padding-left: 2rem;
         padding-right: 2rem;
      }

      & img{
         height: 3rem;
         width: auto;         
      }
      & h1{
         color: #fff;
         font-size: 1.25rem;
         line-height: 1.75rem;
         font-weight: 700;
      }
   }
`;

const  Header= (props)=> {
   return (
      <HeaderContainer >
         <div>
            <img src={logo} alt="Logo" />
            <h1>SELTI-Postulación</h1>
         </div>
    </HeaderContainer>
   );
}

export default Header;