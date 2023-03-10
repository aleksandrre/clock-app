import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{ fontSize: any; theme: any }>`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   body{
     backdrop-filter: brightness(50%);
    position: relative;
    padding-top:1px;
    overflow-y: hidden;
    width: 100vw;
    height: 100vh;
    

    
    background-image:url( ${({ theme }) => theme.responsive.mobile.backgroundimg}) ;
    background-repeat: no-repeat;
    background-size: cover;
    @media  (min-width:${({ theme }) => theme.responsive.tablet.width}){
      background-image:url( ${({ theme }) => theme.responsive.tablet.backgroundimg}) ;
    }
    
    @media  (min-width:${({ theme }) => theme.responsive.desktop.width}){
      background-image:url( ${({ theme }) => theme.responsive.desktop.backgroundimg}) ;
    }
  }
  img{
    width:23.56px ;
    height:23.56px ;
  }
      
    

   
`;

export default GlobalStyles;
