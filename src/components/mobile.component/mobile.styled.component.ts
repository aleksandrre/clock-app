import styled from "styled-components";

export const Noactive = styled.div<{ fontSize: any, noactive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 26px;
  margin-top:${({ noactive }) => noactive ? "32px" : "-245px"};
  width: 77.33333%; //tichk
  height: 89.20539vh;
  transition: 0.3s;
  @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
    margin-left: 64px;
  }

  @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
    margin-left: 165px;
  }
  .divrefresh{
    display: flex;
  }
  .p1 {
    color: #ffffff;
    font-size: 12px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    width: 290px;

    line-height: 22px;
    @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
      font-size: 18px;
      width: 540px;
    }
    
    
  }
  .imgrefresh{
    
    
    
  }
  section {
    display: flex;
    flex-direction: column;
    section {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        
        margin-right: 16.44px;
      }
      h3 {
        color: #ffffff;
        font-size: ${({ fontSize }) => fontSize.mobileFonts.timeheaders};

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;

        letter-spacing: 3px;
        text-transform: uppercase;
        @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
          font-size:  ${({ fontSize }) => fontSize.tabletFonts.timeheaders};
          
    }
    @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
          font-size:  ${({ fontSize }) => fontSize.desktopFonts.timeheaders};
          
    }
      }
    }

    section {
      display: flex;
      flex-direction: row;
      align-items: flex-end;

      p {
        color: #ffffff;
        font-size: ${({ fontSize }) => fontSize.mobileFonts.time};
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        letter-spacing: -2.5px;
        line-height: 100px;

        margin-top: 16.5px;
        @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
          
          font-size:  ${({ fontSize }) => fontSize.tabletFonts.time};
          margin-bottom: 10px;
          margin-top: 40px;
        }
        @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
          font-size:  ${({ fontSize }) => fontSize.desktopFonts.time};
          margin-bottom: 30px;
          margin-top: 40px;
          
    }
      }

      h4 {
        color: #ffffff;
        font-size: ${({ fontSize }) => fontSize.mobileFonts.Bst};
        margin-bottom: 14px;
        margin-left: 15px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 300;
        @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
          font-size:  ${({ fontSize }) => fontSize.tabletFonts.Bst};
          margin-bottom: 0px;
          
        }
        @media (min-width:${({ theme }) => theme.responsive.desktop.width}){

          font-size:  ${({ fontSize }) => fontSize.desktopFonts.Bst};
          margin-bottom: 10px
          
        }
      }
    }

    h3 {
      color: #ffffff;
      font-size: ${({ fontSize }) => fontSize.mobileFonts.timeheaders};

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;

      letter-spacing: 3px;
      text-transform: uppercase;
      margin-top: 16px;

      @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
        font-size: ${({ fontSize }) => fontSize.tabletFonts.timeheaders};
        }
        @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
          font-size: ${({ fontSize }) => fontSize.desktopFonts.timeheaders};
        }
    }

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: ${({ fontSize }) => fontSize.mobileFonts.morebutton.width};
      height: ${({ fontSize }) => fontSize.mobileFonts.morebutton.height};
      background: #ffffff;
      border-radius: 28px;
      letter-spacing: 3.75px;
      font-size: 12px;
      margin-top: 48px;

      @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
        width: ${({ fontSize }) => fontSize.tabletFonts.morebutton.width};
      height: ${({ fontSize }) => fontSize.tabletFonts.morebutton.height};
        }
        @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
          width: ${({ fontSize }) => fontSize.desktopFonts.morebutton.width};
      height: ${({ fontSize }) => fontSize.desktopFonts.morebutton.height};
        }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #303030;
        width: ${({ fontSize }) => fontSize.mobileFonts.circleicon.width};
        height: ${({ fontSize }) => fontSize.mobileFonts.circleicon.height};
        margin-top: 0px;

        @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
          width: ${({ fontSize }) => fontSize.tabletFonts.circleicon.width};
        height: ${({ fontSize }) => fontSize.tabletFonts.circleicon.height};
        }
        @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
          width: ${({ fontSize }) => fontSize.desktopFonts.circleicon.width};
        height: ${({ fontSize }) => fontSize.desktopFonts.circleicon.height};
        }
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;



export const DivactiveDiv = styled.div<{ fontSize: any }>`
background-color:${({ theme }) => theme.colors.hidden} ;
width: 100%;

height: 256px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 70px;
.divmaindiv{
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 16px;
  
  @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
    flex-direction: row;
    justify-content: space-between;
    
   
  }
  @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
  }
  
}
  
  .divchild{
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
      margin-right: 100px;
      gap: 49px;
  }
  @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
    margin-right: 0px;
    margin-right: 400px;
  }
  
    
  }
  .divchildren{
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* margin-top: 16px; */
    @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
      flex-direction: column;
      align-items: start;
      
  }
  @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
  }
  
  }
  

h1{
  font-size: ${({ fontSize }) => fontSize.mobileFonts.h1};
  color: ${({ theme }) => theme.colors.h1};
  @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
    font-size: ${({ fontSize }) => fontSize.tabletFonts.h1};
  }
  @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
    font-size: ${({ fontSize }) => fontSize.desktopFonts.h1};
  }
  

}
h2{
  font-size: ${({ fontSize }) => fontSize.mobileFonts.h2};
  color: ${({ theme }) => theme.colors.h2};
  @media (min-width:${({ theme }) => theme.responsive.tablet.width}){
    font-size: ${({ fontSize }) => fontSize.tabletFonts.h2};
  }
  @media (min-width:${({ theme }) => theme.responsive.desktop.width}){
    font-size: ${({ fontSize }) => fontSize.desktopFonts.h};
  }
  
}
`
